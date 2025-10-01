/**
 * String prototype extensions for convenient usage
 */
import { StringStyler } from '../core/StringStyler';
import { Alignment, BorderStyle, BorderDirection } from '../core/types';

declare global {
  interface String {
    /**
     * Set text color
     */
    color(colorName: string): StringStyler;

    /**
     * Set background color
     */
    bg(colorName: string): StringStyler;

    /**
     * Apply gradient text colors
     */
    gradient(colorGroup: string | string[]): StringStyler;

    /**
     * Apply gradient background colors
     */
    bgGradient(colorGroup: string | string[]): StringStyler;

    /**
     * Apply a predefined theme
     */
    theme(themeName: string): StringStyler;

    /**
     * Apply theme and create border box
     */
    themeBox(themeName: string): string;

    /**
     * Create a solid border
     */
    createSolidBorder(
      colorName?: string,
      alignment?: Alignment
    ): string;

    /**
     * Create a rounded border
     */
    createRoundedBorder(
      colorName?: string,
      alignment?: Alignment
    ): string;

    /**
     * Create a double border
     */
    createDoubleBorder(
      colorName?: string,
      alignment?: Alignment
    ): string;

    /**
     * Create a dashed border
     */
    createDashedBorder(
      colorName?: string,
      alignment?: Alignment
    ): string;

    /**
     * Create a dotted border
     */
    createDottedBorder(
      colorName?: string,
      alignment?: Alignment
    ): string;

    /**
     * Create a custom border
     */
    createCustomBorder(
      style?: BorderStyle,
      colorName?: string,
      direction?: BorderDirection,
      alignment?: Alignment
    ): string;
  }
}

// Extend String prototype
String.prototype.color = function (colorName: string): StringStyler {
  return new StringStyler(String(this)).color(colorName);
};

String.prototype.bg = function (colorName: string): StringStyler {
  return new StringStyler(String(this)).bg(colorName);
};

String.prototype.gradient = function (colorGroup: string): StringStyler {
  return new StringStyler(String(this)).gradient(colorGroup);
};

String.prototype.bgGradient = function (colorGroup: string): StringStyler {
  return new StringStyler(String(this)).bgGradient(colorGroup);
};

// ADD THESE TWO MISSING IMPLEMENTATIONS:
String.prototype.theme = function (themeName: string): StringStyler {
  return new StringStyler(String(this)).theme(themeName);
};

String.prototype.themeBox = function (themeName: string): string {
  return new StringStyler(String(this)).themeBox(themeName);
};

String.prototype.createSolidBorder = function (
  colorName: string = 'reset',
  alignment: Alignment = 'center'
): string {
  return new StringStyler(String(this)).border('solid', colorName, 'all', alignment);
};

String.prototype.createRoundedBorder = function (
  colorName: string = 'reset',
  alignment: Alignment = 'center'
): string {
  return new StringStyler(String(this)).border('rounded', colorName, 'all', alignment);
};

String.prototype.createDoubleBorder = function (
  colorName: string = 'reset',
  alignment: Alignment = 'center'
): string {
  return new StringStyler(String(this)).border('double', colorName, 'all', alignment);
};

String.prototype.createDashedBorder = function (
  colorName: string = 'reset',
  alignment: Alignment = 'center'
): string {
  return new StringStyler(String(this)).border('dashed', colorName, 'all', alignment);
};

String.prototype.createDottedBorder = function (
  colorName: string = 'reset',
  alignment: Alignment = 'center'
): string {
  return new StringStyler(String(this)).border('dotted', colorName, 'all', alignment);
};

String.prototype.createCustomBorder = function (
  style: BorderStyle = 'solid',
  colorName: string = 'reset',
  direction: BorderDirection = 'all',
  alignment: Alignment = 'center'
): string {
  return new StringStyler(String(this)).border(style, colorName, direction, alignment);
};

export {};