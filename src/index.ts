/**
 * Stylesh - Terminal text styling library
 * Main entry point
 */

// Import extensions to register them
import './extensions/string.extensions';

// Export main classes and types
export { StringStyler } from './core/StringStyler';
export { AnsiBuilder } from './core/AnsiBuilder';

// Export theme management
export { ThemeManager, Theme } from './themes/ThemeManager';

// Export animation
export { animator, Animator, AnimationOptions, AnimationSpeed } from './animations/Animator';


// Export types
export type {
  ColorName,
  Alignment,
  BorderStyle,
  BorderDirection,
  BorderConfig,
  TextStyle,
  StyledText,
  GradientColors,
} from './core/types';

// Export constants for advanced usage
export { TEXT_COLORS, COLOR_GROUPS, RGB } from './constants/colors';
export { BG_COLORS, BG_COLOR_GROUPS } from './constants/backgrounds';
export { BORDER_STYLES, BorderChars } from './constants/borders';

// Export utilities
export {
  getVisibleWidth,
  getMaxLineWidth,
  parseTextLines,
  stripAnsi,
} from './utils/textWidth';

export { padText, alignLines } from './utils/textAlign';