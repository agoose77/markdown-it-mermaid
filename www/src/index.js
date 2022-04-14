import MarkdownIt from "markdown-it";
import plugin from "@agoose77/markdown-it-mermaid";
import 'bootstrap/js/dist/alert';
import 'bootstrap/dist/css/bootstrap.min.css';

var md = new MarkdownIt().use(plugin);
var source = document.getElementById("markdown-source");
var dest = document.getElementById("markdown-dest");

function render() {
    const rendered = md.render(source.value);
    dest.innerHTML = rendered;
}

source.addEventListener("input", render, true);

render();
