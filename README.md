# 🎨 Stylesh

A powerful and elegant terminal styling library for Node.js with support for colors, gradients, borders, themes, and animations.

[![npm version](https://img.shields.io/npm/v/stylesh.svg)](https://www.npmjs.com/package/stylesh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🌈 **140+ Named Colors** - Extensive color palette with intuitive names
- 🎭 **Predefined Themes** - Built-in themes for common use cases (error, success, warning, etc.)
- 🎨 **Gradient Support** - Apply color gradients to text and backgrounds
- 📦 **Border Styles** - Multiple border styles (solid, rounded, double, dashed, dotted)
- 🎬 **Animations** - Rich animation effects (typing, blinking, rainbow, pulse, spinner, etc.)
- 🔗 **Method Chaining** - Fluent API for easy composition
- 🎯 **Text Alignment** - Left, center, and right alignment options
- 🧩 **String Extensions** - Convenient prototype extensions for quick styling

## 📦 Installation

```bash
npm install stylesh
```

## 🚀 Quick Start

```javascript
import 'stylesh';

// Simple colored text
console.log('Hello World'.color('red'));

// Text with background
console.log('Success!'.color('white').bg('green'));

// Bordered text
console.log('Important'.createSolidBorder('blue'));

// Gradient text
console.log('Rainbow Text'.gradient('red'));

// Themed box
console.log('Error Message'.themeBox('error'));
```

---

## 📚 Table of Contents

1. [Getting Started](#-getting-started)
2. [Text Colors](#-text-colors)
3. [Background Colors](#-background-colors)
4. [Combining Colors](#-combining-colors)
5. [Gradients](#-gradients)
6. [Borders](#-borders)
7. [Text Alignment](#-text-alignment)
8. [Themes](#-themes)
9. [Animations](#-animations)
10. [Advanced Usage](#-advanced-usage)

---

## 🎯 Getting Started

### Two Ways to Use Stylesh

#### Method 1: Using the StringStyler Class

```javascript
import { StringStyler } from 'stylesh';

const text = new StringStyler('Hello World')
  .color('cyan')
  .bg('darkBlue')
  .toString();

console.log(text);
```

#### Method 2: Using String Extensions (Recommended for Quick Styling)

```javascript
import 'stylesh';

console.log('Hello World'.color('cyan').bg('darkBlue'));
```

**Note:** String extensions are more convenient and the examples below will primarily use this approach.

---

## 🎨 Text Colors

### Basic Text Coloring

Apply colors to your text using the `.color()` method:

```javascript
import 'stylesh';

// Single color
console.log('Red text'.color('red'));
console.log('Blue text'.color('blue'));
console.log('Green text'.color('green'));
```

**Output:**
```
Red text      (in red color)
Blue text     (in blue color)
Green text    (in green color)
```

### All Available Text Colors

Stylesh provides 140+ named colors organized into categories:

#### Red Shades
```javascript
console.log('Dark Red'.color('darkRed'));
console.log('Red'.color('red'));
console.log('Firebrick'.color('firebrick'));
console.log('Crimson'.color('crimson'));
console.log('Indian Red'.color('indianRed'));
console.log('Light Coral'.color('lightCoral'));
console.log('Salmon'.color('salmon'));
console.log('Dark Salmon'.color('darkSalmon'));
console.log('Light Salmon'.color('lightSalmon'));
```

#### Orange Shades
```javascript
console.log('Orange Red'.color('orangeRed'));
console.log('Tomato'.color('tomato'));
console.log('Dark Orange'.color('darkOrange'));
console.log('Coral'.color('coral'));
console.log('Orange'.color('orange'));
```

#### Yellow Shades
```javascript
console.log('Dark Khaki'.color('darkKhaki'));
console.log('Gold'.color('gold'));
console.log('Khaki'.color('khaki'));
console.log('Yellow'.color('yellow'));
console.log('Pale Goldenrod'.color('paleGoldenrod'));
console.log('Light Yellow'.color('lightYellow'));
```

#### Green Shades
```javascript
console.log('Dark Green'.color('darkGreen'));
console.log('Green'.color('green'));
console.log('Forest Green'.color('forestGreen'));
console.log('Lime Green'.color('limeGreen'));
console.log('Lime'.color('lime'));
console.log('Spring Green'.color('springGreen'));
console.log('Light Green'.color('lightGreen'));
console.log('Pale Green'.color('paleGreen'));
```

#### Blue Shades
```javascript
console.log('Midnight Blue'.color('midnightBlue'));
console.log('Navy'.color('navy'));
console.log('Dark Blue'.color('darkBlue'));
console.log('Blue'.color('blue'));
console.log('Royal Blue'.color('royalBlue'));
console.log('Dodger Blue'.color('dodgerBlue'));
console.log('Deep Sky Blue'.color('deepSkyBlue'));
console.log('Sky Blue'.color('skyBlue'));
console.log('Light Blue'.color('lightBlue'));
```

#### Purple/Violet Shades
```javascript
console.log('Indigo'.color('indigo'));
console.log('Purple'.color('purple'));
console.log('Dark Violet'.color('darkViolet'));
console.log('Blue Violet'.color('blueViolet'));
console.log('Dark Orchid'.color('darkOrchid'));
console.log('Medium Purple'.color('mediumPurple'));
console.log('Orchid'.color('orchid'));
console.log('Violet'.color('violet'));
console.log('Plum'.color('plum'));
console.log('Lavender'.color('lavender'));
```

#### Pink Shades
```javascript
console.log('Deep Pink'.color('deepPink'));
console.log('Hot Pink'.color('hotPink'));
console.log('Light Pink'.color('lightPink'));
console.log('Pink'.color('pink'));
```

#### Cyan Shades
```javascript
console.log('Teal'.color('teal'));
console.log('Dark Cyan'.color('darkCyan'));
console.log('Dark Turquoise'.color('darkTurquoise'));
console.log('Turquoise'.color('turquoise'));
console.log('Aqua'.color('aqua'));
console.log('Cyan'.color('cyan'));
console.log('Aquamarine'.color('aquamarine'));
console.log('Light Cyan'.color('lightCyan'));
```

#### Brown Shades
```javascript
console.log('Maroon'.color('maroon'));
console.log('Brown'.color('brown'));
console.log('Saddle Brown'.color('saddleBrown'));
console.log('Sienna'.color('sienna'));
console.log('Chocolate'.color('chocolate'));
console.log('Peru'.color('peru'));
console.log('Sandy Brown'.color('sandyBrown'));
console.log('Tan'.color('tan'));
console.log('Wheat'.color('wheat'));
```

#### Gray Shades
```javascript
console.log('Black'.color('black'));
console.log('Dim Gray'.color('dimGray'));
console.log('Gray'.color('gray'));
console.log('Dark Gray'.color('darkGray'));
console.log('Silver'.color('silver'));
console.log('Light Gray'.color('lightGray'));
console.log('Gainsboro'.color('gainsboro'));
console.log('White'.color('white'));
```

---

## 🖼️ Background Colors

### Basic Background Colors

Apply background colors using the `.bg()` method:

```javascript
console.log('White on Red'.color('white').bg('red'));
console.log('Black on Yellow'.color('black').bg('yellow'));
console.log('White on Blue'.color('white').bg('blue'));
console.log('Yellow on Black'.color('yellow').bg('black'));
```

**Output:**
```
White on Red     (white text on red background)
Black on Yellow  (black text on yellow background)
White on Blue    (white text on blue background)
Yellow on Black  (yellow text on black background)
```

### All Background Colors

All the color names that work with `.color()` also work with `.bg()`:

```javascript
// Examples
console.log('Text'.bg('darkRed'));
console.log('Text'.bg('lightBlue'));
console.log('Text'.bg('paleGreen'));
console.log('Text'.bg('lavender'));
console.log('Text'.bg('gold'));
```

---

## 🎭 Combining Colors

### Text + Background

You can chain `.color()` and `.bg()` methods:

```javascript
console.log('Success Message'.color('white').bg('darkGreen'));
console.log('Error Message'.color('white').bg('darkRed'));
console.log('Warning'.color('black').bg('yellow'));
console.log('Info'.color('white').bg('darkBlue'));
```

**Example Output:**
```
Success Message  (white text on dark green background)
Error Message    (white text on dark red background)
Warning          (black text on yellow background)
Info             (white text on dark blue background)
```

### Creating Highlights

```javascript
console.log('This is '.color('white') + 'IMPORTANT'.color('yellow').bg('red') + ' information'.color('white'));
```

**Output:**
```
This is IMPORTANT information  (with "IMPORTANT" highlighted in yellow on red)
```

---

## 🌈 Gradients

### Text Gradients

Apply gradient colors to your text using predefined color groups:

```javascript
// Predefined gradient groups
console.log('Red Gradient'.gradient('red'));
console.log('Orange Gradient'.gradient('orange'));
console.log('Yellow Gradient'.gradient('yellow'));
console.log('Green Gradient'.gradient('green'));
console.log('Blue Gradient'.gradient('blue'));
console.log('Purple Gradient'.gradient('purple'));
console.log('Pink Gradient'.gradient('pink'));
console.log('Cyan Gradient'.gradient('cyan'));
console.log('Brown Gradient'.gradient('brown'));
console.log('Gray Gradient'.gradient('gray'));
```

**Output:**
```
Red Gradient     (each character gradually changes through red shades)
Orange Gradient  (each character gradually changes through orange shades)
...
```

### Custom Gradients

Create custom gradients with specific colors:

```javascript
// Custom color array
console.log('Custom Colors'.gradient(['red', 'orange', 'yellow', 'green', 'blue']));

// Sunset gradient
console.log('Beautiful Sunset'.gradient(['orange', 'coral', 'salmon', 'pink']));

// Ocean gradient
console.log('Deep Ocean Waves'.gradient(['darkBlue', 'blue', 'dodgerBlue', 'skyBlue', 'lightBlue']));

// Fire gradient
console.log('FIRE!'.gradient(['darkRed', 'red', 'orangeRed', 'orange', 'gold']));
```

**How it works:** Each character in the text gets colored with the next color in the gradient array, cycling through the colors.

### Background Gradients

Apply gradient backgrounds using `.bgGradient()`:

```javascript
// Predefined background gradient groups
console.log('Background Gradient'.bgGradient('blue'));
console.log('Colorful Background'.bgGradient('purple'));

// Custom background gradient
console.log('Custom BG'.bgGradient(['darkGreen', 'green', 'lime', 'lightGreen']));
```

### Combining Text and Background Gradients

```javascript
// Text gradient with solid background
console.log('Rainbow on Dark'.gradient('red').bg('black'));

// Solid text with background gradient
console.log('White on Gradient'.color('white').bgGradient('blue'));
```

---

## 📦 Borders

### Border Styles Overview

Stylesh provides 5 border styles:

1. **Solid** - Clean box-drawing characters
2. **Rounded** - Smooth rounded corners
3. **Double** - Bold double lines
4. **Dashed** - Simple ASCII dashes
5. **Dotted** - Dots for a lighter feel

### Creating Simple Borders

#### Solid Border
```javascript
console.log('Solid Border'.createSolidBorder());
```
**Output:**
```
┌──────────────┐
│ Solid Border │
└──────────────┘
```

#### Rounded Border
```javascript
console.log('Rounded Border'.createRoundedBorder());
```
**Output:**
```
╭────────────────╮
│ Rounded Border │
╰────────────────╯
```

#### Double Border
```javascript
console.log('Double Border'.createDoubleBorder());
```
**Output:**
```
╔════════════════╗
║ Double Border  ║
╚════════════════╝
```

#### Dashed Border
```javascript
console.log('Dashed Border'.createDashedBorder());
```
**Output:**
```
+----------------+
| Dashed Border  |
+----------------+
```

#### Dotted Border
```javascript
console.log('Dotted Border'.createDottedBorder());
```
**Output:**
```
•••••••••••••••••
• Dotted Border •
•••••••••••••••••
```

### Colored Borders

Add color to any border style:

```javascript
console.log('Red Border'.createSolidBorder('red'));
console.log('Green Border'.createRoundedBorder('green'));
console.log('Blue Border'.createDoubleBorder('blue'));
console.log('Yellow Border'.createDashedBorder('yellow'));
console.log('Cyan Border'.createDottedBorder('cyan'));
```

**Output:**
```
┌────────────┐  (in red)
│ Red Border │
└────────────┘

╭──────────────╮  (in green)
│ Green Border │
╰──────────────╯
...
```

### Borders with Colored Text

Combine text styling with borders:

```javascript
console.log('Success'.color('white').bg('green').createSolidBorder('green'));
console.log('Error'.color('white').bg('red').createRoundedBorder('red'));
console.log('Warning'.color('black').bg('yellow').createDoubleBorder('orange'));
```

**Output:**
```
┌─────────┐
│ Success │  (white text on green background, green border)
└─────────┘

╭───────╮
│ Error │  (white text on red background, red border)
╰───────╯
...
```

### Multi-line Borders

Borders automatically handle multi-line text:

```javascript
const multiLine = `Line 1
Line 2
Line 3`;

console.log(multiLine.createSolidBorder('blue'));
```

**Output:**
```
┌────────┐
│ Line 1 │
│ Line 2 │
│ Line 3 │
└────────┘
```

### Custom Border Directions

Control which sides of the border to show:

```javascript
import { StringStyler } from 'stylesh';

// All sides (default)
console.log(new StringStyler('All Sides').border('solid', 'blue', 'all'));

// Only top and bottom
console.log(new StringStyler('Horizontal').border('solid', 'blue', 'horizontal'));

// Only left and right
console.log(new StringStyler('Vertical').border('solid', 'blue', 'vertical'));

// Only top
console.log(new StringStyler('Top Only').border('solid', 'blue', 'top'));

// Only bottom
console.log(new StringStyler('Bottom Only').border('solid', 'blue', 'bottom'));

// Only left
console.log(new StringStyler('Left Only').border('solid', 'blue', 'left'));

// Only right
console.log(new StringStyler('Right Only').border('solid', 'blue', 'right'));
```

**Output:**
```
┌────────────┐
│ All Sides  │
└────────────┘

┌──────────────┐
  Horizontal
└──────────────┘

│ Vertical │

┌────────────┐
  Top Only

  Bottom Only
└────────────┘

│ Left Only

  Right Only │
```

### Advanced Border Usage with StringStyler

For more control, use the `StringStyler` class directly:

```javascript
import { StringStyler } from 'stylesh';

const text = new StringStyler('Custom Border')
  .color('yellow')
  .bg('darkBlue')
  .border('rounded', 'cyan', 'all', 'center');

console.log(text);
```

---

## 🎯 Text Alignment

### Alignment Options

When creating borders, you can specify text alignment:

```javascript
// Center aligned (default)
console.log('Center'.createSolidBorder('blue', 'center'));

// Left aligned
console.log('Left Aligned Text'.createSolidBorder('blue', 'left'));

// Right aligned
console.log('Right Aligned Text'.createSolidBorder('blue', 'right'));
```

**Output:**
```
┌────────┐
│ Center │  (centered)
└────────┘

┌────────────────────┐
│ Left Aligned Text  │  (left aligned)
└────────────────────┘

┌────────────────────┐
│  Right Aligned Text│  (right aligned)
└────────────────────┘
```

### Multi-line Alignment

Alignment works with multi-line text too:

```javascript
const multiLine = `Short
Medium line
This is a longer line`;

console.log(multiLine.createSolidBorder('green', 'left'));
console.log(multiLine.createSolidBorder('blue', 'center'));
console.log(multiLine.createSolidBorder('red', 'right'));
```

**Output:**
```
┌───────────────────────┐
│ Short                 │
│ Medium line           │
│ This is a longer line │
└───────────────────────┘

┌───────────────────────┐
│        Short          │
│     Medium line       │
│ This is a longer line │
└───────────────────────┘

┌───────────────────────┐
│                 Short │
│           Medium line │
│ This is a longer line │
└───────────────────────┘
```

---

## 🎨 Themes

### What are Themes?

Themes are predefined combinations of colors, borders, and styles that you can apply instantly.

### Using Built-in Themes

#### Applying a Theme (without border)

```javascript
console.log('Success!'.theme('success'));
console.log('Error occurred'.theme('error'));
console.log('Warning message'.theme('warning'));
console.log('Information'.theme('info'));
```

**Output:**
```
Success!         (white text on dark green background)
Error occurred   (white text on dark red background)
Warning message  (black text on yellow background)
Information      (white text on dark blue background)
```

#### Applying a Theme with Border (themeBox)

```javascript
console.log('Success!'.themeBox('success'));
console.log('Error occurred'.themeBox('error'));
console.log('Warning message'.themeBox('warning'));
console.log('Information'.themeBox('info'));
```

**Output:**
```
╭───────────╮
│ Success!  │  (white on dark green with green rounded border)
╰───────────╯

┌─────────────────┐
│ Error occurred  │  (white on dark red with red solid border)
└─────────────────┘

╔═══════════════════╗
║ Warning message   ║  (black on yellow with orange double border)
╚═══════════════════╝

┌────────────────┐
│ Information    │  (white on dark blue with cyan solid border)
└────────────────┘
```

### All Built-in Themes

#### 1. Error Theme
```javascript
console.log('Fatal Error: System crashed'.themeBox('error'));
```
- Text: White
- Background: Dark Red
- Border: Red, Solid
- Use for: Critical errors and failures

#### 2. Success Theme
```javascript
console.log('Operation completed successfully!'.themeBox('success'));
```
- Text: White
- Background: Dark Green
- Border: Green, Rounded
- Use for: Success messages and confirmations

#### 3. Warning Theme
```javascript
console.log('Warning: Low disk space'.themeBox('warning'));
```
- Text: Black
- Background: Yellow
- Border: Orange, Double
- Use for: Warnings and cautions

#### 4. Info Theme
```javascript
console.log('Server started on port 3000'.themeBox('info'));
```
- Text: White
- Background: Dark Blue
- Border: Cyan, Solid
- Use for: Informational messages

#### 5. Danger Theme
```javascript
console.log('DANGER: High temperature detected!'.themeBox('danger'));
```
- Text: Yellow
- Background: Red
- Border: Yellow, Double
- Use for: Critical warnings and dangerous conditions

#### 6. Primary Theme
```javascript
console.log('Welcome to the Application'.themeBox('primary'));
```
- Text: White
- Background: Blue
- Border: Light Blue, Solid
- Use for: Primary actions and main content

#### 7. Secondary Theme
```javascript
console.log('Additional Information'.themeBox('secondary'));
```
- Text: White
- Background: Gray
- Border: Light Gray, Dashed
- Use for: Secondary content and less important info

#### 8. Rainbow Theme
```javascript
console.log('Celebrate!'.themeBox('rainbow'));
```
- Gradient: Rainbow colors
- Border: Cyan, Rounded
- Use for: Special announcements and celebrations

#### 9. Dark Theme
```javascript
console.log('Dark mode enabled'.themeBox('dark'));
```
- Text: Light Gray
- Background: Black
- Border: Dark Gray, Solid
- Alignment: Left
- Use for: Dark UI elements

#### 10. Light Theme
```javascript
console.log('Light mode enabled'.themeBox('light'));
```
- Text: Black
- Background: White
- Border: Silver, Solid
- Alignment: Left
- Use for: Light UI elements

### Creating Custom Themes

Register your own themes:

```javascript
import { ThemeManager } from 'stylesh';

// Register a custom theme
ThemeManager.register('ocean', {
  textColor: 'white',
  backgroundColor: 'darkBlue',
  borderStyle: 'rounded',
  borderColor: 'cyan',
  alignment: 'center'
});

// Use your custom theme
console.log('Ocean Theme'.themeBox('ocean'));
```

**Output:**
```
╭──────────────╮
│ Ocean Theme  │  (white on dark blue with cyan rounded border)
╰──────────────╯
```

### Custom Theme with Gradient

```javascript
ThemeManager.register('sunset', {
  gradient: ['orange', 'coral', 'salmon', 'pink'],
  borderStyle: 'double',
  borderColor: 'gold',
  alignment: 'center'
});

console.log('Beautiful Sunset Colors'.themeBox('sunset'));
```

### Custom Theme with Background Gradient

```javascript
ThemeManager.register('forest', {
  textColor: 'white',
  bgGradient: ['darkGreen', 'green', 'forestGreen', 'seaGreen'],
  borderStyle: 'rounded',
  borderColor: 'limeGreen',
  alignment: 'center'
});

console.log('Forest Adventure'.themeBox('forest'));
```

### Managing Themes

```javascript
import { ThemeManager } from 'stylesh';

// List all available themes
console.log(ThemeManager.listThemes());
// Output: ['error', 'success', 'warning', 'info', 'danger', 'primary', 'secondary', 'rainbow', 'dark', 'light', 'ocean', 'sunset', 'forest']

// Check if a theme exists
console.log(ThemeManager.has('ocean')); // true
console.log(ThemeManager.has('space'));  // false

// Get theme details
const theme = ThemeManager.get('error');
console.log(theme);
// Output: { textColor: 'white', backgroundColor: 'darkRed', borderStyle: 'solid', borderColor: 'red', alignment: 'center' }

// Remove a custom theme
ThemeManager.remove('ocean');

// Clear all custom themes (keeps built-in themes)
ThemeManager.clearCustomThemes();
```

---

## 🎬 Animations

### Animation Basics

Stylesh includes a powerful animation system. Import the animator:

```javascript
import { animator } from 'stylesh';
```

**Important:** All animations return a stop function that you can call to stop the animation.

### 1. Typing Animation

Reveals text character by character, like a typewriter effect:

```javascript
// Basic typing
await animator.typing('Hello, World!');

// With styling
await animator.typing('Loading complete!', (text) => text.color('green'));

// With options
await animator.typing('Processing...', (text) => text.color('cyan'), {
  speed: 'slow',        // 'slow' | 'normal' | 'fast'
  clearOnComplete: false // Keep text visible after completion
});
```

**Options:**
- `speed`: `'slow'` (200ms), `'normal'` (100ms), `'fast'` (50ms)
- `clearOnComplete`: If `true`, clears the line after animation completes

**Example with different speeds:**
```javascript
await animator.typing('Slow typing...', (text) => text.color('red'), { speed: 'slow' });
await animator.typing('Normal typing...', (text) => text.color('yellow'), { speed: 'normal' });
await animator.typing('Fast typing!', (text) => text.color('green'), { speed: 'fast' });
```

### 2. Blinking Animation

Makes text blink on and off:

```javascript
// Basic blinking
const stopBlink = animator.blink('ALERT!');

// With styling
const stopBlink = animator.blink('WARNING', (text) => text.color('red').bg('yellow'));

// With iterations (blink 5 times then stop)
const stopBlink = animator.blink('Notice', (text) => text.color('cyan'), {
  speed: 'fast',
  iterations: 5
});

// Stop after 3 seconds
setTimeout(() => stopBlink(), 3000);
```

**Options:**
- `speed`: Animation speed
- `iterations`: Number of times to blink (-1 for infinite, default)

**Practical example:**
```javascript
// Alert that blinks 10 times
const stopAlert = animator.blink('🚨 CRITICAL ALERT 🚨', (text) => text.color('yellow').bg('red'), {
  speed: 'fast',
  iterations: 10
});
```

### 3. Rainbow Animation

Cycles through rainbow colors:

```javascript
// Basic rainbow
const stopRainbow = animator.rainbow('Rainbow Text!');

// With speed control
const stopRainbow = animator.rainbow('Colorful', {
  speed: 'normal',
  iterations: 20  // Cycle 20 times
});

// Infinite rainbow (stop manually)
const stopRainbow = animator.rainbow('∞ Infinite Colors ∞', {
  speed: 'fast',
  iterations: -1
});

setTimeout(() => stopRainbow(), 5000); // Stop after 5 seconds
```

**Colors cycled:** Red → Orange → Yellow → Green → Cyan → Blue → Purple → Magenta

### 4. Pulse Animation

Fades between two colors:

```javascript
// Default pulse (white ↔ gray)
const stopPulse = animator.pulse('Pulsing Text');

// Custom colors
const stopPulse = animator.pulse('Heartbeat', 'red', 'darkRed', {
  speed: 'slow'
});

// Ocean wave effect
const stopPulse = animator.pulse('Ocean Waves', 'cyan', 'blue', {
  speed: 'normal',
  iterations: 15
});

// Breathing effect
const stopPulse = animator.pulse('Breathe...', 'lightBlue', 'darkBlue', {
  speed: 'slow',
  iterations: -1
});
```

### 5. Spinner Animation

Shows a loading spinner:

```javascript
// Basic spinner
const stopSpinner = animator.spinner('Loading...');

// Different messages
const stopSpinner = animator.spinner('Fetching data', { speed: 'fast' });
const stopSpinner = animator.spinner('Processing files', { speed: 'normal' });
const stopSpinner = animator.spinner('Installing packages', { speed: 'slow' });

// Stop after operation completes
setTimeout(() => {
  stopSpinner();
  console.log('Done!'.color('green'));
}, 3000);
```

**Spinner frames:** ⠋ ⠙ ⠹ ⠸ ⠼ ⠴ ⠦ ⠧ ⠇ ⠏

**Practical example:**
```javascript
async function fetchData() {
  const stopSpinner = animator.spinner('Downloading data...');
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  stopSpinner();
  console.log('✓ Download complete!'.color('green'));
}

fetchData();
```

### 6. Progress Bar Animation

Shows a progress bar that fills up:

```javascript
// Create progress bar updater
const updateProgress = await animator.progressBar(100, {
  width: 40,      // Width of the bar
  char: '█'       // Character to use for filled portion
});

// Update progress
for (let i = 0; i <= 100; i += 10) {
  updateProgress(i);
  await new Promise(resolve => setTimeout(resolve, 200));
}
```

**Output:**
```
████████████░░░░░░░░░░░░░░░░░░ 40%  (updates in place)
```

**Different styles:**
```javascript
// Thin progress bar
const updateProgress = await animator.progressBar(100, {
  width: 20,
  char: '▓'
});

// Block progress bar
const updateProgress = await animator.progressBar(100, {
  width: 50,
  char: '■'
});
```

**Practical example:**
```javascript
async function processFiles(files) {
  const total = files.length;
  const updateProgress = await animator.progressBar(total, {
    width: 40,
    char: '█'
  });
  
  for (let i = 0; i < files.length; i++) {
    // Process file
    await processFile(files[i]);
    updateProgress(i + 1);
  }
  
  console.log('All files processed!'.color('green'));
}
```

### 7. Wave Animation

Creates a wave effect across the text:

```javascript
// Basic wave
const stopWave = animator.wave('Wave Effect!');

// Faster wave
const stopWave = animator.wave('~~ Ocean Waves ~~', {
  speed: 'fast',
  iterations: 30
});

// Slow wave
const stopWave = animator.wave('Smooth Sailing', {
  speed: 'slow',
  iterations: -1
});

setTimeout(() => stopWave(), 5000);
```

**How it works:** Each character lights up in cyan as the wave passes through.

### 8. Matrix Animation

Creates a Matrix-style falling characters effect:

```javascript
// Basic matrix effect
const stopMatrix = animator.matrix('The Matrix', {
  speed: 'fast',
  iterations: 20
});

// Longer matrix effect
const stopMatrix = animator.matrix('Follow the white rabbit...', {
  speed: 'fast',
  iterations: 50
});

// Stop manually
const stopMatrix = animator.matrix('CODE RAIN', {
  speed: 'fast',
  iterations: -1
});

setTimeout(() => stopMatrix(), 10000);
```

**How it works:** Random characters (in green) rapidly replace your text, creating a Matrix-like effect. When stopped, your original text is displayed.

**Practical example:**
```javascript
// Hacker-style loading
const stopMatrix = animator.matrix('ACCESSING DATABASE...', {
  speed: 'fast',
  iterations: 30
});

setTimeout(() => {
  stopMatrix();
  console.log('✓ Access granted'.color('green'));
}, 3000);
```

### 9. Glitch Animation

Creates a glitch/distortion effect:

```javascript
// Basic glitch
const stopGlitch = animator.glitch('Glitch Effect');

// Fast glitch
const stopGlitch = animator.glitch('ERROR', {
  speed: 'fast',
  iterations: 15
});

// Slow glitch
const stopGlitch = animator.glitch('System Unstable', {
  speed: 'slow',
  iterations: 10
});
```

**How it works:** Text randomly changes colors and positions, creating a glitchy, corrupted appearance. Colors cycle through: red, cyan, magenta, yellow, white.

**Practical example:**
```javascript
// Simulate system error
const stopGlitch = animator.glitch('⚠ SYSTEM MALFUNCTION ⚠', {
  speed: 'fast',
  iterations: 20
});

setTimeout(() => {
  stopGlitch();
  console.log('System recovered'.color('green'));
}, 2000);
```

### Stopping All Animations

Stop all running animations at once:

```javascript
// Start multiple animations
const stop1 = animator.rainbow('Text 1');
const stop2 = animator.pulse('Text 2');
const stop3 = animator.wave('Text 3');

// Stop all at once
animator.stopAll();
```

### Animation Combinations

Combine animations with styling:

```javascript
// Typing with gradient
await animator.typing('Gradient Typing', (text) => text.gradient('blue'), {
  speed: 'normal'
});

// Blinking with background
const stop = animator.blink('URGENT', (text) => text.color('yellow').bg('red'), {
  speed: 'fast',
  iterations: 10
});

// Pulse with border
const stop = animator.pulse('Loading', 'cyan', 'blue', {
  speed: 'normal'
});
```

### Practical Animation Examples

#### Loading Sequence
```javascript
async function loadingSequence() {
  // Typing intro
  await animator.typing('Initializing system...', (text) => text.color('cyan'), {
    speed: 'fast'
  });
  
  // Spinner during operation
  const stopSpinner = animator.spinner('Loading modules', {
    speed: 'normal'
  });
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  stopSpinner();
  
  // Success message
  console.log('✓ System ready!'.color('green').createSolidBorder('green'));
}

loadingSequence();
```

#### Progress Indicator
```javascript
async function downloadFiles() {
  console.log('Starting download...'.color('cyan'));
  
  const updateProgress = await animator.progressBar(100, {
    width: 50,
    char: '█'
  });
  
  for (let i = 0; i <= 100; i += 5) {
    updateProgress(i);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('Download complete!'.color('green').createRoundedBorder('green'));
}

downloadFiles();
```

#### Alert System
```javascript
function showAlert(message, type = 'warning') {
  const colors = {
    error: { text: 'white', bg: 'red' },
    warning: { text: 'black', bg: 'yellow' },
    info: { text: 'white', bg: 'blue' }
  };
  
  const { text, bg } = colors[type];
  
  const stop = animator.blink(
    message,
    (text) => text.color(text).bg(bg),
    { speed: 'fast', iterations: 6 }
  );
  
  return stop;
}

// Usage
showAlert('⚠ Low disk space!', 'warning');
showAlert('❌ Connection lost', 'error');
showAlert('ℹ New update available', 'info');
```

---

## 🔧 Advanced Usage

### Method Chaining

Chain multiple styling methods together:

```javascript
console.log(
  'Advanced Styling'
    .color('yellow')
    .bg('darkBlue')
    .createRoundedBorder('cyan')
);
```

### Combining Features

Mix and match all features:

```javascript
import { StringStyler } from 'stylesh';

// Complex styling
const styled = new StringStyler('Production Server')
  .color('white')
  .bg('darkGreen')
  .border('double', 'green', 'all', 'center');

console.log(styled);
```

### Dynamic Content

Create dynamic styled content:

```javascript
function createStatusBox(status, message) {
  const themes = {
    online: 'success',
    offline: 'error',
    maintenance: 'warning'
  };
  
  return `[${status.toUpperCase()}] ${message}`.themeBox(themes[status]);
}

console.log(createStatusBox('online', 'Server is running'));
console.log(createStatusBox('offline', 'Server is down'));
console.log(createStatusBox('maintenance', 'Scheduled maintenance'));
```

**Output:**
```
╭──────────────────────────────╮
│ [ONLINE] Server is running   │  (success theme)
╰──────────────────────────────╯

┌──────────────────────────────┐
│ [OFFLINE] Server is down     │  (error theme)
└──────────────────────────────┘

╔════════════════════════════════╗
║ [MAINTENANCE] Scheduled...     ║  (warning theme)
╚════════════════════════════════╝
```

### Building a Dashboard

```javascript
function createDashboard() {
  console.log('='.repeat(50).color('cyan'));
  console.log('SYSTEM DASHBOARD'.color('white').bg('blue') + ' '.repeat(34));
  console.log('='.repeat(50).color('cyan'));
  console.log();
  
  // Status indicators
  console.log('Status:'.color('cyan').toString().padEnd(20) + 'ONLINE'.color('green'));
  console.log('CPU Usage:'.color('cyan').toString().padEnd(20) + '45%'.color('yellow'));
  console.log('Memory:'.color('cyan').toString().padEnd(20) + '2.1GB / 8GB'.color('green'));
  console.log('Uptime:'.color('cyan').toString().padEnd(20) + '7 days'.color('white'));
  console.log();
  
  // Alert box
  console.log('Recent Alerts'.themeBox('warning'));
  console.log();
  
  // Footer
  console.log('='.repeat(50).color('cyan'));
}

createDashboard();
```

### Custom Logging Functions

```javascript
function log(message, level = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}]`.color('gray');
  
  switch(level) {
    case 'error':
      console.log(prefix + ' ' + message.themeBox('error'));
      break;
    case 'warning':
      console.log(prefix + ' ' + message.themeBox('warning'));
      break;
    case 'success':
      console.log(prefix + ' ' + message.themeBox('success'));
      break;
    default:
      console.log(prefix + ' ' + message.themeBox('info'));
  }
}

// Usage
log('Application started', 'success');
log('Configuration loaded', 'info');
log('Deprecated API used', 'warning');
log('Failed to connect to database', 'error');
```

### Progress Tracking

```javascript
async function processItems(items) {
  console.log(`Processing ${items.length} items...`.color('cyan'));
  console.log();
  
  const updateProgress = await animator.progressBar(items.length, {
    width: 40,
    char: '█'
  });
  
  for (let i = 0; i < items.length; i++) {
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 100));
    updateProgress(i + 1);
  }
  
  console.log();
  console.log('Processing complete!'.themeBox('success'));
}

processItems(['item1', 'item2', 'item3', 'item4', 'item5']);
```

### Interactive Menu

```javascript
function displayMenu(options) {
  console.log('MAIN MENU'.color('white').bg('blue').createDoubleBorder('cyan'));
  console.log();
  
  options.forEach((option, index) => {
    const number = `${index + 1}.`.color('yellow');
    const text = option.color('white');
    console.log(`  ${number} ${text}`);
  });
  
  console.log();
  console.log('Enter your choice:'.color('cyan'));
}

displayMenu([
  'View Dashboard',
  'Manage Users',
  'System Settings',
  'Exit'
]);
```

### Table Display

```javascript
function displayTable(headers, rows) {
  // Header
  const headerText = headers.map(h => h.padEnd(15)).join(' | ');
  console.log(headerText.color('white').bg('darkBlue'));
  console.log('─'.repeat(headerText.length).color('blue'));
  
  // Rows
  rows.forEach((row, index) => {
    const rowText = row.map(cell => String(cell).padEnd(15)).join(' | ');
    const color = index % 2 === 0 ? 'white' : 'lightGray';
    console.log(rowText.color(color));
  });
}

displayTable(
  ['Name', 'Status', 'CPU'],
  [
    ['Server-1', 'Online', '23%'],
    ['Server-2', 'Online', '45%'],
    ['Server-3', 'Offline', '0%']
  ]
);
```

### Error Handling with Style

```javascript
function handleError(error) {
  console.log();
  console.log('ERROR DETAILS'.themeBox('danger'));
  console.log();
  console.log('Message:'.color('red').toString().padEnd(15) + error.message.color('white'));
  console.log('Type:'.color('red').toString().padEnd(15) + error.name.color('white'));
  console.log('Stack:'.color('red'));
  console.log(error.stack.color('gray'));
  console.log();
}

try {
  // Some code that might throw
  throw new Error('Connection timeout');
} catch (error) {
  handleError(error);
}
```

### Notification System

```javascript
class Notifier {
  static success(message) {
    console.log('✓'.color('green') + ' ' + message.color('green'));
  }
  
  static error(message) {
    console.log('✗'.color('red') + ' ' + message.color('red'));
  }
  
  static warning(message) {
    console.log('⚠'.color('yellow') + ' ' + message.color('yellow'));
  }
  
  static info(message) {
    console.log('ℹ'.color('cyan') + ' ' + message.color('cyan'));
  }
  
  static box(message, type = 'info') {
    console.log(message.themeBox(type));
  }
}

// Usage
Notifier.success('File saved successfully');
Notifier.error('Failed to load configuration');
Notifier.warning('API rate limit approaching');
Notifier.info('New version available');
Notifier.box('Critical: Database connection lost', 'danger');
```

### Loading States

```javascript
async function withLoading(message, asyncFn) {
  const stopSpinner = animator.spinner(message);
  
  try {
    const result = await asyncFn();
    stopSpinner();
    console.log('✓ Done!'.color('green'));
    return result;
  } catch (error) {
    stopSpinner();
    console.log('✗ Failed!'.color('red'));
    throw error;
  }
}

// Usage
await withLoading('Connecting to API...', async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { success: true };
});
```

---

## 📋 Complete API Reference

### StringStyler Class

```typescript
class StringStyler {
  constructor(text: string)
  
  // Styling methods (return this for chaining)
  color(colorName: string): this
  bg(colorName: string): this
  gradient(colorGroup: string | string[]): this
  bgGradient(colorGroup: string | string[]): this
  theme(themeName: string): this
  
  // Output methods (return string)
  themeBox(themeName: string): string
  border(
    style?: BorderStyle,      // 'solid' | 'rounded' | 'double' | 'dashed' | 'dotted'
    colorName?: string,        // Any color name or 'reset'
    direction?: BorderDirection, // 'all' | 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical'
    alignment?: Alignment      // 'left' | 'center' | 'right'
  ): string
  toString(): string
}
```

### String Extensions

```typescript
// All methods available on string literals and variables
'text'.color(colorName: string): StringStyler
'text'.bg(colorName: string): StringStyler
'text'.gradient(colorGroup: string | string[]): StringStyler
'text'.bgGradient(colorGroup: string | string[]): StringStyler
'text'.theme(themeName: string): StringStyler
'text'.themeBox(themeName: string): string

// Border convenience methods
'text'.createSolidBorder(colorName?: string, alignment?: Alignment): string
'text'.createRoundedBorder(colorName?: string, alignment?: Alignment): string
'text'.createDoubleBorder(colorName?: string, alignment?: Alignment): string
'text'.createDashedBorder(colorName?: string, alignment?: Alignment): string
'text'.createDottedBorder(colorName?: string, alignment?: Alignment): string
'text'.createCustomBorder(
  style?: BorderStyle,
  colorName?: string,
  direction?: BorderDirection,
  alignment?: Alignment
): string
```

### ThemeManager

```typescript
class ThemeManager {
  // Register a new theme
  static register(name: string, theme: Theme): void
  
  // Get a theme by name
  static get(name: string): Theme | undefined
  
  // Check if theme exists
  static has(name: string): boolean
  
  // Remove a theme
  static remove(name: string): boolean
  
  // List all theme names
  static listThemes(): string[]
  
  // Clear custom themes (keeps built-in)
  static clearCustomThemes(): void
}

interface Theme {
  textColor?: string;
  backgroundColor?: string;
  borderStyle?: BorderStyle;
  borderColor?: string;
  borderDirection?: BorderDirection;
  alignment?: Alignment;
  gradient?: string | string[];
  bgGradient?: string | string[];
}
```

### Animator

```typescript
class Animator {
  // Typing animation - reveals text character by character
  typing(
    text: string,
    styler?: (text: string) => StringStyler,
    options?: AnimationOptions
  ): Promise<void>
  
  // Blinking animation - toggles visibility
  blink(
    text: string,
    styler?: (text: string) => StringStyler,
    options?: AnimationOptions
  ): () => void
  
  // Rainbow animation - cycles through colors
  rainbow(
    text: string,
    options?: AnimationOptions
  ): () => void
  
  // Pulse animation - fades between two colors
  pulse(
    text: string,
    color1?: string,
    color2?: string,
    options?: AnimationOptions
  ): () => void
  
  // Loading spinner
  spinner(
    text: string,
    options?: AnimationOptions
  ): () => void
  
  // Progress bar
  progressBar(
    total: number,
    options?: AnimationOptions & { width?: number; char?: string }
  ): Promise<(current: number) => void>
  
  // Wave animation
  wave(
    text: string,
    options?: AnimationOptions
  ): () => void
  
  // Matrix effect
  matrix(
    text: string,
    options?: AnimationOptions
  ): () => void
  
  // Glitch effect
  glitch(
    text: string,
    options?: AnimationOptions
  ): () => void
  
  // Stop all animations
  stopAll(): void
}

interface AnimationOptions {
  speed?: 'slow' | 'normal' | 'fast';
  iterations?: number; // -1 for infinite
  clearOnComplete?: boolean;
}
```

---

## 🎨 Color Reference

### All Available Colors (140+)

**Reds:** darkRed, red, firebrick, crimson, indianRed, lightCoral, salmon, darkSalmon, lightSalmon

**Oranges:** orangeRed, tomato, darkOrange, coral, orange

**Yellows:** darkKhaki, gold, khaki, yellow, paleGoldenrod, moccasin, papayaWhip, lightGoldenrodYellow, lemonChiffon, lightYellow

**Greens:** darkGreen, green, darkOliveGreen, forestGreen, seaGreen, olive, oliveDrab, mediumSeaGreen, limeGreen, lime, springGreen, mediumSpringGreen, darkSeaGreen, mediumAquamarine, yellowGreen, lawnGreen, chartreuse, lightGreen, greenYellow, paleGreen

**Blues:** midnightBlue, navy, darkBlue, mediumBlue, blue, royalBlue, steelBlue, dodgerBlue, deepSkyBlue, cornflowerBlue, skyBlue, lightSkyBlue, lightSteelBlue, lightBlue, powderBlue

**Purples:** indigo, purple, darkMagenta, darkViolet, darkSlateBlue, blueViolet, darkOrchid, fuchsia, magenta, slateBlue, mediumSlateBlue, mediumOrchid, mediumPurple, orchid, violet, plum, thistle, lavender

**Pinks:** mediumVioletRed, deepPink, paleVioletRed, hotPink, lightPink, pink

**Cyans:** teal, darkCyan, lightSeaGreen, cadetBlue, darkTurquoise, mediumTurquoise, turquoise, aqua, cyan, aquamarine, paleTurquoise, lightCyan

**Browns:** maroon, brown, saddleBrown, sienna, chocolate, darkGoldenrod, peru, rosyBrown, goldenrod, sandyBrown, tan, burlywood, wheat, navajoWhite, bisque, blanchedAlmond, cornsilk

**Grays/Neutrals:** black, darkSlateGray, dimGray, slateGray, gray, lightSlateGray, darkGray, silver, lightGray, gainsboro, mistyRose, antiqueWhite, linen, beige, whiteSmoke, lavenderBlush, oldLace, aliceBlue, seashell, ghostWhite, honeydew, floralWhite, azure, mintCream, snow, ivory, white

---

## 💡 Tips and Best Practices

### Performance Tips

1. **Reuse StringStyler instances** when applying the same style multiple times:
```javascript
const errorStyle = new StringStyler('');
console.log(errorStyle.text = 'Error 1'; errorStyle.theme('error'));
console.log(errorStyle.text = 'Error 2'; errorStyle.theme('error'));
```

2. **Use string extensions** for one-off styling:
```javascript
console.log('Quick style'.color('red'));
```

3. **Stop animations** when done to free resources:
```javascript
const stop = animator.rainbow('Text');
// ... later
stop();
```

### Styling Tips

1. **Contrast is key** - ensure text is readable:
```javascript
// Good
console.log('Readable'.color('white').bg('darkBlue'));

// Bad (hard to read)
console.log('Hard to read'.color('yellow').bg('lightYellow'));
```

2. **Use themes** for consistency:
```javascript
// Consistent error handling
console.log('Error 1'.themeBox('error'));
console.log('Error 2'.themeBox('error'));
```

3. **Gradients work best** with longer text:
```javascript
// Good
console.log('This is a longer piece of text for gradient'.gradient('blue'));

// Less effective
console.log('Hi'.gradient('blue'));
```

### Debugging Styled Output

If colors don't appear:
1. Check terminal supports ANSI colors
2. Test with simple example: `console.log('Test'.color('red'))`
3. Some CI/CD environments disable colors

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

```bash
git clone https://github.com/omar-alghaish/stylesh.git
cd stylesh
npm install
npm run build
npm test
```


## 🙏 Acknowledgments

Built with love for the Node.js community. Inspired by chalk, colors, and other terminal styling libraries.

---

## 📧 Support

- **Issues**: [GitHub Issues](https://github.com/omar-alghaish/stylesh/issues)
- **Discussions**: [GitHub Discussions](https://github.com/omar-alghaish/stylesh/discussions)
- **Documentation**: [Full Documentation](https://github.com/omar-alghaish/stylesh/wiki)

---

Made with ❤️ by omar alghaish