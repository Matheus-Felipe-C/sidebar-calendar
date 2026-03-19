import template from "../templates/event-item.html";
import { render } from "../utils/render.js";
import { escapeHtml } from "../utils/escape.js";

export function EventItem(event) {
  return render(template, {
    title: escapeHtml(event.title),
    date: escapeHtml(event.date),
  });
}