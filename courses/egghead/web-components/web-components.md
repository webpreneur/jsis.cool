1. [Introduction to Applying Web Components](https://egghead.io/courses/web-components-f902)


#### External Styling of Shadow DOM

1. Explicit API: Element (Class) Method [imperative]
2. observedAttributes - attributeChangedCallback [declarative]
3. CSS Variables

##### Element Method

[CodePen - Web Components - changeStyles()](https://codepen.io/webpreneur/pen/GRBYpQP)

```js
window.customElements.define(
  "custom-element",
  class extends HTMLElement {
    ...
    /* This is available publicly when selecting the custom element via javascript. */
    changeStyles(selector, styles) {
      const el = this.shadowRoot.querySelector(selector);
      for (const [property, style] of Object.entries(styles)) {
        el.style[property] = style;
      }
    }
  }
);
```

[f](https://egghead.io/lessons/html-5-allow-external-styling-of-a-web-component-s-shadow-dom)

#### Component Output via Custom Events

```js
class MyComp extends HTMLElement {
    emitExternalEvent(eventName, payload) {
        this.dispatchEvent(
            new CustomEvent(eventName, { detail: payload })
        );
    }
}
```