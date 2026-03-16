import { h } from "preact";
import render from "preact-render-to-string";

function SidebarRoot(props) {
  const { title, openedAt } = props;

  return (
    <div
      class="sidebar-calendar-root"
      style="background-color: #fff; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; padding: 12px;"
    >
      <h1
        style="font-size: 1.2rem; margin: 0 0 8px; color: inherit;"
      >
        {title}
      </h1>
      <p style="margin: 0 0 12px; opacity: 0.8;">
        Opened at: <code>{openedAt}</code>
      </p>
      <div
        class="sidebar-calendar-content"
        style="font-size: 0.9rem; line-height: 1.4; color: inherit;"
      >
        <p style="margin: 0 0 8px;">
          This is your custom sidebar embed, now rendered with Preact.
        </p>
        <ul style="padding-left: 1.2rem; margin: 0;">
          <li>Start turning this into a calendar UI.</li>
          <li>Next step: add views & interactions via components.</li>
        </ul>
      </div>
    </div>
  );
}

export function renderEmbedContent(args) {
  const { title, openedAt } = args || {};
  const effectiveTitle = title || "Sidebar Calendar";
  const effectiveOpenedAt = openedAt || new Date().toISOString();

  return render(
    <SidebarRoot title={effectiveTitle} openedAt={effectiveOpenedAt} />
  );
}

