# markdown-it-mermaid
[![npm-badge][]][npm]

[npm-badge]: https://img.shields.io/npm/v/@agoose77/markdown-it-mermaid?style=for-the-badge
[npm]: https://www.npmjs.com/package/@agoose77/markdown-it-mermaid

[mermaidjs](https://github.com/knsv/mermaid) renderer for [markdown-it](https://github.com/markdown-it/markdown-it).

## Demo

<div id="markdown-demo">
  <textarea id="markdown-source">``` mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```</textarea>

  <div id="markdown-dest"></div>

</div>

<script src="_static/main.js"></script>
