/**
 * Text width calculation utilities
 * Properly handles ANSI escape codes
 */

const ANSI_REGEX = /\x1b\[[0-9;]*m/g;

/**
 * Calculate the visible width of a string (excluding ANSI codes)
 */
export function getVisibleWidth(text: string): number {
  const cleanText = text.replace(ANSI_REGEX, '');
  return cleanText.length;
}

/**
 * Split text into lines and get the maximum visible width
 */
export function getMaxLineWidth(text: string, delimiter: string = '\n'): number {
  const lines = text.split(delimiter);
  let maxWidth = 0;
  
  for (const line of lines) {
    const width = getVisibleWidth(line);
    if (width > maxWidth) {
      maxWidth = width;
    }
  }
  
  return maxWidth;
}

/**
 * Get text lines and their properties
 */
export function parseTextLines(text: string, delimiter: string = '\n'): {
  lines: string[];
  maxWidth: number;
} {
  const lines = text.split(delimiter);
  const maxWidth = getMaxLineWidth(text, delimiter);
  
  return { lines, maxWidth };
}

/**
 * Strip all ANSI codes from text
 */
export function stripAnsi(text: string): string {
  return text.replace(ANSI_REGEX, '');
}