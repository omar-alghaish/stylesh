import returnString from "../../functions/retunString";

String.prototype.createDashedBorder = function (
  color = "reset",
  direction = "c"
) {
  return returnString("-", color, this, direction);
};
