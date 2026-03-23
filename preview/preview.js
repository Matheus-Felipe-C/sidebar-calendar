// lib/components/calendarView.js
function AgendaView(events) {
  return `
        <div>
            <h1>Lista de eventos></h1>
            <ul>
                <li>evento em agenda</li>
            </ul>
        </div>
    `;
}

// lib/components/renderEvents.js
function renderEvents(events = []) {
  const HOUR_HEIGHT = 60;
  return events.map((event) => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    const startMinutes = start.getHours() * 60 + start.getMinutes();
    const endMinutes = end.getHours() * 60 + end.getMinutes();
    const top = startMinutes / 60 * HOUR_HEIGHT;
    const height = (endMinutes - startMinutes) / 60 * HOUR_HEIGHT;
    return `
            <div 
                class="event"
                style="
                    top: ${top}px;
                    height: ${height}px;
                "
            >
                <strong>${event.title}</strong><br/>
                ${start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
        `;
  }).join("");
}

// lib/components/hourlyView.js
function HourlyView(events = []) {
  return `
        <div class="calendar-container">
            <div class="hour-grid">
                ${renderHourLines()}
            </div>

            <div class="events-layer">
                ${renderEvents(events)}
            </div>
        </div>
    `;
}
function renderHourLines() {
  return Array.from({ length: 24 }, (_, hour) => {
    const label = String(hour).padStart(2, "0") + ":00";
    return `
            <div class="hour-row">
                <div class="hour-label">${label}</div>
                <div class="hour-line"></div>
            </div>
        `;
  }).join("");
}

// lib/components/layout.js
function Layout(view2 = "hourly", events) {
  return `
        <div class="root-layout">
            <h1 class="heading">Sidebar calendar</h1>
            ${setView(view2, events)}
        </div>
    `;
}
function setView(view2, events) {
  if (view2 === "hourly") {
    return HourlyView(events);
  } else if (view2 === "agenda") {
    return AgendaView(events);
  }
}

// lib/styles/main.css
var main_default = ".root-layout {\n    font-family: system-ui, sans-serif;\n    padding: 12px;\n    background: #fff;\n}\n\n.heading {\n    text-decoration: underline;\n    color: #fff;\n}\n\n.calendar-container {\n    position: relative;\n    width: 100%;\n    height: 1440px; /* 24h * 60px */\n}\n\n.hour-grid {\n    position: absolute;\n    width: 100%;\n}\n\n.hour-row {\n    display: grid;\n    grid-template-columns: 60px 1fr;\n    height: 60px;\n    border-bottom: 1px solid #eee;\n}\n\n.hour-label {\n    font-size: 12px;\n    color: #666;\n    padding: 4px;\n}\n\n.hour-line {\n    border-left: 1px solid #ddd;\n}\n\n.events-layer {\n    position: absolute;\n    top: 0;\n    left: 60px;\n    right: 0;\n}\n\n.event {\n    position: absolute;\n    left: 0;\n    right: 5px;\n    background: #4285f4;\n    color: white;\n    border-radius: 4px;\n    padding: 4px;\n    font-size: 12px;\n}";

// lib/renderEmbedContent.js
function renderEmbedContent(args, view2) {
  return `
        <style>
            ${main_default}
        </style>
        ${Layout(view2, args.events)}
    `;
}

// preview/main.js
var mockEvents = [
  {
    id: "ev-1",
    title: "Morning standup",
    start: "2025-03-24T09:00:00",
    end: "2025-03-24T09:25:00"
  },
  {
    id: "ev-2",
    title: "Design review",
    start: "2025-03-24T11:00:00",
    end: "2025-03-24T12:30:00"
  },
  {
    id: "ev-3",
    title: "Overlapping call (tests same-day overlap)",
    start: "2025-03-24T11:30:00",
    end: "2025-03-24T12:00:00"
  },
  {
    id: "ev-4",
    title: "Lunch",
    start: "2025-03-24T12:30:00",
    end: "2025-03-24T13:30:00"
  },
  {
    id: "ev-5",
    title: "Focus block",
    start: "2025-03-24T14:00:00",
    end: "2025-03-24T17:00:00"
  },
  {
    id: "ev-6",
    title: "All-day: team offsite",
    start: "2025-03-25T00:00:00",
    end: "2025-03-25T23:59:59",
    allDay: true
  },
  {
    id: "ev-7",
    title: "1:1 with Alex",
    start: "2025-03-25T10:00:00",
    end: "2025-03-25T10:45:00"
  },
  {
    id: "ev-8",
    title: "Dentist",
    start: "2025-03-26T08:15:00",
    end: "2025-03-26T09:00:00"
  },
  {
    id: "ev-9",
    title: "Multi-day conference (span)",
    start: "2025-03-27T09:00:00",
    end: "2025-03-28T18:00:00"
  },
  {
    id: "ev-10",
    title: "Late evening task",
    start: "2025-03-28T21:00:00",
    end: "2025-03-28T22:30:00"
  },
  {
    id: "ev-11",
    title: "Weekend personal",
    start: "2025-03-29T11:00:00",
    end: "2025-03-29T14:00:00"
  },
  {
    id: "ev-12",
    title: "Edge: midnight crossing",
    start: "2025-03-30T23:30:00",
    end: "2025-03-31T00:30:00"
  }
];
var mockEmbedArgs = {
  embedId: "sidebar-calendar-main",
  openedAt: (/* @__PURE__ */ new Date()).toISOString(),
  events: mockEvents
};
var view = "hourly";
var root = document.getElementById("root-layout");
console.log(root);
root.innerHTML = renderEmbedContent(mockEmbedArgs, view);
