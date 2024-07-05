const redColors = {
    darkRed: "\x1b[38;2;139;0;0m",
    red: "\x1b[38;2;255;0;0m",
    firebrick: "\x1b[38;2;178;34;34m",
    crimson: "\x1b[38;2;220;20;60m",
    indianRed: "\x1b[38;2;205;92;92m",
    lightCoral: "\x1b[38;2;240;128;128m",
    salmon: "\x1b[38;2;250;128;114m",
    darkSalmon: "\x1b[38;2;233;150;122m",
    lightSalmon: "\x1b[38;2;255;160;122m",
};
const orangeColors = {
    orangeRed: "\x1b[38;2;255;69;0m",
    tomato: "\x1b[38;2;255;99;71m",
    darkOrange: "\x1b[38;2;255;140;0m",
    coral: "\x1b[38;2;255;127;80m",
    orange: "\x1b[38;2;255;165;0m",
};
const blackColors = {
    black: "\x1b[38;2;0;0;0m",
    darkSlateGray: "\x1b[38;2;47;79;79m",
    dimGray: "\x1b[38;2;105;105;105m",
    slateGray: "\x1b[38;2;112;128;144m",
    gray: "\x1b[38;2;128;128;128m",
    lightSlateGray: "\x1b[38;2;119;136;153m",
    darkGray: "\x1b[38;2;169;169;169m",
    silver: "\x1b[38;2;192;192;192m",
    lightGray: "\x1b[38;2;211;211;211m",
    gainsboro: "\x1b[38;2;220;220;220m",
};
const brownColors = {
    maroon: "\x1b[38;2;128;0;0m",
    brown: "\x1b[38;2;165;42;42m",
    saddleBrown: "\x1b[38;2;139;69;19m",
    sienna: "\x1b[38;2;160;82;45m",
    chocolate: "\x1b[38;2;210;105;30m",
    darkGoldenrod: "\x1b[38;2;184;134;11m",
    peru: "\x1b[38;2;205;133;63m",
    rosyBrown: "\x1b[38;2;188;143;143m",
    goldenrod: "\x1b[38;2;218;165;32m",
    sandyBrown: "\x1b[38;2;244;164;96m",
    tan: "\x1b[38;2;210;180;140m",
    burlywood: "\x1b[38;2;222;184;135m",
    wheat: "\x1b[38;2;245;222;179m",
    navajoWhite: "\x1b[38;2;255;222;173m",
    bisque: "\x1b[38;2;255;228;196m",
    blanchedAlmond: "\x1b[38;2;255;235;205m",
    cornsilk: "\x1b[38;2;255;248;220m",
};
const cyanColors = {
    teal: "\x1b[38;2;0;128;128m",
    darkCyan: "\x1b[38;2;0;139;139m",
    lightSeaGreen: "\x1b[38;2;32;178;170m",
    cadetBlue: "\x1b[38;2;95;158;160m",
    darkTurquoise: "\x1b[38;2;0;206;209m",
    mediumTurquoise: "\x1b[38;2;72;209;204m",
    turquoise: "\x1b[38;2;64;224;208m",
    aqua: "\x1b[38;2;0;255;255m",
    cyan: "\x1b[38;2;0;255;255m",
    aquamarine: "\x1b[38;2;127;255;212m",
    paleTurquoise: "\x1b[38;2;175;238;238m",
    lightCyan: "\x1b[38;2;224;255;255m",
};
const whiteColors = {
    mistyRose: "\x1b[38;2;255;228;225m",
    antiqueWhite: "\x1b[38;2;250;235;215m",
    linen: "\x1b[38;2;250;240;230m",
    beige: "\x1b[38;2;245;245;220m",
    whiteSmoke: "\x1b[38;2;245;245;245m",
    lavenderBlush: "\x1b[38;2;255;240;245m",
    oldLace: "\x1b[38;2;253;245;230m",
    aliceBlue: "\x1b[38;2;240;248;255m",
    seashell: "\x1b[38;2;255;245;238m",
    ghostWhite: "\x1b[38;2;248;248;255m",
    honeydew: "\x1b[38;2;240;255;240m",
    floralWhite: "\x1b[38;2;255;250;240m",
    azure: "\x1b[38;2;240;255;255m",
    mintCream: "\x1b[38;2;245;255;250m",
    snow: "\x1b[38;2;255;250;250m",
    ivory: "\x1b[38;2;255;255;240m",
    white: "\x1b[38;2;255;255;255m",
};
const blueColors = {
    midnightBlue: "\x1b[38;2;25;25;112m",
    navy: "\x1b[38;2;0;0;128m",
    darkBlue: "\x1b[38;2;0;0;139m",
    mediumBlue: "\x1b[38;2;0;0;205m",
    blue: "\x1b[38;2;0;0;255m",
    royalBlue: "\x1b[38;2;65;105;225m",
    steelBlue: "\x1b[38;2;70;130;180m",
    dodgerBlue: "\x1b[38;2;30;144;255m",
    deepSkyBlue: "\x1b[38;2;0;191;255m",
    cornflowerBlue: "\x1b[38;2;100;149;237m",
    skyBlue: "\x1b[38;2;135;206;235m",
    lightSkyBlue: "\x1b[38;2;135;206;250m",
    lightSteelBlue: "\x1b[38;2;176;196;222m",
    lightBlue: "\x1b[38;2;173;216;230m",
    powderBlue: "\x1b[38;2;176;224;230m",
};
const greenColors = {
    darkGreen: "\x1b[38;2;0;100;0m",
    green: "\x1b[38;2;0;128;0m",
    darkOliveGreen: "\x1b[38;2;85;107;47m",
    forestGreen: "\x1b[38;2;34;139;34m",
    seaGreen: "\x1b[38;2;46;139;87m",
    olive: "\x1b[38;2;128;128;0m",
    oliveDrab: "\x1b[38;2;107;142;35m",
    mediumSeaGreen: "\x1b[38;2;60;179;113m",
    limeGreen: "\x1b[38;2;50;205;50m",
    lime: "\x1b[38;2;0;255;0m",
    springGreen: "\x1b[38;2;0;255;127m",
    mediumSpringGreen: "\x1b[38;2;0;250;154m",
    darkSeaGreen: "\x1b[38;2;143;188;143m",
    mediumAquamarine: "\x1b[38;2;102;205;170m",
    yellowGreen: "\x1b[38;2;154;205;50m",
    lawnGreen: "\x1b[38;2;124;252;0m",
    chartreuse: "\x1b[38;2;127;255;0m",
    lightGreen: "\x1b[38;2;144;238;144m",
    greenYellow: "\x1b[38;2;173;255;47m",
    paleGreen: "\x1b[38;2;Specify_R;Specify_G;Specify_Bm",
};
const PurpleVioletMagentaColors = {
    indigo: "\x1b[38;2;75;0;130m",
    purple: "\x1b[38;2;128;0;128m",
    darkMagenta: "\x1b[38;2;139;0;139m",
    darkViolet: "\x1b[38;2;148;0;211m",
    darkSlateBlue: "\x1b[38;2;72;61;139m",
    blueViolet: "\x1b[38;2;138;43;226m",
    darkOrchid: "\x1b[38;2;153;50;204m",
    fuchsia: "\x1b[38;2;255;0;255m",
    magenta: "\x1b[38;2;255;0;255m",
    slateBlue: "\x1b[38;2;106;90;205m",
    mediumSlateBlue: "\x1b[38;2;123;104;238m",
    mediumOrchid: "\x1b[38;2;186;85;211m",
    mediumPurple: "\x1b[38;2;147;112;219m",
    orchid: "\x1b[38;2;218;112;214m",
    violet: "\x1b[38;2;238;130;238m",
    plum: "\x1b[38;2;221;160;221m",
    thistle: "\x1b[38;2;216;191;216m",
    lavender: "\x1b[38;2;230;230;250m",
};
const pinkColors = {
    mediumVioletRed: "\x1b[38;2;199;21;133m",
    deepPink: "\x1b[38;2;255;20;147m",
    paleVioletRed: "\x1b[38;2;219;112;147m",
    hotPink: "\x1b[38;2;255;105;180m",
    lightPink: "\x1b[38;2;255;182;193m",
    pink: "\x1b[38;2;255;192;203m",
};
const yellowColors = {
    darkKhaki: "\x1b[38;2;189;183;107m",
    gold: "\x1b[38;2;255;215;0m",
    khaki: "\x1b[38;2;240;230;140m",
    peachPuff: "\x1b[38;2;255;218;185m",
    yellow: "\x1b[38;2;255;255;0m",
    paleGoldenrod: "\x1b[38;2;238;232;170m",
    moccasin: "\x1b[38;2;255;228;181m",
    papayaWhip: "\x1b[38;2;255;239;213m",
    lightGoldenrodYellow: "\x1b[38;2;250;250;210m",
    lemonChiffon: "\x1b[38;2;255;250;205m",
    lightYellow: "\x1b[38;2;255;255;224m",
};
const colors = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ reset: "\x1b[0m" }, redColors), greenColors), yellowColors), orangeColors), pinkColors), PurpleVioletMagentaColors), blueColors), whiteColors), cyanColors), brownColors), blackColors);

function getVisibleWidth(str) {
    const colorCodeRegex = /\x1b\[(38;2;\d{1,3};\d{1,3};\d{1,3}m|0m)/g;
    const visibleText = str.replace(colorCodeRegex, "");
    const width = visibleText.length;
    return width;
}

const bigLength = function (text) {
    const textArray = text.split("<>");
    let tLength = 0;
    for (let i = 0; i < textArray.length; i++) {
        const width = getVisibleWidth(textArray[i]);
        tLength = Math.max(tLength, width);
    }
    return { tLength, textArray };
};

// import {colors} from "../../colors/colors";
// import bigLength from "../../functions/bigLengthOfArray";
// import getVisibleWidth from "../../functions/getWidth";
// String.prototype.createSolidBorder = function (color, direction = "c"): string {
//   const { tLength, textArray } = bigLength(this);
//   const horizontalBorder = colors[color || "reset"] + "─".repeat(tLength + 2);
//   const verticalBorder = colors[color || "reset"] + "│" + colors.reset;
//   const topLeftCorner = colors[color || "reset"] + "┌" + colors.reset;
//   const topRightCorner = colors[color || "reset"] + "┐" + colors.reset;
//   const bottomLeftCorner = colors[color || "reset"] + "└" + colors.reset;
//   const bottomRightCorner = colors[color || "reset"] + "┘" + colors.reset;
//   return direction === "l"
//     ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
//         textArray
//           .map(
//             (line) =>
//               `${verticalBorder}${line}${" ".repeat(
//                 Math.ceil(tLength - getVisibleWidth(line) + 2)
//               )}${verticalBorder}`
//           )
//           .join("\n") +
//         `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
//     : direction === "r"
//     ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
//       textArray
//         .map(
//           (line) =>
//             `${verticalBorder}${" ".repeat(
//               (tLength - getVisibleWidth(line))  + 2
//             )}${line}${verticalBorder}`
//         )
//         .join("\n") +
//       `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
//     : `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
//       textArray
//         .map(
//           (line) =>
//             `${verticalBorder}${" ".repeat(
//               (tLength - getVisibleWidth(line)) / 2 + 1
//             )}${line}${" ".repeat(
//               Math.ceil((tLength - getVisibleWidth(line)) / 2 + 1)
//             )}${verticalBorder}`
//         )
//         .join("\n") +
//       `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`;
// };
// src/index.ts
String.prototype.createSolidBorder = function (color, direction = "c") {
    const { tLength, textArray } = bigLength(this);
    const horizontalBorder = colors[color || "reset"] + "─".repeat(tLength + 2);
    const verticalBorder = colors[color || "reset"] + "│" + colors.reset;
    const topLeftCorner = colors[color || "reset"] + "┌" + colors.reset;
    const topRightCorner = colors[color || "reset"] + "┐" + colors.reset;
    const bottomLeftCorner = colors[color || "reset"] + "└" + colors.reset;
    const bottomRightCorner = colors[color || "reset"] + "┘" + colors.reset;
    return direction === "l"
        ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
            textArray
                .map((line) => `${verticalBorder}${line}${" ".repeat(Math.ceil(tLength - getVisibleWidth(line) + 2))}${verticalBorder}`)
                .join("\n") +
            `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
        : direction === "r"
            ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
                textArray
                    .map((line) => `${verticalBorder}${" ".repeat((tLength - getVisibleWidth(line)) + 2)}${line}${verticalBorder}`)
                    .join("\n") +
                `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
            : `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
                textArray
                    .map((line) => `${verticalBorder}${" ".repeat((tLength - getVisibleWidth(line)) / 2 + 1)}${line}${" ".repeat(Math.ceil((tLength - getVisibleWidth(line)) / 2 + 1))}${verticalBorder}`)
                    .join("\n") +
                `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`;
};

const returnString = function (borderType, borderColor, string, direction) {
    const { tLength, textArray } = bigLength(string);
    const coloredDot = colors[borderColor || "reset"] + borderType + colors.reset;
    const borderWidth = coloredDot.repeat(tLength + 4);
    return direction === "r"
        ? `${borderWidth}\n${textArray
            .map((line) => `${coloredDot}${" ".repeat(tLength - getVisibleWidth(line) + 2)}${line}${coloredDot}`)
            .join("\n") + `\n${borderWidth}`}`
        : direction === "l"
            ? `${borderWidth}\n${textArray
                .map((line) => `${coloredDot}${line}${" ".repeat(Math.ceil(tLength - getVisibleWidth(line) + 2))}${coloredDot}`)
                .join("\n") + `\n${borderWidth}`}`
            : `${borderWidth}\n${textArray
                .map((line) => `${coloredDot}${" ".repeat((tLength - getVisibleWidth(line)) / 2 + 1)}${line}${" ".repeat(Math.ceil((tLength - getVisibleWidth(line)) / 2 + 1))}${coloredDot}`)
                .join("\n") + `\n${borderWidth}`}`;
};

String.prototype.createDottedBorder = function (color, direction = "c") {
    return returnString("•", color, this, direction);
};

String.prototype.createRoundedBorder = function (color, direction = "c") {
    const { tLength, textArray } = bigLength(this);
    const border = colors[color || "reset"] +
        "╭" +
        "─".repeat(tLength + 2) +
        "╮" +
        colors.reset;
    const verticalBorder = colors[color || "reset"] + "│" + colors.reset;
    const bottomBorder = colors[color || "reset"] +
        "╰" +
        "─".repeat(tLength + 2) +
        "╯" +
        colors.reset;
    return direction === "l"
        ? `${border}\n` +
            textArray
                .map((line) => `${verticalBorder}${line}${" ".repeat(Math.ceil(tLength - getVisibleWidth(line) + 2))}${verticalBorder}`)
                .join("\n") +
            `\n${bottomBorder}`
        : direction === "r"
            ? `${border}\n` +
                textArray
                    .map((line) => `${verticalBorder}${" ".repeat(tLength - getVisibleWidth(line) + 2)}${line}${verticalBorder}`)
                    .join("\n") +
                `\n${bottomBorder}`
            : `${border}\n` +
                textArray
                    .map((line) => `${verticalBorder}${" ".repeat((tLength - getVisibleWidth(line)) / 2 + 1)}${line}${" ".repeat(Math.ceil((tLength - getVisibleWidth(line)) / 2 + 1))}${verticalBorder}`)
                    .join("\n") +
                `\n${bottomBorder}`;
};

String.prototype.createDashedBorder = function (color = "reset", direction = "c") {
    return returnString("-", color, this, direction);
};

String.prototype.createDoubleBorder = function (color = "reset", direction = "c") {
    return returnString("=", color, this, direction);
};

String.prototype.createSolidBorder2 = function (color = "reset", direction = "c") {
    return returnString("─", color, this, direction);
};

String.prototype.createCustomBorder = function (symbol = "─", direction = "all", color = "reset") {
    const text = this;
    const width = getVisibleWidth(this) + 2;
    const coloredSymbol = colors[color] + symbol + colors.reset;
    const horizontalBorder = coloredSymbol.repeat(width);
    let borderedText = "";
    if (direction === "top") {
        borderedText += `\n${horizontalBorder}\n ${text} \n`;
    }
    else if (direction === "bottom") {
        borderedText += ` ${text} \n${horizontalBorder}\n`;
    }
    else if (direction === "left") {
        borderedText += `${coloredSymbol} ${text}\n`;
    }
    else if (direction === "right") {
        borderedText += `${text} ${coloredSymbol}\n`;
    }
    else {
        borderedText += `${coloredSymbol}${horizontalBorder}${coloredSymbol}\n`;
        borderedText += `${coloredSymbol} ${text} ${coloredSymbol}\n`;
        borderedText += `${coloredSymbol}${horizontalBorder}${coloredSymbol}`;
    }
    return borderedText;
};

String.prototype.color = function (color = "reset") {
    const { tLength, textArray } = bigLength(this);
    const selectedColor = colors[color] || colors.reset;
    const text = textArray
        .map((line) => {
        return `${selectedColor + line + colors.reset}`;
    })
        .join("<>");
    return text;
};

const multiColorsFunction = function (string, colorsObj) {
    const charArray = string.split("");
    const colorKeys = Object.keys(colorsObj);
    const arr = [];
    for (let i = 0; i < charArray.length; i++) {
        const color = colorsObj[colorKeys[i % colorKeys.length]];
        const text = `${color}${charArray[i]}${colors.reset}`;
        arr[i] = text;
    }
    const result = arr.join("");
    return result;
};

String.prototype.multiColors = function (colors) {
    const text = this;
    return colors === "red"
        ? multiColorsFunction(text, redColors)
        : colors === "yellow"
            ? multiColorsFunction(text, yellowColors)
            : colors === "black"
                ? multiColorsFunction(text, blackColors)
                : colors === "white"
                    ? multiColorsFunction(text, whiteColors)
                    : colors === "green"
                        ? multiColorsFunction(text, greenColors)
                        : colors === "blue"
                            ? multiColorsFunction(text, blueColors)
                            : colors === "brown"
                                ? multiColorsFunction(text, brownColors)
                                : colors === "orange"
                                    ? multiColorsFunction(text, orangeColors)
                                    : colors === "pink"
                                        ? multiColorsFunction(text, pinkColors)
                                        : colors === "cyan"
                                            ? multiColorsFunction(text, cyanColors)
                                            : colors === "purple"
                                                ? multiColorsFunction(text, PurpleVioletMagentaColors)
                                                : "there is no multi colors for this color";
};

const redBGColors = {
    red: "\x1b[48;2;255;0;0m",
    firebrick: "\x1b[48;2;178;34;34m",
    crimson: "\x1b[48;2;220;20;60m",
    indianRed: "\x1b[48;2;205;92;92m",
    lightCoral: "\x1b[48;2;240;128;128m",
    salmon: "\x1b[48;2;250;128;114m",
    darkSalmon: "\x1b[48;2;233;150;122m",
    lightSalmon: "\x1b[48;2;255;160;122m",
};
const greenBGColors = {
    darkGreen: "\x1b[48;2;0;100;0m",
    green: "\x1b[48;2;0;128;0m",
    darkOliveGreen: "\x1b[48;2;85;107;47m",
    forestGreen: "\x1b[48;2;34;139;34m",
    seaGreen: "\x1b[48;2;46;139;87m",
    olive: "\x1b[48;2;128;128;0m",
    oliveDrab: "\x1b[48;2;107;142;35m",
    mediumSeaGreen: "\x1b[48;2;60;179;113m",
    limeGreen: "\x1b[48;2;50;205;50m",
    lime: "\x1b[48;2;0;255;0m",
    springGreen: "\x1b[48;2;0;255;127m",
    mediumSpringGreen: "\x1b[48;2;0;250;154m",
    darkSeaGreen: "\x1b[48;2;143;188;143m",
    mediumAquamarine: "\x1b[48;2;102;205;170m",
    yellowGreen: "\x1b[48;2;154;205;50m",
    lawnGreen: "\x1b[48;2;124;252;0m",
    chartreuse: "\x1b[48;2;127;255;0m",
    lightGreen: "\x1b[48;2;144;238;144m",
    greenYellow: "\x1b[48;2;173;255;47m",
};
const yellowBGColors = {
    darkKhaki: "\x1b[48;2;189;183;107m",
    gold: "\x1b[48;2;255;215;0m",
    khaki: "\x1b[48;2;240;230;140m",
    peachPuff: "\x1b[48;2;255;218;185m",
    yellow: "\x1b[48;2;255;255;0m",
    paleGoldenrod: "\x1b[48;2;238;232;170m",
    moccasin: "\x1b[48;2;255;228;181m",
    papayaWhip: "\x1b[48;2;255;239;213m",
    lightGoldenrodYellow: "\x1b[48;2;250;250;210m",
    lemonChiffon: "\x1b[48;2;255;250;205m",
    lightYellow: "\x1b[48;2;255;255;224m",
};
const orangeBGColors = {
    orangeRed: "\x1b[48;2;255;69;0m",
    tomato: "\x1b[48;2;255;99;71m",
    darkOrange: "\x1b[48;2;255;140;0m",
    coral: "\x1b[48;2;255;127;80m",
    orange: "\x1b[48;2;255;165;0m",
};
const pinkBGColors = {
    mediumVioletRed: "\x1b[48;2;199;21;133m",
    deepPink: "\x1b[48;2;255;20;147m",
    paleVioletRed: "\x1b[48;2;219;112;147m",
    hotPink: "\x1b[48;2;255;105;180m",
    lightPink: "\x1b[48;2;255;182;193m",
    pink: "\x1b[48;2;255;192;203m",
};
const PurpleVioletMagentaBGColors = {
    indigo: "\x1b[48;2;75;0;130m",
    purple: "\x1b[48;2;128;0;128m",
    darkMagenta: "\x1b[48;2;139;0;139m",
    darkViolet: "\x1b[48;2;148;0;211m",
    darkSlateBlue: "\x1b[48;2;72;61;139m",
    blueViolet: "\x1b[48;2;138;43;226m",
    darkOrchid: "\x1b[48;2;153;50;204m",
    fuchsia: "\x1b[48;2;255;0;255m",
    magenta: "\x1b[48;2;255;0;255m",
    slateBlue: "\x1b[48;2;106;90;205m",
    mediumSlateBlue: "\x1b[48;2;123;104;238m",
    mediumOrchid: "\x1b[48;2;186;85;211m",
    mediumPurple: "\x1b[48;2;147;112;219m",
    orchid: "\x1b[48;2;218;112;214m",
    violet: "\x1b[48;2;238;130;238m",
    plum: "\x1b[48;2;221;160;221m",
    thistle: "\x1b[48;2;216;191;216m",
    lavender: "\x1b[48;2;230;230;250m",
};
const blueBGColors = {
    midnightBlue: "\x1b[48;2;25;25;112m",
    navy: "\x1b[48;2;0;0;128m",
    darkBlue: "\x1b[48;2;0;0;139m",
    mediumBlue: "\x1b[48;2;0;0;205m",
    blue: "\x1b[48;2;0;0;255m",
    royalBlue: "\x1b[48;2;65;105;225m",
    steelBlue: "\x1b[48;2;70;130;180m",
    dodgerBlue: "\x1b[48;2;30;144;255m",
    deepSkyBlue: "\x1b[48;2;0;191;255m",
    cornflowerBlue: "\x1b[48;2;100;149;237m",
    skyBlue: "\x1b[48;2;135;206;235m",
    lightSkyBlue: "\x1b[48;2;135;206;250m",
    lightSteelBlue: "\x1b[48;2;176;196;222m",
    lightBlue: "\x1b[48;2;173;216;230m",
    powderBlue: "\x1b[48;2;176;224;230m",
};
const whiteBGColors = {
    mistyRose: "\x1b[48;2;255;228;225m",
    antiqueWhite: "\x1b[48;2;250;235;215m",
    linen: "\x1b[48;2;250;240;230m",
    beige: "\x1b[48;2;245;245;220m",
    whiteSmoke: "\x1b[48;2;245;245;245m",
    lavenderBlush: "\x1b[48;2;255;240;245m",
    oldLace: "\x1b[48;2;253;245;230m",
    aliceBlue: "\x1b[48;2;240;248;255m",
    seashell: "\x1b[48;2;255;245;238m",
    ghostWhite: "\x1b[48;2;248;248;255m",
    honeydew: "\x1b[48;2;240;255;240m",
    floralWhite: "\x1b[48;2;255;250;240m",
    azure: "\x1b[48;2;240;255;255m",
    mintCream: "\x1b[48;2;245;255;250m",
    snow: "\x1b[48;2;255;250;250m",
    ivory: "\x1b[48;2;255;255;240m",
    white: "\x1b[48;2;255;255;255m",
};
const cyanBGColors = {
    maroon: "\x1b[48;2;128;0;0m",
    brown: "\x1b[48;2;165;42;42m",
    saddleBrown: "\x1b[48;2;139;69;19m",
    sienna: "\x1b[48;2;160;82;45m",
    chocolate: "\x1b[48;2;210;105;30m",
    darkGoldenrod: "\x1b[48;2;184;134;11m",
    peru: "\x1b[48;2;205;133;63m",
    rosyBrown: "\x1b[48;2;188;143;143m",
    goldenrod: "\x1b[48;2;218;165;32m",
    sandyBrown: "\x1b[48;2;244;164;96m",
    tan: "\x1b[48;2;210;180;140m",
    burlywood: "\x1b[48;2;222;184;135m",
    wheat: "\x1b[48;2;245;222;179m",
    navajoWhite: "\x1b[48;2;255;222;173m",
    bisque: "\x1b[48;2;255;228;196m",
    blanchedAlmond: "\x1b[48;2;255;235;205m",
    cornsilk: "\x1b[48;2;255;248;220m",
};
const brownBGColors = {
    maroon: "\x1b[48;2;128;0;0m",
    brown: "\x1b[48;2;165;42;42m",
    saddleBrown: "\x1b[48;2;139;69;19m",
    sienna: "\x1b[48;2;160;82;45m",
    chocolate: "\x1b[48;2;210;105;30m",
    darkGoldenrod: "\x1b[48;2;184;134;11m",
    peru: "\x1b[48;2;205;133;63m",
    rosyBrown: "\x1b[48;2;188;143;143m",
    goldenrod: "\x1b[48;2;218;165;32m",
    sandyBrown: "\x1b[48;2;244;164;96m",
    tan: "\x1b[48;2;210;180;140m",
    burlywood: "\x1b[48;2;222;184;135m",
    wheat: "\x1b[48;2;245;222;179m",
    navajoWhite: "\x1b[48;2;255;222;173m",
    bisque: "\x1b[48;2;255;228;196m",
    blanchedAlmond: "\x1b[48;2;255;235;205m",
    cornsilk: "\x1b[48;2;255;248;220m",
};
const blackBGColors = {
    reset: "\x1b[0m",
    black: "\x1b[48;2;0;0;0m",
    darkSlateGray: "\x1b[48;2;47;79;79m",
    dimGray: "\x1b[48;2;105;105;105m",
    slateGray: "\x1b[48;2;112;128;144m",
    gray: "\x1b[48;2;128;128;128m",
    lightSlateGray: "\x1b[48;2;119;136;153m",
    darkGray: "\x1b[48;2;169;169;169m",
    silver: "\x1b[48;2;192;192;192m",
    lightGray: "\x1b[48;2;211;211;211m",
    gainsboro: "\x1b[48;2;220;220;220m",
};
const backgroundColors = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, blackBGColors), redBGColors), pinkBGColors), yellowBGColors), orangeBGColors), brownBGColors), PurpleVioletMagentaBGColors), whiteBGColors), cyanBGColors), blueBGColors), greenBGColors);

String.prototype.bg = function (color) {
    const { tLength, textArray } = bigLength(this);
    const selectedColor = backgroundColors[color] || backgroundColors.reset;
    const text = textArray
        .map((line) => {
        return `${selectedColor + line + backgroundColors.reset}`;
    })
        .join("<>");
    return text;
};

const multiBgColorsFunction = function (string, colorsObj) {
    const charArray = string.split("");
    const colorKeys = Object.keys(colorsObj);
    const arr = [];
    for (let i = 0; i < charArray.length; i++) {
        const color = colorsObj[colorKeys[i % colorKeys.length]];
        const text = `${color}${charArray[i]}${backgroundColors.reset}`;
        arr[i] = text;
    }
    const result = arr.join("");
    return result;
};

String.prototype.multiBg = function (colors) {
    const text = this;
    return colors === "red"
        ? multiBgColorsFunction(text, redBGColors)
        : colors === "yellow"
            ? multiBgColorsFunction(text, yellowBGColors)
            : colors === "black"
                ? multiBgColorsFunction(text, blackBGColors)
                : colors === "white"
                    ? multiBgColorsFunction(text, whiteBGColors)
                    : colors === "green"
                        ? multiBgColorsFunction(text, greenBGColors)
                        : colors === "blue"
                            ? multiBgColorsFunction(text, blueBGColors)
                            : colors === "brown"
                                ? multiBgColorsFunction(text, brownBGColors)
                                : colors === "orange"
                                    ? multiBgColorsFunction(text, orangeBGColors)
                                    : colors === "pink"
                                        ? multiBgColorsFunction(text, pinkBGColors)
                                        : colors === "cyan"
                                            ? multiBgColorsFunction(text, cyanBGColors)
                                            : colors === "purple"
                                                ? multiBgColorsFunction(text, PurpleVioletMagentaBGColors)
                                                : "there is no multi colors for this color";
};
//# sourceMappingURL=index.js.map
