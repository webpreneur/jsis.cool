import { parseHTML } from "https://esm.sh/linkedom@0.14.21";

const { document, customElements, HTMLElement } = parseHTML(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Hello from Deno</title>
    </head>
    <body>
        <prism-code>slott</prism-code>
    </body>
  </html>`);

customElements.define(
  "prism-code",
  class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <pre><code><slot></slot></code></pre>
        `;
    }
    connectedCallback() {
      console.log("it works 🥳");
    }
  },
);

const pC = document.createElement("prism-code");
// pC.innerHTML = '//this is some code example';

document.body.appendChild(pC);

const docString = document.toString(); // the string of the document, ready to send to a client

console.log(docString);