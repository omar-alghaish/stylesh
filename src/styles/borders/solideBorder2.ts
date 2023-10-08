import getVisibleWidth from "../../functions/getWidth";
import {colors} from "../../colors/colors";
import returnString from "../../functions/retunString";

String.prototype.createSolidBorder2 = function (color = "reset",direction="c") {
  return returnString("─", color, this, direction);
};
