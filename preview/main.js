import { renderEmbedContent } from "../lib/renderEmbedContent.js";

/** Shape this like real `args` from Amplenote as you use more fields. */

const mockEvents = [
  {
    id: "ev-1",
    title: "Morning standup",
    start: "2025-03-24T09:00:00",
    end: "2025-03-24T09:25:00",
  },
  {
    id: "ev-2",
    title: "Design review",
    start: "2025-03-24T11:00:00",
    end: "2025-03-24T12:30:00",
  },
  {
    id: "ev-3",
    title: "Overlapping call (tests same-day overlap)",
    start: "2025-03-24T11:30:00",
    end: "2025-03-24T12:00:00",
  },
  {
    id: "ev-4",
    title: "Lunch",
    start: "2025-03-24T12:30:00",
    end: "2025-03-24T13:30:00",
  },
  {
    id: "ev-5",
    title: "Focus block",
    start: "2025-03-24T14:00:00",
    end: "2025-03-24T17:00:00",
  },
  {
    id: "ev-6",
    title: "All-day: team offsite",
    start: "2025-03-25T00:00:00",
    end: "2025-03-25T23:59:59",
    allDay: true,
  },
  {
    id: "ev-7",
    title: "1:1 with Alex",
    start: "2025-03-25T10:00:00",
    end: "2025-03-25T10:45:00",
  },
  {
    id: "ev-8",
    title: "Dentist",
    start: "2025-03-26T08:15:00",
    end: "2025-03-26T09:00:00",
  },
  {
    id: "ev-9",
    title: "Multi-day conference (span)",
    start: "2025-03-27T09:00:00",
    end: "2025-03-28T18:00:00",
  },
  {
    id: "ev-10",
    title: "Late evening task",
    start: "2025-03-28T21:00:00",
    end: "2025-03-28T22:30:00",
  },
  {
    id: "ev-11",
    title: "Weekend personal",
    start: "2025-03-29T11:00:00",
    end: "2025-03-29T14:00:00",
  },
  {
    id: "ev-12",
    title: "Edge: midnight crossing",
    start: "2025-03-30T23:30:00",
    end: "2025-03-31T00:30:00",
  },
];

const mockEmbedArgs = {
  embedId: "sidebar-calendar-main",
  openedAt: new Date().toISOString(),
  events: mockEvents,
};

const view = 'hourly';

const root = document.getElementById("root-layout");
console.log(root);
root.innerHTML = renderEmbedContent(mockEmbedArgs, view);
