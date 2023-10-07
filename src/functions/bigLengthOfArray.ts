import getVisibleWidth from "./getWidth";

const bigLength = function (text: String) {
  const textArray = text.split("<>");
  let tLength = 0;

  for (let i = 0; i < textArray.length; i++) {
    // tLength = Math.max(tLength, textArray[i].length);
    const width = getVisibleWidth(textArray[i])
    tLength =Math.max(tLength, width)
  }
  return { tLength, textArray };
};


export default bigLength