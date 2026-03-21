(() => {
  // lib/components/layout.js
  function Layout() {
    return `
        <div class="root-layout">
            <h1 class="heading">Hello world!</h1>
        </div>
    `;
  }

  // lib/styles/main.css
  var main_default = ".root-layout {\n    font-family: system-ui, sans-serif;\n    padding: 12px;\n    background: #fff;\n}\n\n.heading {\n    text-decoration: underline;\n    color: #fff;\n}";

  // lib/renderEmbedContent.js
  function renderEmbedContent(args) {
    return `
        <style>
            ${main_default}
        </style>
        ${Layout()}
    `;
  }

  // lib/plugin.js
  var plugin = {
    async appOption(app) {
      await app.openSidebarEmbed({
        id: "sidebar-calendar-main",
        aspectRatio: 1.3,
        title: "Sidebar Calendar",
        openedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    },
    renderEmbed(app, args) {
      return renderEmbedContent(args);
    }
  };
  var plugin_default = plugin;
})();
