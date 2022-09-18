import MarkdownIt from "markdown-it";
import Mermaid from "mermaid";

// Define interface to await readiness of import
export default function mermaid(md: MarkdownIt, options: any) {
  // Setup Mermaid
  Mermaid.initialize({
    securityLevel: "loose",
    ...options,
  });

  function getLangName(info: string): string {
    return info.split(/\s+/g)[0];
  }

  // Store reference to original renderer.
  let defaultFenceRenderer = md.renderer.rules.fence;

  // Render custom code types as SVGs, letting the fence parser do all the heavy lifting.
  function customFenceRenderer(
    tokens: any[],
    idx: number,
    options: any,
    env: any,
    slf: any
  ) {
    let token = tokens[idx];
    let info = token.info.trim();
    let langName = info ? getLangName(info) : "";

    if (["mermaid", "{mermaid}"].indexOf(langName) === -1) {
      if (defaultFenceRenderer !== undefined) {
        return defaultFenceRenderer(tokens, idx, options, env, slf);
      }
      // Missing fence renderer!
      return "";
    }

    let imageHTML: string = "";
    let imageAttrs: string[][] = [];

    // Create element to render into
    const element = document.createElement("div");
    document.body.appendChild(element);

    // Render with Mermaid
    try {
      const container_id = "mermaid-container";
      Mermaid.mermaidAPI.render(
        container_id,
        token.content,
        (html: string) => {
          // We need to forcibly extract the max-width/height attributes to set on img tag
          let svg = document.getElementById(container_id);
          if (svg !== null) {
            imageAttrs.push([
              "style",
              `max-width:${svg.style.maxWidth};max-height:${svg.style.maxHeight}`,
            ]);
          }
          // Store HTML
          imageHTML = html;
        },
        element
      );
    } catch (e) {
      return `<div class="alert alert-danger">${e}</div>`;
    } finally {
      element.remove();
    }

    // Store encoded image data
    imageAttrs.push([
      "src",
      `data:image/svg+xml,${encodeURIComponent(imageHTML)}`,
    ]);
    return `<img ${slf.renderAttrs({ attrs: imageAttrs })}>`;
  }

  md.renderer.rules.fence = customFenceRenderer;
}
