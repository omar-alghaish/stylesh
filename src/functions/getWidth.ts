function getVisibleWidth(str: String) {
  const colorCodeRegex = /\x1b\[(38;2;\d{1,3};\d{1,3};\d{1,3}m|0m)/g; 
  const visibleText = str.replace(colorCodeRegex, ""); 
  const width = visibleText.length;
  return width;
}

export default getVisibleWidth;
