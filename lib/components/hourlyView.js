import { renderEvents } from "./renderEvents";

export default function HourlyView(events = []) {
    return `
        <div class="calendar-container">
            <div class="hour-grid">
                ${renderHourLines()}
            </div>

            <div class="events-layer">
                ${renderEvents(events)}
            </div>
        </div>
    `
}

function renderHourLines() {
    return Array.from({ length: 24 }, (_, hour) => {
        const label = String(hour).padStart(2, '0') + ':00';

        return `
            <div class="hour-row">
                <div class="hour-label">${label}</div>
                <div class="hour-line"></div>
            </div>
        `;
    }).join('');
}