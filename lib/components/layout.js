import AgendaView from "./calendarView";
import HourlyView from "./hourlyView";

export function Layout(view = 'hourly', events) {
    return `
        <div class="root-layout">
            <h1 class="heading">Sidebar calendar</h1>
            ${setView(view, events)}
        </div>
    `
}

function setView(view, events) {
    if (view === 'hourly') {
        return HourlyView(events);
    } else if (view === 'agenda') {
        return AgendaView(events);
    }
}