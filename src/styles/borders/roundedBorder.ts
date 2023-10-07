import colors from "../../colors/colors";
import bigLength from "../../functions/bigLengthOfArray";
import getVisibleWidth from "../../functions/getWidth";

String.prototype.createRoundedBorder = function (
  color: string,
  direction = "c"
): string {
  const { tLength, textArray } = bigLength(this);

  const border =
    colors[color || "reset"] +
    "╭" +
    "─".repeat(tLength + 2) +
    "╮" +
    colors.reset;
  const verticalBorder = colors[color || "reset"] + "│" + colors.reset;

  const bottomBorder =
    colors[color || "reset"] +
    "╰" +
    "─".repeat(tLength + 2) +
    "╯" +
    colors.reset;

  return direction === "l"
    ? `${border}\n` +
        textArray
          .map(
            (line) =>
              `${verticalBorder}${line}${" ".repeat(
                Math.ceil(tLength - getVisibleWidth(line) + 2)
              )}${verticalBorder}`
          )
          .join("\n") +
        `\n${bottomBorder}`
    : direction === "r"
    ? `${border}\n` +
      textArray
        .map(
          (line) =>
            `${verticalBorder}${" ".repeat(
              tLength - getVisibleWidth(line) + 2
            )}${line}${verticalBorder}`
        )
        .join("\n") +
      `\n${bottomBorder}`
    : `${border}\n` +
      textArray
        .map(
          (line) =>
            `${verticalBorder}${" ".repeat(
              (tLength - getVisibleWidth(line)) / 2 + 1
            )}${line}${" ".repeat(
              Math.ceil((tLength - getVisibleWidth(line)) / 2 + 1)
            )}${verticalBorder}`
        )
        .join("\n") +
      `\n${bottomBorder}`;
};
