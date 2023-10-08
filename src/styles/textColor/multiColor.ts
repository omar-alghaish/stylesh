import {
  PurpleVioletMagentaColors,
  blackColors,
  blueColors,
  brownColors,
  cyanColors,
  greenColors,
  orangeColors,
  pinkColors,
  redColors,
  whiteColors,
  yellowColors,
} from "../../colors/colors";
import multiColorsFunction from "../../functions/multiColorsFunction";

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
