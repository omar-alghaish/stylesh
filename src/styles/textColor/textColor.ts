import colors from "../../colors/colors";
import bigLength from "../../functions/bigLengthOfArray";
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
