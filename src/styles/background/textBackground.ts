import {backgroundColors} from "../../colors/backgroundColors";
import bigLength from "../../functions/bigLengthOfArray";

String.prototype.bg = function(color:string) {
    const { tLength, textArray } = bigLength(this);
    const selectedColor = backgroundColors[color] || backgroundColors.reset;
  
    const text = textArray
      .map((line) => {
        return `${selectedColor + line + backgroundColors.reset}`;
      })
      .join("<>");
    return text;
  };
  