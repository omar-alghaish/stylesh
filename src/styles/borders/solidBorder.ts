// import {colors} from "../../colors/colors";
// import bigLength from "../../functions/bigLengthOfArray";
// import getVisibleWidth from "../../functions/getWidth";

// String.prototype.createSolidBorder = function (color, direction = "c"): string {

//   const { tLength, textArray } = bigLength(this);

//   const horizontalBorder = colors[color || "reset"] + "─".repeat(tLength + 2);
//   const verticalBorder = colors[color || "reset"] + "│" + colors.reset;
//   const topLeftCorner = colors[color || "reset"] + "┌" + colors.reset;
//   const topRightCorner = colors[color || "reset"] + "┐" + colors.reset;
//   const bottomLeftCorner = colors[color || "reset"] + "└" + colors.reset;
//   const bottomRightCorner = colors[color || "reset"] + "┘" + colors.reset;

//   return direction === "l"
//     ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
//         textArray
//           .map(
//             (line) =>
//               `${verticalBorder}${line}${" ".repeat(
//                 Math.ceil(tLength - getVisibleWidth(line) + 2)
//               )}${verticalBorder}`
//           )
//           .join("\n") +
//         `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
//     : direction === "r"
//     ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
//       textArray
//         .map(
//           (line) =>
//             `${verticalBorder}${" ".repeat(
//               (tLength - getVisibleWidth(line))  + 2
//             )}${line}${verticalBorder}`
//         )
//         .join("\n") +
//       `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
//     : `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
//       textArray
//         .map(
//           (line) =>
//             `${verticalBorder}${" ".repeat(
//               (tLength - getVisibleWidth(line)) / 2 + 1
//             )}${line}${" ".repeat(
//               Math.ceil((tLength - getVisibleWidth(line)) / 2 + 1)
//             )}${verticalBorder}`
//         )
//         .join("\n") +
//       `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`;
// };


// src/index.ts
import { colors } from "../../colors/colors";
import bigLength from "../../functions/bigLengthOfArray";
import getVisibleWidth from "../../functions/getWidth";

String.prototype.createSolidBorder = function (color: string, direction: string = "c"): string {
  const { tLength, textArray } = bigLength(this);

  const horizontalBorder = colors[color || "reset"] + "─".repeat(tLength + 2);
  const verticalBorder = colors[color || "reset"] + "│" + colors.reset;
  const topLeftCorner = colors[color || "reset"] + "┌" + colors.reset;
  const topRightCorner = colors[color || "reset"] + "┐" + colors.reset;
  const bottomLeftCorner = colors[color || "reset"] + "└" + colors.reset;
  const bottomRightCorner = colors[color || "reset"] + "┘" + colors.reset;

  return direction === "l"
    ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
        textArray
          .map(
            (line) =>
              `${verticalBorder}${line}${" ".repeat(
                Math.ceil(tLength - getVisibleWidth(line) + 2)
              )}${verticalBorder}`
          )
          .join("\n") +
        `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
    : direction === "r"
    ? `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
      textArray
        .map(
          (line) =>
            `${verticalBorder}${" ".repeat(
              (tLength - getVisibleWidth(line))  + 2
            )}${line}${verticalBorder}`
        )
        .join("\n") +
      `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`
    : `${topLeftCorner}${horizontalBorder}${topRightCorner}\n` +
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
      `\n${bottomLeftCorner}${horizontalBorder}${bottomRightCorner}`;
};

export {};
