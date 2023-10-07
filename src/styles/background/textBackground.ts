import backgroundColors from "../../colors/backgroundColors";
import bigLength from "../../functions/bigLengthOfArray";

String.prototype.bg = function(color:string) {
    // const bgColor = backgroundColors[color] || "";
    // const resetColor = "\x1b[0m"; // Reset color to default after text
    // return `${bgColor}${this}${resetColor}`;

    const { tLength, textArray } = bigLength(this);
    const selectedColor = backgroundColors[color] || backgroundColors.reset;
  
    const text = textArray
      .map((line) => {
        return `${selectedColor + line + backgroundColors.reset}`;
      })
      .join("<>");
    return text;
  };
  