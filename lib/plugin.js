import { renderEmbedContent } from "./renderEmbed.js";

const plugin = {
  async appOption(app) {
    await app.openSidebarEmbed({
      id: "sidebar-calendar-main",
      title: "Sidebar Calendar",
      openedAt: new Date().toISOString(),
    });
  },

  renderEmbed(app, args) {
    return renderEmbedContent(args);
  },
};

export default plugin;