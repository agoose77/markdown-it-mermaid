
import CodeMirror from "codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/zenburn.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/xml-fold";
import "codemirror/addon/fold/indent-fold";
import "codemirror/addon/fold/markdown-fold";
import "codemirror/addon/fold/comment-fold";

import MarkdownIt from "markdown-it";
import plugin from "@agoose77/markdown-it-mermaid";

var md = new MarkdownIt().use(plugin);
var source = CodeMirror.fromTextArea(
  document.getElementById("markdown-source"),
  {
    mode: "markdown",
    highlightFormatting: true,
    theme: "zenburn",
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: {
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
    },
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  }
);
var dest = document.getElementById("markdown-dest");

var theme = document.getElementById("mermaid-theme");

function updateTheme(event) {
  console.log(event);
  md = new MarkdownIt().use(plugin, {theme: event.target.value});
  render();
}

function render() {
  const rendered = md.render(source.getValue());
  dest.innerHTML = rendered;
}

// event listeners
theme.addEventListener("input", updateTheme);
source.on("change", render);

render();
