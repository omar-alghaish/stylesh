import returnString from "../../functions/retunString";

String.prototype.createDottedBorder = function (
  color: string,
  direction = "c"
): string {
  return returnString("•", color, this, direction);
};
