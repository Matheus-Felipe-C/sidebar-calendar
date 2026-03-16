(() => {
  // lib/renderEmbed.js
  function renderEmbedContent(args) {
    const { title, openedAt } = args || {};
    const effectiveTitle = title || "Sidebar Embed";
    const effectiveOpenedAt = openedAt || (/* @__PURE__ */ new Date()).toISOString();
    return [
      '<div class="sidebar-calendar-root" style="background-color: #fff; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; padding: 12px;">',
      `  <h1 style="font-size: 1.2rem; margin: 0 0 8px; color: inherit;">${effectiveTitle}</h1>`,
      `  <p style="margin: 0 0 12px; opacity: 0.8;">Opened at: <code>${effectiveOpenedAt}</code></p>`,
      '  <div class="sidebar-calendar-content" style="font-size: 0.9rem; line-height: 1.4; color: inherit;">',
      '    <p style="margin: 0 0 8px;">This is your custom sidebar embed.</p>',
      '    <ul style="padding-left: 1.2rem; margin: 0;">',
      "      <li>Customize this content in <code>renderEmbed</code>.</li>",
      "      <li>You can add tables, checklists, and a calendar UI here.</li>",
      "    </ul>",
      "  </div>",
      "</div>"
    ].join("\n");
  }

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
      return renderEmbedContent(args);
    }
  };
  var plugin_default = plugin;
})();
