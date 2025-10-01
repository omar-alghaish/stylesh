/**
 * Border character definitions
 */

export interface BorderChars {
  horizontal: string;
  vertical: string;
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
}

export const BORDER_STYLES: Record<string, BorderChars> = {
  solid: {
    horizontal: '─',
    vertical: '│',
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
  },
  rounded: {
    horizontal: '─',
    vertical: '│',
    topLeft: '╭',
    topRight: '╮',
    bottomLeft: '╰',
    bottomRight: '╯',
  },
  double: {
    horizontal: '═',
    vertical: '║',
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
  },
  dashed: {
    horizontal: '-',
    vertical: '|',
    topLeft: '+',
    topRight: '+',
    bottomLeft: '+',
    bottomRight: '+',
  },
  dotted: {
    horizontal: '•',
    vertical: '•',
    topLeft: '•',
    topRight: '•',
    bottomLeft: '•',
    bottomRight: '•',
  },
};