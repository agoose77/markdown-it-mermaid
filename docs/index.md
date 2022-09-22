# markdown-it-mermaid

[![npm-badge]][npm] [![docs-badge]][docs]

[npm-badge]:
  https://img.shields.io/npm/v/@agoose77/markdown-it-mermaid?style=for-the-badge
[npm]: https://www.npmjs.com/package/@agoose77/markdown-it-mermaid
[docs-badge]:
  https://readthedocs.org/projects/markdown-it-mermaid/badge/?style=for-the-badge
[docs]: https://markdown-it-mermaid.rtfd.io

[mermaidjs](https://github.com/knsv/mermaid) renderer for
[markdown-it](https://github.com/markdown-it/markdown-it).

## Demo

<label for="mermaid-theme">
  <span>Mermaid Theme</span>
  <select id="mermaid-theme">
    <option>default</option>
    <option>forest</option>
    <option>dark</option>
    <option>neutral</option>
    <option>null</option>
  </select>
</label>

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

## Installation

### node.js

```bash
npm install --save @agoose77/markdown-it-mermaid
```

or

```
yarn add @agoose77/markdown-it-mermaid
```

## Usage Examples

### Simple

````js
import MarkdownIt from "markdown-it";
import mermaidPlugin from "@agoose77/markdown-it-mermaid";
const md = new MarkdownIt().use(mermaidPlugin);
const result = md.render("```mermaid\ngraph TD;\n\tA-->B;```");
````

### Options

When calling `MarkdownIt.use`, an optional second parameter is interpreted as the input
to [`Mermaid.initialize`][mermaid-configuration]:

[mermaid-configuration]: https://mermaid-js.github.io/mermaid/#/Setup?id=configuration

```js
const md = new MarkdownIt().use(mermaidPlugin, { theme: "forest" });
```

```{include} ../CHANGELOG.md

```

```{include} ../CONTRIBUTING.md

```

## License

```{include} ../LICENSE

```
