import {
    PurpleVioletMagentaBGColors,
    blackBGColors,
    blueBGColors,
    brownBGColors,
    cyanBGColors,
    greenBGColors,
    orangeBGColors,
    pinkBGColors,
    redBGColors,
    whiteBGColors,
    yellowBGColors,
  } from "../../colors/backgroundColors";
import multiBgColorsFunction from "../../functions/multiBgColorsFunction";  
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
  