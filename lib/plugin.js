import { h, renderToHtml } from "./jsx-runtime.js";

function SidebarRoot(props) {
  const { title, openedAt } = props;

  return (
    <>
      <style>
        {`
          .sidebar-calendar-root {
            background-color: #fff;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            padding: 12px;
          }

          .sidebar-calendar-title {
            font-size: 1.2rem;
            margin: 0 0 8px;
            color: inherit;
          }

          .sidebar-calendar-meta {
            margin: 0 0 12px;
            opacity: 0.8;
          }

          .sidebar-calendar-content {
            font-size: 0.9rem;
            line-height: 1.4;
            color: inherit;
          }
        `}
      </style>

      <div class="sidebar-calendar-root">
        <h1 class="sidebar-calendar-title">{title}</h1>
        <p class="sidebar-calendar-meta">
          Opened at: <code>{openedAt}</code>
        </p>
        <div class="sidebar-calendar-content">
          <p>This is your custom sidebar embed (JSX, no React/Preact).</p>
          <ul>
            <li>Start turning this into a calendar UI.</li>
            <li>Next step: add views & interactions via components.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

const plugin = {
    // Shown in Quick Open as "Open Sidebar"
    async appOption(app) {
      // Read settings (optional)
      const aspectRatio = parseFloat(app.settings["Sidebar aspect ratio"] || "1.3");
      const title = app.settings["Sidebar title"] || "Sidebar Calendar";
      // Pass args to renderEmbed via openSidebarEmbed
      // Using object form so you can have multiple embeds later if you like
      await app.openSidebarEmbed({
        id: "sidebar-calendar-main",
        aspectRatio,
        title,
        openedAt: new Date().toISOString(),
      });
    },
    // Called whenever the sidebar embed should render/re-render
    renderEmbed(app, args) {
      const { title, openedAt } = args || {};
      const effectiveTitle = title || "Sidebar Calendar";
      const effectiveOpenedAt = openedAt || new Date().toISOString();

      return renderToHtml(
        <SidebarRoot title={effectiveTitle} openedAt={effectiveOpenedAt} />
      );
    },
  } 

  export default plugin;