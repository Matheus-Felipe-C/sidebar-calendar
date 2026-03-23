export function renderEvents(events = []) {
    const HOUR_HEIGHT = 60; //Pixels per hour

    return events.map(event => {
        const start = new Date(event.start);
        const end = new Date(event.end);

        const startMinutes = start.getHours() * 60 + start.getMinutes();
        const endMinutes = end.getHours() * 60 + end.getMinutes();

        const top = (startMinutes / 60) * HOUR_HEIGHT;
        const height = ((endMinutes - startMinutes) / 60) * HOUR_HEIGHT;

        return `
            <div 
                class="event"
                style="
                    top: ${top}px;
                    height: ${height}px;
                "
            >
                <strong>${event.title}</strong><br/>
                ${start.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })}
            </div>
        `;
    }).join('');
}