import {colors} from "../colors/colors";
import bigLength from "./bigLengthOfArray";
import getVisibleWidth from "./getWidth";

const returnString = function (
  borderType: string,
  borderColor: string,
  string: String,
  direction?: string
): string {
  const { tLength, textArray } = bigLength(string);

  const coloredDot: string =
    colors[borderColor || "reset"] + borderType + colors.reset;
  const borderWidth: string = coloredDot.repeat(tLength + 4);

  return direction === "r"
    ? `${borderWidth}\n${
        textArray
          .map(
            (line) =>
              `${coloredDot}${" ".repeat(
                tLength - getVisibleWidth(line) + 2
              )}${line}${coloredDot}`
          )
          .join("\n") + `\n${borderWidth}`
      }`
    : direction === "l"
    ? `${borderWidth}\n${
        textArray
          .map(
            (line) =>
              `${coloredDot}${line}${" ".repeat(
                Math.ceil(tLength - getVisibleWidth(line) + 2)
              )}${coloredDot}`
          )
          .join("\n") + `\n${borderWidth}`
      }`
    : `${borderWidth}\n${
        textArray
          .map(
            (line) =>
              `${coloredDot}${" ".repeat(
                (tLength - getVisibleWidth(line)) / 2 + 1
              )}${line}${" ".repeat(
                Math.ceil((tLength - getVisibleWidth(line)) / 2 + 1)
              )}${coloredDot}`
          )
          .join("\n") + `\n${borderWidth}`
      }`;
};

export default returnString;
