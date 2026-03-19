import template from "../templates/header.html";
import { render } from "../utils/render.js";
import { escapeHtml } from "../utils/escape.js";

export function Header({ title }) {
  return render(template, {
    title: escapeHtml(title),
  });
}