import { colors } from "../colors/colors";

interface ColorsObject {
    [key: string]: string;
  }
  
  const multiColorsFunction = function (string: String, colorsObj: ColorsObject) {
    const charArray = string.split("");
    const colorKeys = Object.keys(colorsObj);
    const arr = [];
    for (let i = 0; i < charArray.length; i++) {
      const color = colorsObj[colorKeys[i % colorKeys.length]];
      const text = `${color}${charArray[i]}${colors.reset}`;
      arr[i] = text;
    }
    const result = arr.join("");
    return result;
  };

  export default multiColorsFunction