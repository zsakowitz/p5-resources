- [p5 Resources](#p5-resources)
- [Commands](#commands)
- [Snippets](#snippets)
  - [setup (Universal)](#setup-universal)
  - [draw (Universal)](#draw-universal)
  - [preload (Universal)](#preload-universal)
  - [mouseclicked (Universal)](#mouseclicked-universal)
  - [doubleclicked (Universal)](#doubleclicked-universal)
  - [mousemoved (Universal)](#mousemoved-universal)
  - [mousedragged (Universal)](#mousedragged-universal)
  - [mousepressed (Universal)](#mousepressed-universal)
  - [mousereleased (Universal)](#mousereleased-universal)
  - [comment (Universal)](#comment-universal)

# p5 Resources

This extension adds some snippets and commands meant for use with p5zs projects made with the core [p5zs project on Glitch](https://glitch.com/edit/#!/p5zs). It also adds snippets and commands meant for use the p5ts projects made with the core [p5ts project on Glitch](https://glitch.com/edit/#!/p5ts).

# Commands

This extension adds a command (p5js.open-glitch) that opens either `p5es`, `p5ts`, `p5es-empty`, or `p5ts-empty` on Glitch, depending on a user choice.

It also adds a command (p5js.remix-glitch) that remixes one of the above projects, again based on user choice.

# Snippets

This extension also adds some snippets that can be used with p5.js projects created from `p5es`, `p5ts`, `p5es-empty`, or `p5ts-empty` on Glitch.

## setup (Universal)

JavaScript + TypeScript

```javascript
/** This function sets up our sketch. */
export function setup() {
  createCanvas(500, 500);
  frameRate(60);
}
```

## draw (Universal)

JavaScript + TypeScript

```javascript
/** This function redraws the sketch multiple times a second. */
export function draw() {

}
```

## preload (Universal)

JavaScript + TypeScript

```javascript
/** This function loads resources that will be used later. */
export function preload() {
  
}
```

## mouseclicked (Universal)

JavaScript

```javascript
/**
 * This function is called when the mouse is clicked.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
export function mouseClicked(event) {
  
}
```

TypeScript

```typescript
/**
 * This function is called when the mouse is clicked.
 * @param event - The `MouseEvent` that is passed as an argument.
 */
export function mouseClicked(event: MouseEvent) {
  
}
```

## doubleclicked (Universal)

JavaScript

```javascript
/**
 * This function is called when the mouse is double-clicked.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
export function doubleClicked(event) {
  
}
```

TypeScript

```typescript
/**
 * This function is called when the mouse is double-clicked.
 * @param event - The `MouseEvent` that is passed as an argument.
 */
export function doubleClicked(event: MouseEvent) {
  
}
```

## mousemoved (Universal)

JavaScript

```javascript
/**
 * This function is called when the mouse is moved.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
export function mouseMoved(event) {
  
}
```

TypeScript

```typescript
/**
 * This function is called when the mouse is moved.
 * @param event - The `MouseEvent` that is passed as an argument.
 */
export function mouseMoved(event: MouseEvent) {
  
}
```

## mousedragged (Universal)

JavaScript

```javascript
/**
 * This function is called when the mouse is dragged.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
export function mouseDragged(event) {
  
}
```

TypeScript

```typescript
/**
 * This function is called when the mouse is dragged.
 * @param event - The `MouseEvent` that is passed as an argument.
 */
export function mouseDragged(event: MouseEvent) {
  
}
```

## mousepressed (Universal)

JavaScript

```javascript
/**
 * This function is called when the mouse is pressed.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
export function mousePressed(event) {
  
}
```

TypeScript

```typescript
/**
 * This function is called when the mouse is pressed.
 * @param event - The `MouseEvent` that is passed as an argument.
 */
export function mousePressed(event: MouseEvent) {
  
}
```

## mousereleased (Universal)

JavaScript

```javascript
/**
 * This function is called when the mouse is released.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
export function mouseReleased(event) {
  
}
```

TypeScript

```typescript
/**
 * This function is called when the mouse is released.
 * @param event - The `MouseEvent` that is passed as an argument.
 */
export function mouseReleased(event: MouseEvent) {
  
}
```

## comment (Universal)

JavaScript + TypeScript

```javascript
// comment goes here...
```