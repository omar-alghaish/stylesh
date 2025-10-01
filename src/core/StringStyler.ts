/**
 * StringStyler - Main class for chaining text styles
 * Ensures proper order: background → text color → border
 */

import { TEXT_COLORS, COLOR_GROUPS } from '../constants/colors';
import { BG_COLORS, BG_COLOR_GROUPS } from '../constants/backgrounds';
import { BORDER_STYLES } from '../constants/borders';
import { AnsiBuilder } from './AnsiBuilder';
import {  parseTextLines } from '../utils/textWidth';
import { alignLines } from '../utils/textAlign';
import { Alignment, BorderStyle, BorderDirection } from './types';
import { ThemeManager } from '../themes/ThemeManager';

export class StringStyler {
  private text: string;
  private bgColor: string | null = null;
  private textColor: string | null = null;
  private gradientConfig: { colors: string[]; type: 'text' | 'bg' } | null = null;

  constructor(text: string) {
    this.text = text;
  }

  /**
   * Convert to string automatically for console.log
   */
  [Symbol.toPrimitive](hint: string): string {
    if (hint === 'string') {
      return this.toString();
    }
    return this.toString();
  }

  /**
   * Custom inspect for Node.js console.log
   */
  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return this.toString();
  }

  /**
   * Apply a theme
   */
  theme(themeName: string): this {
    const theme = ThemeManager.get(themeName);
    if (!theme) {
      console.warn(`Theme "${themeName}" not found. Available themes:`, ThemeManager.listThemes());
      return this;
    }

    if (theme.backgroundColor) {
      this.bg(theme.backgroundColor);
    }
    if (theme.textColor) {
      this.color(theme.textColor);
    }
    if (theme.gradient) {
      this.gradient(theme.gradient);
    }
    if (theme.bgGradient) {
      this.bgGradient(theme.bgGradient);
    }

    return this;
  }

  /**
   * Apply theme and return border (convenience method)
   */
  themeBox(themeName: string): string {
    const theme = ThemeManager.get(themeName);
    if (!theme) {
      return this.toString();
    }

    this.theme(themeName);

    return this.border(
      theme.borderStyle || 'solid',
      theme.borderColor || 'reset',
      theme.borderDirection || 'all',
      theme.alignment || 'center'
    );
  }

  /**
   * Set background color
   */
  bg(colorName: string): this {
    this.bgColor = colorName;
    return this;
  }

  /**
   * Set text color
   */
  color(colorName: string): this {
    this.textColor = colorName;
    return this;
  }

  /**
   * Apply gradient colors to text
   */
  gradient(colorGroup: string | string[]): this {
    let colors: string[];
    
    if (Array.isArray(colorGroup)) {
      // Custom gradient with array of color names
      colors = colorGroup;
    } else {
      // Predefined gradient group
      colors = COLOR_GROUPS[colorGroup as keyof typeof COLOR_GROUPS] || [];
    }
    
    if (colors.length > 0) {
      this.gradientConfig = { colors, type: 'text' };
    }
    return this;
  }

  /**
   * Apply gradient colors to background
   */
  bgGradient(colorGroup: string | string[]): this {
    let colors: string[];
    
    if (Array.isArray(colorGroup)) {
      // Custom gradient with array of color names
      colors = colorGroup;
    } else {
      // Predefined gradient group
      colors = BG_COLOR_GROUPS[colorGroup as keyof typeof BG_COLOR_GROUPS] || [];
    }
    
    if (colors.length > 0) {
      this.gradientConfig = { colors, type: 'bg' };
    }
    return this;
  }

  /**
   * Create a border around the text
   */
  border(
    style: BorderStyle = 'solid',
    colorName: string = 'reset',
    direction: BorderDirection = 'all',
    alignment: Alignment = 'center'
  ): string {
    // Apply colors BEFORE measuring width
    const coloredText = this._applyColors();
    const { lines, maxWidth } = parseTextLines(coloredText, '\n');
    const chars = BORDER_STYLES[style];
    
    if (!chars) {
      throw new Error(`Unknown border style: ${style}`);
    }

    const rgb = TEXT_COLORS[colorName] || TEXT_COLORS.reset;
    const builder = new AnsiBuilder();
    
    if (colorName !== 'reset') {
      builder.addTextColor(rgb.r, rgb.g, rgb.b);
    }

    const coloredChar = (char: string) => 
      colorName === 'reset' ? char : builder.wrap(char);

    // Fix: horizontal line should not include corner characters
    const horizontalLine = chars.horizontal.repeat(maxWidth + 2);
    const coloredHorizontalLine = coloredChar(horizontalLine);
    
    const alignedLines = alignLines(lines, maxWidth, alignment);

    // Handle different border directions
    switch (direction) {
      case 'top':
        return [
          coloredChar(chars.topLeft) + coloredHorizontalLine + coloredChar(chars.topRight),
          ...alignedLines.map(line => ` ${line} `),
        ].join('\n');

      case 'bottom':
        return [
          ...alignedLines.map(line => ` ${line} `),
          coloredChar(chars.bottomLeft) + coloredHorizontalLine + coloredChar(chars.bottomRight),
        ].join('\n');

      case 'left':
        return alignedLines.map(line => coloredChar(chars.vertical) + ` ${line} `).join('\n');

      case 'right':
        return alignedLines.map(line => ` ${line} ` + coloredChar(chars.vertical)).join('\n');

      case 'horizontal':
        return [
          coloredChar(chars.topLeft) + coloredHorizontalLine + coloredChar(chars.topRight),
          ...alignedLines.map(line => ` ${line} `),
          coloredChar(chars.bottomLeft) + coloredHorizontalLine + coloredChar(chars.bottomRight),
        ].join('\n');

      case 'vertical':
        return alignedLines.map(line => 
          coloredChar(chars.vertical) + ` ${line} ` + coloredChar(chars.vertical)
        ).join('\n');

      case 'all':
      default:
        return [
          coloredChar(chars.topLeft) + coloredHorizontalLine + coloredChar(chars.topRight),
          ...alignedLines.map(line => 
            coloredChar(chars.vertical) + ` ${line} ` + coloredChar(chars.vertical)
          ),
          coloredChar(chars.bottomLeft) + coloredHorizontalLine + coloredChar(chars.bottomRight),
        ].join('\n');
    }
  }

  /**
   * Apply colors to text (internal method)
   */
  private _applyColors(): string {
    let result = this.text;

    // Apply gradient if configured
    if (this.gradientConfig) {
      result = this._applyGradient(result);
      return result;
    }

    // Apply background and text colors
    const { lines } = parseTextLines(result);
    const styledLines = lines.map(line => {
      if (!line) return line;

      const builder = new AnsiBuilder();

      // Background color first
      if (this.bgColor && this.bgColor !== 'reset') {
        const bgRgb = BG_COLORS[this.bgColor];
        if (bgRgb) {
          builder.addBackgroundColor(bgRgb.r, bgRgb.g, bgRgb.b);
        }
      }

      // Text color second
      if (this.textColor && this.textColor !== 'reset') {
        const textRgb = TEXT_COLORS[this.textColor];
        if (textRgb) {
          builder.addTextColor(textRgb.r, textRgb.g, textRgb.b);
        }
      }

      return builder.wrap(line);
    });

    return styledLines.join('\n');
  }

  /**
   * Apply gradient colors to text
   */
  private _applyGradient(text: string): string {
    if (!this.gradientConfig) return text;

    const { colors, type } = this.gradientConfig;
    const chars = text.split('');
    const result: string[] = [];

    for (let i = 0; i < chars.length; i++) {
      const colorName = colors[i % colors.length];
      const rgb = type === 'bg' ? BG_COLORS[colorName] : TEXT_COLORS[colorName];
      
      if (!rgb) {
        result.push(chars[i]);
        continue;
      }

      const builder = new AnsiBuilder();
      
      if (type === 'bg') {
        builder.addBackgroundColor(rgb.r, rgb.g, rgb.b);
      } else {
        builder.addTextColor(rgb.r, rgb.g, rgb.b);
      }

      result.push(builder.wrap(chars[i]));
    }

    return result.join('');
  }

  /**
   * Get the final styled string
   */
  toString(): string {
    return this._applyColors();
  }
}