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
      // Return markdown content for the sidebar
      // You can expand this with your own calendar UI later
      return [
        `# ${title || "Sidebar Embed"}`,
        "",
        `Opened at: \`${openedAt || new Date().toISOString()}\``,
        "",
        "> This is your custom sidebar embed.",
        "",
        "- Customize this content in `renderEmbed`.",
        "- You can add tables, checklists, etc.",
      ].join("\n");
    },
  } 

  export default plugin;