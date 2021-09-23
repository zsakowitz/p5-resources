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
- [Changelog](#changelog)
  - [2.0.0](#200)
  - [2.1.0](#210)
  - [2.2.0](#220)

# p5 Resources

This extension adds some snippets and commands meant for use with p5zs projects made with the core [p5zs project on Glitch](https://glitch.com/edit/#!/p5zs). It also adds snippets and commands meant for use the p5ts projects made with the core [p5ts project on Glitch](https://glitch.com/edit/#!/p5ts).

# Commands

This extension adds a command to open the core Glitch project. It is named "P5: Open the p5zs starter Glitch project."

It also adds a command to remix the project, which is named "P5: Remix the p5zs starter Glitch project." Note that sometimes Glitch just opens it without remixing.

# Snippets

This extension also adds some snippets that can be used with p5zs. It adds a version for JavaScript and a version for TypeScript.

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

# Changelog

## 2.0.0

- Renamed some commands and updated others.

## 2.1.0

- Fixed bug where extension would not start when either command `p5.open-glitch` or command `p5.remix-glitch` was activated; it was using the old names `ccresources.open-glitch` and `ccresources.remix-glitch`.
- Renamed `p5.*` commands to `p5zs.*`.

## 2.2.0

- Fixed bug where `p5zs.remix-glitch` command would open the Glitch project in edit mode, not remix mode.
- Added commands for p5ts project on Glitch.