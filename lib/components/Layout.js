import template from "../templates/layout.html";
import { render } from "../utils/render.js";

export function Layout(content) {
  return render(template, { content });
}