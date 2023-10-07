import getVisibleWidth from "../../functions/getWidth";
import colors from "../../colors/colors";
import returnString from "../../functions/retunString";

String.prototype.createSolidBorder2 = function (color = "reset",direction="c") {
  // const text = this;
  // const width = getVisibleWidth(this) + 4;
  // const coloredSolid = colors[color] + "─" + colors.reset;
  // const solidBorder = coloredSolid.repeat(width);
  // return `${solidBorder}\n${coloredSolid} ${text} ${coloredSolid}\n${solidBorder}`;
  return returnString("─", color, this, direction);
};
