/**
 * Core type definitions for Stylesh library
 */

export type ColorName = string;
export type Alignment = 'left' | 'center' | 'right';
export type BorderStyle = 'solid' | 'rounded' | 'double' | 'dashed' | 'dotted';
export type BorderDirection = 'all' | 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical';

export interface ColorMap {
  [key: string]: string;
}

export interface BorderConfig {
  style: BorderStyle;
  color?: ColorName;
  direction?: BorderDirection;
  character?: string;
}

export interface TextStyle {
  color?: ColorName;
  backgroundColor?: ColorName;
  border?: BorderConfig;
  alignment?: Alignment;
}

export interface StyledText {
  raw: string;
  styled: string;
  visibleWidth: number;
}

export interface GradientColors {
  colors: ColorName[];
  type: 'text' | 'background';
}