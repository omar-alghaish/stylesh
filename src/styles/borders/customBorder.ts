import colors from "../../colors/colors";
import getVisibleWidth from "../../functions/getWidth";

String.prototype.createCustomBorder = function (
  symbol = "─",
  direction = "all",
  color = "reset"
) {
  const text = this;
  const width: number = getVisibleWidth(this) + 2;
  const coloredSymbol = colors[color] + symbol + colors.reset;
  const horizontalBorder = coloredSymbol.repeat(width);
  let borderedText = "";
  if (direction === "top") {
    borderedText += `\n${horizontalBorder}\n ${text} \n`;
  } else if (direction === "bottom") {
    borderedText += ` ${text} \n${horizontalBorder}\n`;
  } else if (direction === "left") {
    borderedText += `${coloredSymbol} ${text}\n`;
  } else if (direction === "right") {
    borderedText += `${text} ${coloredSymbol}\n`;
  } else {
    borderedText += `${coloredSymbol}${horizontalBorder}${coloredSymbol}\n`;
    borderedText += `${coloredSymbol} ${text} ${coloredSymbol}\n`;
    borderedText += `${coloredSymbol}${horizontalBorder}${coloredSymbol}`;
  }

  return borderedText;
};
