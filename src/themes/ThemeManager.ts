/**
 * ThemeManager - Manage and apply custom themes
 */

import { BorderStyle, Alignment } from '../core/types';

export interface Theme {
  textColor?: string;
  backgroundColor?: string;
  borderStyle?: BorderStyle;
  borderColor?: string;
  borderDirection?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical';
  alignment?: Alignment;
  gradient?: string;
  bgGradient?: string;
}

class ThemeManagerClass {
  private themes: Map<string, Theme> = new Map();

  constructor() {
    // Register default themes
    this.registerDefaultThemes();
  }

  /**
   * Register default themes
   */
  private registerDefaultThemes(): void {
    // Error theme
    this.register('error', {
      textColor: 'white',
      backgroundColor: 'darkRed',
      borderStyle: 'solid',
      borderColor: 'red',
      alignment: 'center',
    });

    // Success theme
    this.register('success', {
      textColor: 'white',
      backgroundColor: 'darkGreen',
      borderStyle: 'rounded',
      borderColor: 'green',
      alignment: 'center',
    });

    // Warning theme
    this.register('warning', {
      textColor: 'black',
      backgroundColor: 'yellow',
      borderStyle: 'double',
      borderColor: 'orange',
      alignment: 'center',
    });

    // Info theme
    this.register('info', {
      textColor: 'white',
      backgroundColor: 'darkBlue',
      borderStyle: 'solid',
      borderColor: 'cyan',
      alignment: 'center',
    });

    // Danger theme
    this.register('danger', {
      textColor: 'yellow',
      backgroundColor: 'red',
      borderStyle: 'double',
      borderColor: 'yellow',
      alignment: 'center',
    });

    // Primary theme
    this.register('primary', {
      textColor: 'white',
      backgroundColor: 'blue',
      borderStyle: 'solid',
      borderColor: 'lightBlue',
      alignment: 'center',
    });

    // Secondary theme
    this.register('secondary', {
      textColor: 'white',
      backgroundColor: 'gray',
      borderStyle: 'dashed',
      borderColor: 'lightGray',
      alignment: 'center',
    });

    // Gradient rainbow theme
    this.register('rainbow', {
      gradient: 'red',
      borderStyle: 'rounded',
      borderColor: 'cyan',
      alignment: 'center',
    });

    // Dark theme
    this.register('dark', {
      textColor: 'lightGray',
      backgroundColor: 'black',
      borderStyle: 'solid',
      borderColor: 'darkGray',
      alignment: 'left',
    });

    // Light theme
    this.register('light', {
      textColor: 'black',
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderColor: 'silver',
      alignment: 'left',
    });
  }

  /**
   * Register a new theme
   */
  register(name: string, theme: Theme): void {
    this.themes.set(name.toLowerCase(), theme);
  }

  /**
   * Get a theme by name
   */
  get(name: string): Theme | undefined {
    return this.themes.get(name.toLowerCase());
  }

  /**
   * Check if a theme exists
   */
  has(name: string): boolean {
    return this.themes.has(name.toLowerCase());
  }

  /**
   * Remove a theme
   */
  remove(name: string): boolean {
    return this.themes.delete(name.toLowerCase());
  }

  /**
   * Get all theme names
   */
  listThemes(): string[] {
    return Array.from(this.themes.keys());
  }

  /**
   * Clear all themes (except defaults)
   */
  clearCustomThemes(): void {
    const defaultThemes = [
      'error', 'success', 'warning', 'info', 'danger',
      'primary', 'secondary', 'rainbow', 'dark', 'light'
    ];
    
    for (const [name] of this.themes) {
      if (!defaultThemes.includes(name)) {
        this.themes.delete(name);
      }
    }
  }
}

// Export singleton instance
export const ThemeManager = new ThemeManagerClass();