/**
 * Background color definitions
 * Uses the same RGB values as text colors
 */

import { TEXT_COLORS, RGB, COLOR_GROUPS } from './colors';

export const BG_COLORS: Record<string, RGB> = { ...TEXT_COLORS };

export const BG_COLOR_GROUPS = { ...COLOR_GROUPS };