import { renderEmbedContent } from "./renderEmbed.js";

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
      return renderEmbedContent(args);
    },
  } 

  export default plugin;