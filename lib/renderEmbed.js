import styles from "./styles/main.css";

import { Layout } from "./components/Layout.js";
import { Header } from "./components/Header.js";
import { EventList } from "./components/EventList.js";

export function renderEmbedContent(args) {
  const title = args?.title || "Calendar";

  const events = args?.events || [
    { title: "Meeting", date: "10:00" },
    { title: "Workout", date: "18:00" },
  ];

  const content = `
    ${Header({ title })}
    ${EventList(events)}
  `;

  return `
<style>
${styles}
</style>

${Layout(content)}
`;
}