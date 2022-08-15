# markdown-it-mermaid
[![npm-badge][]][npm]

[npm-badge]: https://img.shields.io/npm/v/@agoose77/markdown-it-mermaid?style=for-the-badge
[npm]: https://www.npmjs.com/package/@agoose77/markdown-it-mermaid

[mermaidjs](https://github.com/knsv/mermaid) renderer for [markdown-it](https://github.com/markdown-it/markdown-it).

An example mermaid diagram:
~~~
``` mermaid 
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
~~~
produces 
``` mermaid 
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
