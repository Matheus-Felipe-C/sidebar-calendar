(() => {
  // lib/plugin.js
  var plugin = {
    // Shown in Quick Open as "Open Sidebar"
    async appOption(app) {
      const aspectRatio = parseFloat(app.settings["Sidebar aspect ratio"] || "1.3");
      const title = app.settings["Sidebar title"] || "Sidebar Calendar";
      await app.openSidebarEmbed({
        id: "sidebar-calendar-main",
        aspectRatio,
        title,
        openedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    },
    // Called whenever the sidebar embed should render/re-render
    renderEmbed(app, args) {
      const { title, openedAt } = args || {};
      return [
        `# ${title || "Sidebar Embed"}`,
        "",
        `Opened at: \`${openedAt || (/* @__PURE__ */ new Date()).toISOString()}\``,
        "",
        "> This is your custom sidebar embed.",
        "",
        "- Customize this content in `renderEmbed`.",
        "- You can add tables, checklists, etc."
      ].join("\n");
    }
  };
  var plugin_default = plugin;
})();
