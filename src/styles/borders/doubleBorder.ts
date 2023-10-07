import returnString from "../../functions/retunString";

String.prototype.createDoubleBorder = function (
  color = "reset",
  direction = "c"
) {
  return returnString("=", color, this, direction);
};
