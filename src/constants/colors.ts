/**
 * Text color definitions
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export const TEXT_COLORS: Record<string, RGB> = {
  // Reset
  reset: { r: 0, g: 0, b: 0 }, // Special case, handled differently

  // Red shades
  darkRed: { r: 139, g: 0, b: 0 },
  red: { r: 255, g: 0, b: 0 },
  firebrick: { r: 178, g: 34, b: 34 },
  crimson: { r: 220, g: 20, b: 60 },
  indianRed: { r: 205, g: 92, b: 92 },
  lightCoral: { r: 240, g: 128, b: 128 },
  salmon: { r: 250, g: 128, b: 114 },
  darkSalmon: { r: 233, g: 150, b: 122 },
  lightSalmon: { r: 255, g: 160, b: 122 },

  // Orange shades
  orangeRed: { r: 255, g: 69, b: 0 },
  tomato: { r: 255, g: 99, b: 71 },
  darkOrange: { r: 255, g: 140, b: 0 },
  coral: { r: 255, g: 127, b: 80 },
  orange: { r: 255, g: 165, b: 0 },

  // Yellow shades
  darkKhaki: { r: 189, g: 183, b: 107 },
  gold: { r: 255, g: 215, b: 0 },
  khaki: { r: 240, g: 230, b: 140 },
  peachPuff: { r: 255, g: 218, b: 185 },
  yellow: { r: 255, g: 255, b: 0 },
  paleGoldenrod: { r: 238, g: 232, b: 170 },
  moccasin: { r: 255, g: 228, b: 181 },
  papayaWhip: { r: 255, g: 239, b: 213 },
  lightGoldenrodYellow: { r: 250, g: 250, b: 210 },
  lemonChiffon: { r: 255, g: 250, b: 205 },
  lightYellow: { r: 255, g: 255, b: 224 },

  // Green shades
  darkGreen: { r: 0, g: 100, b: 0 },
  green: { r: 0, g: 128, b: 0 },
  darkOliveGreen: { r: 85, g: 107, b: 47 },
  forestGreen: { r: 34, g: 139, b: 34 },
  seaGreen: { r: 46, g: 139, b: 87 },
  olive: { r: 128, g: 128, b: 0 },
  oliveDrab: { r: 107, g: 142, b: 35 },
  mediumSeaGreen: { r: 60, g: 179, b: 113 },
  limeGreen: { r: 50, g: 205, b: 50 },
  lime: { r: 0, g: 255, b: 0 },
  springGreen: { r: 0, g: 255, b: 127 },
  mediumSpringGreen: { r: 0, g: 250, b: 154 },
  darkSeaGreen: { r: 143, g: 188, b: 143 },
  mediumAquamarine: { r: 102, g: 205, b: 170 },
  yellowGreen: { r: 154, g: 205, b: 50 },
  lawnGreen: { r: 124, g: 252, b: 0 },
  chartreuse: { r: 127, g: 255, b: 0 },
  lightGreen: { r: 144, g: 238, b: 144 },
  greenYellow: { r: 173, g: 255, b: 47 },
  paleGreen: { r: 152, g: 251, b: 152 },

  // Blue shades
  midnightBlue: { r: 25, g: 25, b: 112 },
  navy: { r: 0, g: 0, b: 128 },
  darkBlue: { r: 0, g: 0, b: 139 },
  mediumBlue: { r: 0, g: 0, b: 205 },
  blue: { r: 0, g: 0, b: 255 },
  royalBlue: { r: 65, g: 105, b: 225 },
  steelBlue: { r: 70, g: 130, b: 180 },
  dodgerBlue: { r: 30, g: 144, b: 255 },
  deepSkyBlue: { r: 0, g: 191, b: 255 },
  cornflowerBlue: { r: 100, g: 149, b: 237 },
  skyBlue: { r: 135, g: 206, b: 235 },
  lightSkyBlue: { r: 135, g: 206, b: 250 },
  lightSteelBlue: { r: 176, g: 196, b: 222 },
  lightBlue: { r: 173, g: 216, b: 230 },
  powderBlue: { r: 176, g: 224, b: 230 },

  // Purple/Violet/Magenta shades
  indigo: { r: 75, g: 0, b: 130 },
  purple: { r: 128, g: 0, b: 128 },
  darkMagenta: { r: 139, g: 0, b: 139 },
  darkViolet: { r: 148, g: 0, b: 211 },
  darkSlateBlue: { r: 72, g: 61, b: 139 },
  blueViolet: { r: 138, g: 43, b: 226 },
  darkOrchid: { r: 153, g: 50, b: 204 },
  fuchsia: { r: 255, g: 0, b: 255 },
  magenta: { r: 255, g: 0, b: 255 },
  slateBlue: { r: 106, g: 90, b: 205 },
  mediumSlateBlue: { r: 123, g: 104, b: 238 },
  mediumOrchid: { r: 186, g: 85, b: 211 },
  mediumPurple: { r: 147, g: 112, b: 219 },
  orchid: { r: 218, g: 112, b: 214 },
  violet: { r: 238, g: 130, b: 238 },
  plum: { r: 221, g: 160, b: 221 },
  thistle: { r: 216, g: 191, b: 216 },
  lavender: { r: 230, g: 230, b: 250 },

  // Pink shades
  mediumVioletRed: { r: 199, g: 21, b: 133 },
  deepPink: { r: 255, g: 20, b: 147 },
  paleVioletRed: { r: 219, g: 112, b: 147 },
  hotPink: { r: 255, g: 105, b: 180 },
  lightPink: { r: 255, g: 182, b: 193 },
  pink: { r: 255, g: 192, b: 203 },

  // Cyan shades
  teal: { r: 0, g: 128, b: 128 },
  darkCyan: { r: 0, g: 139, b: 139 },
  lightSeaGreen: { r: 32, g: 178, b: 170 },
  cadetBlue: { r: 95, g: 158, b: 160 },
  darkTurquoise: { r: 0, g: 206, b: 209 },
  mediumTurquoise: { r: 72, g: 209, b: 204 },
  turquoise: { r: 64, g: 224, b: 208 },
  aqua: { r: 0, g: 255, b: 255 },
  cyan: { r: 0, g: 255, b: 255 },
  aquamarine: { r: 127, g: 255, b: 212 },
  paleTurquoise: { r: 175, g: 238, b: 238 },
  lightCyan: { r: 224, g: 255, b: 255 },

  // Brown shades
  maroon: { r: 128, g: 0, b: 0 },
  brown: { r: 165, g: 42, b: 42 },
  saddleBrown: { r: 139, g: 69, b: 19 },
  sienna: { r: 160, g: 82, b: 45 },
  chocolate: { r: 210, g: 105, b: 30 },
  darkGoldenrod: { r: 184, g: 134, b: 11 },
  peru: { r: 205, g: 133, b: 63 },
  rosyBrown: { r: 188, g: 143, b: 143 },
  goldenrod: { r: 218, g: 165, b: 32 },
  sandyBrown: { r: 244, g: 164, b: 96 },
  tan: { r: 210, g: 180, b: 140 },
  burlywood: { r: 222, g: 184, b: 135 },
  wheat: { r: 245, g: 222, b: 179 },
  navajoWhite: { r: 255, g: 222, b: 173 },
  bisque: { r: 255, g: 228, b: 196 },
  blanchedAlmond: { r: 255, g: 235, b: 205 },
  cornsilk: { r: 255, g: 248, b: 220 },

  // Gray/Black/White shades
  black: { r: 0, g: 0, b: 0 },
  darkSlateGray: { r: 47, g: 79, b: 79 },
  dimGray: { r: 105, g: 105, b: 105 },
  slateGray: { r: 112, g: 128, b: 144 },
  gray: { r: 128, g: 128, b: 128 },
  lightSlateGray: { r: 119, g: 136, b: 153 },
  darkGray: { r: 169, g: 169, b: 169 },
  silver: { r: 192, g: 192, b: 192 },
  lightGray: { r: 211, g: 211, b: 211 },
  gainsboro: { r: 220, g: 220, b: 220 },
  mistyRose: { r: 255, g: 228, b: 225 },
  antiqueWhite: { r: 250, g: 235, b: 215 },
  linen: { r: 250, g: 240, b: 230 },
  beige: { r: 245, g: 245, b: 220 },
  whiteSmoke: { r: 245, g: 245, b: 245 },
  lavenderBlush: { r: 255, g: 240, b: 245 },
  oldLace: { r: 253, g: 245, b: 230 },
  aliceBlue: { r: 240, g: 248, b: 255 },
  seashell: { r: 255, g: 245, b: 238 },
  ghostWhite: { r: 248, g: 248, b: 255 },
  honeydew: { r: 240, g: 255, b: 240 },
  floralWhite: { r: 255, g: 250, b: 240 },
  azure: { r: 240, g: 255, b: 255 },
  mintCream: { r: 245, g: 255, b: 250 },
  snow: { r: 255, g: 250, b: 250 },
  ivory: { r: 255, g: 255, b: 240 },
  white: { r: 255, g: 255, b: 255 },
};

// Color groups for gradients
export const COLOR_GROUPS = {
  red: ['darkRed', 'firebrick', 'crimson', 'indianRed', 'lightCoral', 'salmon', 'darkSalmon', 'lightSalmon'],
  orange: ['orangeRed', 'tomato', 'darkOrange', 'coral', 'orange'],
  yellow: ['darkKhaki', 'gold', 'khaki', 'yellow', 'paleGoldenrod', 'lightYellow'],
  green: ['darkGreen', 'forestGreen', 'limeGreen', 'lime', 'springGreen', 'lightGreen', 'paleGreen'],
  blue: ['midnightBlue', 'navy', 'darkBlue', 'blue', 'royalBlue', 'dodgerBlue', 'deepSkyBlue', 'skyBlue', 'lightBlue'],
  purple: ['indigo', 'purple', 'darkViolet', 'blueViolet', 'darkOrchid', 'mediumPurple', 'orchid', 'violet', 'plum', 'lavender'],
  pink: ['mediumVioletRed', 'deepPink', 'hotPink', 'lightPink', 'pink'],
  cyan: ['teal', 'darkCyan', 'darkTurquoise', 'turquoise', 'aqua', 'aquamarine', 'lightCyan'],
  brown: ['maroon', 'saddleBrown', 'sienna', 'chocolate', 'peru', 'sandyBrown', 'tan', 'wheat'],
  gray: ['black', 'dimGray', 'gray', 'darkGray', 'silver', 'lightGray', 'gainsboro', 'white'],
};