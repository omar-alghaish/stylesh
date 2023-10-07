# STYLESH

## Description

Stylesh is a powerful and easy-to-use JavaScript and TypeScript library that enables developers to style text and add various decorative elements to console output. With Stylesh, you can apply colors to text and backgrounds, create dashed, double, solid, or custom borders, and even customize the border colors from a palette of 141 available colors. This library simplifies the process of enhancing console output for JavaScript and TypeScript developers, making debugging and logging more visually appealing and informative.

![Examples](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/Screenshot%202023-10-08%20002635.png)

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install stylesh
```

### Features

- **Text Styling:** Change the color of the text to highlight important messages or errors.
- **Background Styling:** Set background colors to emphasize specific sections of the output.
- **Border Styles:** Add dashed, double, solid, or custom borders to console output.
- **Border Color Customization:** Choose from 141 available colors to customize border colors.
- **Rounded Corners:** Apply rounded corners to the borders for a polished look.
- **Easy to Use:** Simple and intuitive API, allowing developers to style console output with minimal code.
- **Compatible:** Works seamlessly with both JavaScript and TypeScript projects.

## Usage

First, import the stylesh library into your project:

```js
// Import the stylesh library
require("stylesh");
//or
import("stylesh");
```

#### Change Text Color and Background

```js
console.log("Important Message".color("green").bg("yellow"));
```

### Border Styles

#### Solid Border

```js
console.log("Error Message".color("red").createSolidBorder("red"));
```

#### Dashed Border

```js
console.log("Hello".color("blue").createDashedBorder("blue"));
```

#### Rounded Corners

```js
console.log("Hello".createRoundedBorder("red", "r"));
```

#### Double Border

```js
console.log("Error Message".color("red").createDoubleBorder("red"));
```

#### Dotted Border

```js
console.log("Error Message".color("red").createDottedBorder("red"));
```

#### Custom Border

```js
console.log("Hello".color("aqua").createCustomBorder("=", "top", "red"));
```

### Multiline Messages

```js
console.log(
  "Important Information<>Additional Details<>Note: This is a multi-line message"
    .color("white")
    .createDottedBorder("green", "r")
);
```

### Note

When specifying multiple lines, separate each line with <>

### Customization

Border functions take two arguments: border color and text alignment direction.

- **Border Color:** Any of the 141 available colors, use color names.
- **Text Alignment Direction:** Use 'c' for center (default), 'l' for left, or 'r' for right alignment.

#### Examples

```js
console.log(
  "Default dashed border with center alignment.".createDashedBorder("purple")
);
console.log(
  "Solid border in orange with left alignment.".createSolidBorder("orange", "l")
);
console.log(
  "Rounded border in tomato color with right alignment.".createRoundedBorder(
    "tomato",
    "r"
  )
);
```

![the example result](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/Screenshot%202023-10-08%20004134.png)

### Custom Border

- **Symbol:** The character used to create the border.
- **Border Position:** Use 'top', 'bottom', 'left', or 'right' to specify the position
- **Border Color:** Any of the 141 available colors, use color names.

#### Examples

```js
console.log(
  "Custom green border at the bottom.".createCustomBorder(
    "#",
    "bottom",
    "green"
  )
);
console.log(
  "Custom blue border on the left.".createCustomBorder("*", "left", "blue")
);
console.log(
  "Custom orange border on the right.".createCustomBorder(
    "@",
    "right",
    "orange"
  )
);
```

## Abailable colors :

ConsoleStyler supports a variety of colors, including "red", "green", "blue", and many more. You can choose from 141 available colors to customize your console output.

<div style=" display:flex;  flex-wrap: wrap;  justify-content: space-between">
<table style="font-size:85%; display: inline; border-collapse: collapse;" class="color-chart-x11-table">

<tbody><tr style="vertical-align:top;">
<td>
</td></tr>
<tr>
<th style="background:lightgrey" rowspan="2"><a href="/wiki/HTML" title="HTML">HTML</a> name
</th>
<th style="background:lightgrey" colspan="2"><a href="/wiki/RGB_color_model" title="RGB color model">R G B</a>
</th></tr>
<tr>
<th style="background:lightgrey"><a href="/wiki/Hexadecimal" title="Hexadecimal">Hex</a>
</th>
<th style="background:lightgrey">Decimal
</th></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Pink colors</b></span>
</td></tr>
<tr style="background: mediumvioletred; color: white">
<td>MediumVioletRed</td>
<td>C71585</td>
<td>199, 21, 133
</td></tr>
<tr style="background: deeppink; color: white">
<td>DeepPink</td>
<td>FF1493</td>
<td>255, 20, 147
</td></tr>
<tr style="background: palevioletred; color: black">
<td>PaleVioletRed</td>
<td>DB7093</td>
<td>219, 112, 147
</td></tr>
<tr style="background: hotpink; color: black">
<td>HotPink</td>
<td>FF69B4</td>
<td>255, 105, 180
</td></tr>
<tr style="background: lightpink; color: black">
<td>LightPink</td>
<td>FFB6C1</td>
<td>255, 182, 193
</td></tr>
<tr style="background: pink; color: black">
<td>Pink</td>
<td>FFC0CB</td>
<td>255, 192, 203
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Red colors</b></span>
</td></tr>
<tr style="background: darkred; color: white">
<td>DarkRed</td>
<td>8B0000</td>
<td>139, 0, 0
</td></tr>
<tr style="background: red; color: white">
<td>Red</td>
<td>FF0000</td>
<td>255, 0, 0
</td></tr>
<tr style="background: firebrick; color: white">
<td>Firebrick</td>
<td>B22222</td>
<td>178, 34, 34
</td></tr>
<tr style="background: crimson; color: white">
<td>Crimson</td>
<td>DC143C</td>
<td>220, 20, 60
</td></tr>
<tr style="background: indianred; color: white">
<td>IndianRed</td>
<td>CD5C5C</td>
<td>205, 92, 92
</td></tr>
<tr style="background: lightcoral; color: black">
<td>LightCoral</td>
<td>F08080</td>
<td>240, 128, 128
</td></tr>
<tr style="background: salmon; color: black">
<td>Salmon</td>
<td>FA8072</td>
<td>250, 128, 114
</td></tr>
<tr style="background: darksalmon; color: black">
<td>DarkSalmon</td>
<td>E9967A</td>
<td>233, 150, 122
</td></tr>
<tr style="background: lightsalmon; color: black">
<td>LightSalmon</td>
<td>FFA07A</td>
<td>255, 160, 122
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Orange colors</b></span>
</td></tr>
<tr style="background: orangered; color: white">
<td>OrangeRed</td>
<td>FF4500</td>
<td>255, 69, 0
</td></tr>
<tr style="background: tomato; color: black">
<td>Tomato</td>
<td>FF6347</td>
<td>255, 99, 71
</td></tr>
<tr style="background: darkorange; color: black">
<td>DarkOrange</td>
<td>FF8C00</td>
<td>255, 140, 0
</td></tr>
<tr style="background: coral; color: black">
<td>Coral</td>
<td>FF7F50</td>
<td>255, 127, 80
</td></tr>
<tr style="background: orange; color: black">
<td>Orange</td>
<td>FFA500</td>
<td>255, 165, 0
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Yellow colors</b></span>
</td></tr>
<tr style="background: darkkhaki; color: black">
<td>DarkKhaki</td>
<td>BDB76B</td>
<td>189, 183, 107
</td></tr>
<tr style="background: gold; color: black">
<td>Gold</td>
<td>FFD700</td>
<td>255, 215, 0
</td></tr>
<tr style="background: khaki; color: black">
<td>Khaki</td>
<td>F0E68C</td>
<td>240, 230, 140
</td></tr>
<tr style="background: peachpuff; color: black">
<td>PeachPuff</td>
<td>FFDAB9</td>
<td>255, 218, 185
</td></tr>
<tr style="background: yellow; color: black">
<td>Yellow</td>
<td>FFFF00</td>
<td>255, 255, 0
</td></tr>
<tr style="background: palegoldenrod; color: black">
<td>PaleGoldenrod</td>
<td>EEE8AA</td>
<td>238, 232, 170
</td></tr>
<tr style="background: moccasin; color: black">
<td>Moccasin</td>
<td>FFE4B5</td>
<td>255, 228, 181
</td></tr>
<tr style="background: papayawhip; color: black">
<td>PapayaWhip</td>
<td>FFEFD5</td>
<td>255, 239, 213
</td></tr>
<tr style="background: lightgoldenrodyellow; color: black">
<td>LightGoldenrodYellow</td>
<td>FAFAD2</td>
<td>250, 250, 210
</td></tr>
<tr style="background: lemonchiffon; color: black">
<td>LemonChiffon</td>
<td>FFFACD</td>
<td>255, 250, 205
</td></tr>
<tr style="background: lightyellow; color: black">
<td>LightYellow</td>
<td>FFFFE0</td>
<td>255, 255, 224
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Brown colors</b></span>
</td></tr>
<tr style="background: maroon; color: white">
<td>Maroon</td>
<td>800000</td>
<td>128, 0, 0
</td></tr>
<tr style="background: brown; color: white">
<td>Brown</td>
<td>A52A2A</td>
<td>165, 42, 42
</td></tr>
<tr style="background: saddlebrown; color: white">
<td>SaddleBrown</td>
<td>8B4513</td>
<td>139, 69, 19
</td></tr>
<tr style="background: sienna; color: white">
<td>Sienna</td>
<td>A0522D</td>
<td>160, 82, 45
</td></tr>
<tr style="background: chocolate; color: black">
<td>Chocolate</td>
<td>D2691E</td>
<td>210, 105, 30
</td></tr>
<tr style="background: darkgoldenrod; color: black">
<td>DarkGoldenrod</td>
<td>B8860B</td>
<td>184, 134, 11
</td></tr>
<tr style="background: peru; color: black">
<td>Peru</td>
<td>CD853F</td>
<td>205, 133, 63
</td></tr>
<tr style="background: rosybrown; color: black">
<td>RosyBrown</td>
<td>BC8F8F</td>
<td>188, 143, 143
</td></tr>
<tr style="background: goldenrod; color: black">
<td>Goldenrod</td>
<td>DAA520</td>
<td>218, 165, 32
</td></tr>
<tr style="background: sandybrown; color: black">
<td>SandyBrown</td>
<td>F4A460</td>
<td>244, 164, 96
</td></tr>
<tr style="background: tan; color: black">
<td>Tan</td>
<td>D2B48C</td>
<td>210, 180, 140
</td></tr>
<tr style="background: burlywood; color: black">
<td>Burlywood</td>
<td>DEB887</td>
<td>222, 184, 135
</td></tr>
<tr style="background: wheat; color: black">
<td>Wheat</td>
<td>F5DEB3</td>
<td>245, 222, 179
</td></tr>
<tr style="background: navajowhite; color: black">
<td>NavajoWhite</td>
<td>FFDEAD</td>
<td>255, 222, 173
</td></tr>
<tr style="background: bisque; color: black">
<td>Bisque</td>
<td>FFE4C4</td>
<td>255, 228, 196
</td></tr>
<tr style="background: blanchedalmond; color: black">
<td>BlanchedAlmond</td>
<td>FFEBCD</td>
<td>255, 235, 205
</td></tr>
<tr style="background: cornsilk; color: black">
<td>Cornsilk</td>
<td>FFF8DC</td>
<td>255, 248, 220
</td></tr>
</tbody></table>

<table style="font-size:85%; display: inline; border-collapse: collapse;" class="color-chart-x11-table">

<tbody><tr style="vertical-align:top;">
<td>
</td></tr>
<tr>
<th style="background:lightgrey" rowspan="2"><a href="/wiki/HTML" title="HTML">HTML</a> name
</th>
<th style="background:lightgrey" colspan="2"><a href="/wiki/RGB_color_model" title="RGB color model">R G B</a>
</th></tr>
<tr>
<th style="background:lightgrey"><a href="/wiki/Hexadecimal" title="Hexadecimal">Hex</a>
</th>
<th style="background:lightgrey">Decimal
</th></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Purple, violet, and magenta colors</b></span>
</td></tr>
<tr style="background: indigo; color: white">
<td>Indigo</td>
<td>4B0082</td>
<td>75, 0, 130
</td></tr>
<tr style="background: purple; color: white">
<td>Purple</td>
<td>800080</td>
<td>128, 0, 128
</td></tr>
<tr style="background: darkmagenta; color: white">
<td>DarkMagenta</td>
<td>8B008B</td>
<td>139, 0, 139
</td></tr>
<tr style="background: darkviolet; color: white">
<td>DarkViolet</td>
<td>9400D3</td>
<td>148, 0, 211
</td></tr>
<tr style="background: darkslateblue; color: white">
<td>DarkSlateBlue</td>
<td>483D8B</td>
<td>72, 61, 139
</td></tr>
<tr style="background: blueviolet; color: white">
<td>BlueViolet</td>
<td>8A2BE2</td>
<td>138, 43, 226
</td></tr>
<tr style="background: darkorchid; color: white">
<td>DarkOrchid</td>
<td>9932CC</td>
<td>153, 50, 204
</td></tr>
<tr style="background: fuchsia; color: white">
<td>Fuchsia</td>
<td>FF00FF</td>
<td>255, 0, 255
</td></tr>
<tr style="background: magenta; color: white">
<td>Magenta</td>
<td>FF00FF</td>
<td>255, 0, 255
</td></tr>
<tr style="background: slateblue; color: white">
<td>SlateBlue</td>
<td>6A5ACD</td>
<td>106, 90, 205
</td></tr>
<tr style="background: mediumslateblue; color: white">
<td>MediumSlateBlue</td>
<td>7B68EE</td>
<td>123, 104, 238
</td></tr>
<tr style="background: mediumorchid; color: black">
<td>MediumOrchid</td>
<td>BA55D3</td>
<td>186, 85, 211
</td></tr>
<tr style="background: mediumpurple; color: black">
<td>MediumPurple</td>
<td>9370DB</td>
<td>147, 112, 219
</td></tr>
<tr style="background: orchid; color: black">
<td>Orchid</td>
<td>DA70D6</td>
<td>218, 112, 214
</td></tr>
<tr style="background: violet; color: black">
<td>Violet</td>
<td>EE82EE</td>
<td>238, 130, 238
</td></tr>
<tr style="background: plum; color: black">
<td>Plum</td>
<td>DDA0DD</td>
<td>221, 160, 221
</td></tr>
<tr style="background: thistle; color: black">
<td>Thistle</td>
<td>D8BFD8</td>
<td>216, 191, 216
</td></tr>
<tr style="background: lavender; color: black">
<td>Lavender</td>
<td>E6E6FA</td>
<td>230, 230, 250
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Blue colors</b></span>
</td></tr>
<tr style="background: midnightblue; color: white">
<td>MidnightBlue</td>
<td>191970</td>
<td>25, 25, 112
</td></tr>
<tr style="background: navy; color: white">
<td>Navy</td>
<td>000080</td>
<td>0, 0, 128
</td></tr>
<tr style="background: darkblue; color: white">
<td>DarkBlue</td>
<td>00008B</td>
<td>0, 0, 139
</td></tr>
<tr style="background: mediumblue; color: white">
<td>MediumBlue</td>
<td>0000CD</td>
<td>0, 0, 205
</td></tr>
<tr style="background: blue; color: white">
<td>Blue</td>
<td>0000FF</td>
<td>0, 0, 255
</td></tr>
<tr style="background: royalblue; color: white">
<td>RoyalBlue</td>
<td>4169E1</td>
<td>65, 105, 225
</td></tr>
<tr style="background: steelblue; color: white">
<td>SteelBlue</td>
<td>4682B4</td>
<td>70, 130, 180
</td></tr>
<tr style="background: dodgerblue; color: white">
<td>DodgerBlue</td>
<td>1E90FF</td>
<td>30, 144, 255
</td></tr>
<tr style="background: deepskyblue; color: black">
<td>DeepSkyBlue</td>
<td>00BFFF</td>
<td>0, 191, 255
</td></tr>
<tr style="background: cornflowerblue; color: black">
<td>CornflowerBlue</td>
<td>6495ED</td>
<td>100, 149, 237
</td></tr>
<tr style="background: skyblue; color: black">
<td>SkyBlue</td>
<td>87CEEB</td>
<td>135, 206, 235
</td></tr>
<tr style="background: lightskyblue; color: black">
<td>LightSkyBlue</td>
<td>87CEFA</td>
<td>135, 206, 250
</td></tr>
<tr style="background: lightsteelblue; color: black">
<td>LightSteelBlue</td>
<td>B0C4DE</td>
<td>176, 196, 222
</td></tr>
<tr style="background: lightblue; color: black">
<td>LightBlue</td>
<td>ADD8E6</td>
<td>173, 216, 230
</td></tr>
<tr style="background: powderblue; color: black">
<td>PowderBlue</td>
<td>B0E0E6</td>
<td>176, 224, 230
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Cyan colors</b></span>
</td></tr>
<tr style="background: teal; color: white">
<td>Teal</td>
<td>008080</td>
<td>0, 128, 128
</td></tr>
<tr style="background: darkcyan; color: white">
<td>DarkCyan</td>
<td>008B8B</td>
<td>0, 139, 139
</td></tr>
<tr style="background: lightseagreen; color: black">
<td>LightSeaGreen</td>
<td>20B2AA</td>
<td>32, 178, 170
</td></tr>
<tr style="background: cadetblue; color: black">
<td>CadetBlue</td>
<td>5F9EA0</td>
<td>95, 158, 160
</td></tr>
<tr style="background: darkturquoise; color: black">
<td>DarkTurquoise</td>
<td>00CED1</td>
<td>0, 206, 209
</td></tr>
<tr style="background: mediumturquoise; color: black">
<td>MediumTurquoise</td>
<td>48D1CC</td>
<td>72, 209, 204
</td></tr>
<tr style="background: turquoise; color: black">
<td>Turquoise</td>
<td>40E0D0</td>
<td>64, 224, 208
</td></tr>
<tr style="background: aqua; color: black">
<td>Aqua</td>
<td>00FFFF</td>
<td>0, 255, 255
</td></tr>
<tr style="background: cyan; color: black">
<td>Cyan</td>
<td>00FFFF</td>
<td>0, 255, 255
</td></tr>
<tr style="background: aquamarine; color: black">
<td>Aquamarine</td>
<td>7FFFD4</td>
<td>127, 255, 212
</td></tr>
<tr style="background: paleturquoise; color: black">
<td>PaleTurquoise</td>
<td>AFEEEE</td>
<td>175, 238, 238
</td></tr>
<tr style="background: lightcyan; color: black">
<td>LightCyan</td>
<td>E0FFFF</td>
<td>224, 255, 255
</td></tr>
</tbody></table>
<table style="font-size:85%; display: inline; border-collapse: collapse;" class="color-chart-x11-table">

<tbody><tr style="vertical-align:top;">
<td>
</td></tr>
<tr>
<th style="background:lightgrey" rowspan="2"><a href="/wiki/HTML" title="HTML">HTML</a> name
</th>
<th style="background:lightgrey" colspan="2"><a href="/wiki/RGB_color_model" title="RGB color model">R G B</a>
</th></tr>
<tr>
<th style="background:lightgrey"><a href="/wiki/Hexadecimal" title="Hexadecimal">Hex</a>
</th>
<th style="background:lightgrey">Decimal
</th></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Green colors</b></span>
</td></tr>
<tr style="background: darkgreen; color: white">
<td>DarkGreen</td>
<td>006400</td>
<td>0, 100, 0
</td></tr>
<tr style="background: green; color: white">
<td>Green</td>
<td>008000</td>
<td>0, 128, 0
</td></tr>
<tr style="background: darkolivegreen; color: white">
<td>DarkOliveGreen</td>
<td>556B2F</td>
<td>85, 107, 47
</td></tr>
<tr style="background: forestgreen; color: white">
<td>ForestGreen</td>
<td>228B22</td>
<td>34, 139, 34
</td></tr>
<tr style="background: seagreen; color: white">
<td>SeaGreen</td>
<td>2E8B57</td>
<td>46, 139, 87
</td></tr>
<tr style="background: olive; color: white">
<td>Olive</td>
<td>808000</td>
<td>128, 128, 0
</td></tr>
<tr style="background: olivedrab; color: white">
<td>OliveDrab</td>
<td>6B8E23</td>
<td>107, 142, 35
</td></tr>
<tr style="background: mediumseagreen; color: black">
<td>MediumSeaGreen</td>
<td>3CB371</td>
<td>60, 179, 113
</td></tr>
<tr style="background: limegreen; color: black">
<td>LimeGreen</td>
<td>32CD32</td>
<td>50, 205, 50
</td></tr>
<tr style="background: lime; color: black">
<td>Lime</td>
<td>00FF00</td>
<td>0, 255, 0
</td></tr>
<tr style="background: springgreen; color: black">
<td>SpringGreen</td>
<td>00FF7F</td>
<td>0, 255, 127
</td></tr>
<tr style="background: mediumspringgreen; color: black">
<td>MediumSpringGreen</td>
<td>00FA9A</td>
<td>0, 250, 154
</td></tr>
<tr style="background: darkseagreen; color: black">
<td>DarkSeaGreen</td>
<td>8FBC8F</td>
<td>143, 188, 143
</td></tr>
<tr style="background: mediumaquamarine; color: black">
<td>MediumAquamarine</td>
<td>66CDAA</td>
<td>102, 205, 170
</td></tr>
<tr style="background: yellowgreen; color: black">
<td>YellowGreen</td>
<td>9ACD32</td>
<td>154, 205, 50
</td></tr>
<tr style="background: lawngreen; color: black">
<td>LawnGreen</td>
<td>7CFC00</td>
<td>124, 252, 0
</td></tr>
<tr style="background: chartreuse; color: black">
<td>Chartreuse</td>
<td>7FFF00</td>
<td>127, 255, 0
</td></tr>
<tr style="background: lightgreen; color: black">
<td>LightGreen</td>
<td>90EE90</td>
<td>144, 238, 144
</td></tr>
<tr style="background: greenyellow; color: black">
<td>GreenYellow</td>
<td>ADFF2F</td>
<td>173, 255, 47
</td></tr>
<tr style="background: palegreen; color: black">
<td>PaleGreen</td>
<td>98FB98</td>
<td>152, 251, 152
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>White colors</b></span>
</td></tr>
<tr style="background: mistyrose; color: black">
<td>MistyRose</td>
<td>FFE4E1</td>
<td>255, 228, 225
</td></tr>
<tr style="background: antiquewhite; color: black">
<td>AntiqueWhite</td>
<td>FAEBD7</td>
<td>250, 235, 215
</td></tr>
<tr style="background: linen; color: black">
<td>Linen</td>
<td>FAF0E6</td>
<td>250, 240, 230
</td></tr>
<tr style="background: beige; color: black">
<td>Beige</td>
<td>F5F5DC</td>
<td>245, 245, 220
</td></tr>
<tr style="background: whitesmoke; color: black">
<td>WhiteSmoke</td>
<td>F5F5F5</td>
<td>245, 245, 245
</td></tr>
<tr style="background: lavenderblush; color: black">
<td>LavenderBlush</td>
<td>FFF0F5</td>
<td>255, 240, 245
</td></tr>
<tr style="background: oldlace; color: black">
<td>OldLace</td>
<td>FDF5E6</td>
<td>253, 245, 230
</td></tr>
<tr style="background: aliceblue; color: black">
<td>AliceBlue</td>
<td>F0F8FF</td>
<td>240, 248, 255
</td></tr>
<tr style="background: seashell; color: black">
<td>Seashell</td>
<td>FFF5EE</td>
<td>255, 245, 238
</td></tr>
<tr style="background: ghostwhite; color: black">
<td>GhostWhite</td>
<td>F8F8FF</td>
<td>248, 248, 255
</td></tr>
<tr style="background: honeydew; color: black">
<td>Honeydew</td>
<td>F0FFF0</td>
<td>240, 255, 240
</td></tr>
<tr style="background: floralwhite; color: black">
<td>FloralWhite</td>
<td>FFFAF0</td>
<td>255, 250, 240
</td></tr>
<tr style="background: azure; color: black">
<td>Azure</td>
<td>F0FFFF</td>
<td>240, 255, 255
</td></tr>
<tr style="background: mintcream; color: black">
<td>MintCream</td>
<td>F5FFFA</td>
<td>245, 255, 250
</td></tr>
<tr style="background: snow; color: black">
<td>Snow</td>
<td>FFFAFA</td>
<td>255, 250, 250
</td></tr>
<tr style="background: ivory; color: black">
<td>Ivory</td>
<td>FFFFF0</td>
<td>255, 255, 240
</td></tr>
<tr style="background: white; color: black">
<td>White</td>
<td>FFFFFF</td>
<td>255, 255, 255
</td></tr>
<tr>
<td colspan="3" style="background:whitesmoke;text-align:left; color:black"><span style="font-size:120%"><b>Gray and black colors</b></span>
</td></tr>
<tr style="background: black; color: white">
<td>Black</td>
<td>000000</td>
<td>0, 0, 0
</td></tr>
<tr style="background: darkslategray; color: white">
<td>DarkSlateGray</td>
<td>2F4F4F</td>
<td>47, 79, 79
</td></tr>
<tr style="background: dimgray; color: white">
<td>DimGray</td>
<td>696969</td>
<td>105, 105, 105
</td></tr>
<tr style="background: slategray; color: white">
<td>SlateGray</td>
<td>708090</td>
<td>112, 128, 144
</td></tr>
<tr style="background: gray; color: black">
<td>Gray</td>
<td>808080</td>
<td>128, 128, 128
</td></tr>
<tr style="background: lightslategray; color: black">
<td>LightSlateGray</td>
<td>778899</td>
<td>119, 136, 153
</td></tr>
<tr style="background: darkgray; color: black">
<td>DarkGray</td>
<td>A9A9A9</td>
<td>169, 169, 169
</td></tr>
<tr style="background: silver; color: black">
<td>Silver</td>
<td>C0C0C0</td>
<td>192, 192, 192
</td></tr>
<tr style="background: lightgray; color: black">
<td>LightGray</td>
<td>D3D3D3</td>
<td>211, 211, 211
</td></tr>
<tr style="background: gainsboro; color: black">
<td>Gainsboro</td>
<td>DCDCDC</td>
<td>220, 220, 220
</td></tr>
</tbody></table>

</div>
