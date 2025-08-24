# osmos-mascot

[![npm version](https://img.shields.io/npm/v/osmos-mascot.svg)](https://www.npmjs.com/package/osmos-mascot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A charming, animated mascot component for web applications, inspired by Osmos.

## Installation

```bash
npm install osmos-mascot
```

## Usage

First, add a canvas element to your HTML file:
```html
<canvas id="osmos-mascot-canvas" style="width: 300px; height: 300px;"></canvas>
```

Then, you can use the mascot in your JavaScript file (after bundling with a tool like Webpack or Rollup):
```javascript
import OsmosMascot from 'osmos-mascot';

// Create a new mascot instance
const mascot = new OsmosMascot({
  canvasId: 'osmos-mascot-canvas' // or pass the canvas element directly
});

// Start the animation
mascot.start();

// Interact with the mascot
setTimeout(() => {
  mascot.setState('connecting');
  mascot.runAnimation('sparkle');
}, 2000);

setTimeout(() => {
  mascot.setState('idle');
}, 4000);
```

For use directly in a browser with a `<script>` tag, you can use the UMD bundle:
```html
<script src="https://unpkg.com/osmos-mascot@latest/dist/osmos-mascot.umd.js"></script>
<script>
  const mascot = new window.OsmosMascot({
    canvasId: 'osmos-mascot-canvas'
  });
  mascot.start();
</script>
```

## API

### `new OsmosMascot(config)`

Creates a new mascot instance.

**Configuration Options:**

| Option              | Type      | Default          | Description                                                                                                                              |
| ------------------- | --------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `canvasId`          | `String`  | **Required**     | The ID of the `<canvas>` element to use.                                                                                                 |
| `colors`            | `Object`  | `null`           | An object with color values to override the default theme (which is based on CSS custom properties).                                     |
| `enableTwitching`   | `Boolean` | `true`           | Enables or disables the subtle twitching animation in the idle state.                                                                    |
| `idleBreathCycle`   | `Number`  | `4000`           | The duration of the idle "breathing" animation cycle in milliseconds.                                                                    |
| `animationDuration` | `Number`  | `500`            | The default duration for triggered animations in milliseconds.                                                                           |

### Methods

*   `start()`: Starts the animation loop and makes the mascot visible.
*   `stop()`: Stops the animation loop and hides the canvas.
*   `destroy()`: Stops the animation, cleans up resources, and removes event listeners.
*   `setState(newState)`: Sets the internal state of the mascot. Can be `'idle'`, `'connecting'`, or `'emulatingSpeech'`. This affects the mascot's appearance and behavior.
*   `runAnimation(type, params)`: Triggers a registered animation. Default animations are `'thinking'`, `'sparkle'`, and `'wobble'`.
*   `registerAnimation(name, animationFunction)`: Allows you to register a new custom animation.

### Events

You can listen for events using the `on` and `off` methods.

```javascript
mascot.on('state:change', ({ oldState, newState }) => {
  console.log(`Mascot state changed from ${oldState} to ${newState}`);
});
```

*   `init`: Fired when the mascot is initialized.
*   `start`: Fired when the animation starts.
*   `stop`: Fired when the animation stops.
*   `destroy`: Fired when the mascot is destroyed.
*   `state:change`: Fired when the mascot's state changes.
*   `animation:start`: Fired when a registered animation starts.
*   `animation:end`: Fired when a registered animation completes.
