# STYLESH

## Description

Stylesh is a powerful and easy-to-use JavaScript and TypeScript library that enables developers to style text and add various decorative elements to console output. With Stylesh, you can apply colors to text and backgrounds, create dashed, double, solid, or custom borders, and even customize the border colors from a palette of 141 available colors. This library simplifies the process of enhancing console output for JavaScript and TypeScript developers, making debugging and logging more visually appealing and informative.

![Logo](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/logo-color.png)

![Examples](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/Screenshot%202023-10-09%20123255.png)

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
import "stylesh";
```

## Text color

1.**single color:** You can use Any of the 141 available colors, use color names

```js
console.log("Important Message".color("green"));
```

2.**multi colors:**

![Examples](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/Screenshot%202023-10-09%20130845.png)

- red
- yellow
- green
- blue
- pink
- orange
- brown
- purple
- cyan

```js
console.log("Important Message".multiColors("red");
```

## Background color

1.**single color:** You can use Any of the 141 available colors, use color names

```js
console.log("Important Message".bg("green"));
```

2.**multi colors:**

![Examples](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/Screenshot%202023-10-09%20130411.png)

- red
- yellow
- green
- blue
- pink
- orange
- brown
- purple
- cyan

```js
console.log("Important Message".multiBg("red");
```

## Border Styles

![Examples](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/Screenshot%202023-10-08%20002635.png)

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
- **Border Position:** Use 'all', 'top', 'bottom', 'left', or 'right' to specify the position
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

![Colors](https://raw.githubusercontent.com/omar-alghaish/stylesh/main/imgs/Web-colors-Wikipedia.png)
