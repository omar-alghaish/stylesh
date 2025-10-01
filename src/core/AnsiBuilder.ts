/**
 * AnsiBuilder - Handles ANSI escape code generation
 */

const RESET = '\x1b[0m';

export class AnsiBuilder {
  private codes: string[] = [];

  /**
   * Add a text color
   */
  addTextColor(r: number, g: number, b: number): this {
    this.codes.push(`\x1b[38;2;${r};${g};${b}m`);
    return this;
  }

  /**
   * Add a background color
   */
  addBackgroundColor(r: number, g: number, b: number): this {
    this.codes.push(`\x1b[48;2;${r};${g};${b}m`);
    return this;
  }

  /**
   * Build the ANSI code string
   */
  build(): string {
    return this.codes.join('');
  }

  /**
   * Wrap text with ANSI codes and reset
   */
  wrap(text: string): string {
    if (this.codes.length === 0) return text;
    return `${this.build()}${text}${RESET}`;
  }

  /**
   * Reset the builder
   */
  reset(): this {
    this.codes = [];
    return this;
  }

  /**
   * Get the reset code
   */
  static getResetCode(): string {
    return RESET;
  }
}