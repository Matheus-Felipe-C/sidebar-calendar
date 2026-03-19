import template from "../templates/event-list.html";
import { render } from "../utils/render.js";
import { EventItem } from "./EventItem.js";

export function EventList(events = []) {
  const items = events.map(EventItem).join("");
  return render(template, { items });
}