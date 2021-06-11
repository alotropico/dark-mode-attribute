## Dark Mode Attribute

Very simple and lightweight utility to manage **dark and light schemes from vanilla JavaScript**.

Call it with your button as a parameter and you're all set: `dark-mode-attribute(toggleButton)`

When no default value is provided, the module checks if the user saved a preference from a previous session.

If they haven't, it looks for the user's system preference.

### Installation

```shell
npm i --save-dev @alotropico/dark-mode-attribute
```

### Usage

In your **JavaScript**, call dark-mode-attribute with your toggle-dark-mode element as a parameter:

```javascript
import * as dma from '@alotropico/dark-mode-attribute'

const toggleButton = document.querySelector('.my-button')

dma(toggleButton)
```

Your **CSS**:
```css
body {
    background-color: white;
    color: black;
}
body.dark {
    background-color: black;
    color: white;
}
.my-button:after {
    content: '🌞'
}
body.dark .my-button:after {
    content: '🌚'
}
```

### Options

By default, it adds the *dark* class to the body element, but you can customize it.


Use a **custom class**:

```javascript
dma(toggleButton, 'dark-mode')
```


Instead of a class, let it be a **custom attribute**:

```javascript
dma(toggleButton, 'dark-mode', 'data-scheme')
```
```css
body[data-scheme="dark-mode"] {
    background-color: black;
}
```


Instead of the body, apply the class/attribute to a **custom element**:

```javascript
const container = document.body.querySelector('.container')

dma(toggleButton, 'dark-mode', 'data-scheme', container)
```


Pass a **default value**, which overrides the built-in detection and storage methods:
```javascript
dma(toggleButton, 'dark', 'class', container, true)
```