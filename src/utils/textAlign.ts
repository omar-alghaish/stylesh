/**
 * Text alignment utilities
 */

import { getVisibleWidth } from './textWidth';
import { Alignment } from '../core/types';

/**
 * Pad text to align it within a given width
 */
export function padText(text: string, totalWidth: number, alignment: Alignment = 'center'): string {
  const visibleWidth = getVisibleWidth(text);
  const paddingNeeded = totalWidth - visibleWidth;
  
  if (paddingNeeded <= 0) {
    return text;
  }
  
  switch (alignment) {
    case 'left':
      return text + ' '.repeat(paddingNeeded);
    
    case 'right':
      return ' '.repeat(paddingNeeded) + text;
    
    case 'center':
    default:
      const leftPadding = Math.floor(paddingNeeded / 2);
      const rightPadding = Math.ceil(paddingNeeded / 2);
      return ' '.repeat(leftPadding) + text + ' '.repeat(rightPadding);
  }
}

/**
 * Align multiple lines of text
 */
export function alignLines(lines: string[], maxWidth: number, alignment: Alignment = 'center'): string[] {
  return lines.map(line => padText(line, maxWidth, alignment));
}