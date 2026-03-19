(() => {
  // lib/styles/main.css
  var main_default = ".sidebar-calendar-root {\n  font-family: system-ui, sans-serif;\n  padding: 12px;\n  background: #fff;\n}\n\n.header {\n  font-size: 1.2rem;\n  margin-bottom: 8px;\n}\n\n.event-list {\n  padding-left: 1rem;\n  margin: 0;\n}\n\n.event-item {\n  margin-bottom: 6px;\n}";

  // lib/templates/layout.html
  var layout_default = '<div class="sidebar-calendar-root">\n  {{content}}\n</div>';

  // lib/utils/render.js
  function render(template, data = {}) {
    return template.replace(/{{(.*?)}}/g, (_, key) => {
      return data[key.trim()] ?? "";
    });
  }

  // lib/components/Layout.js
  function Layout(content) {
    return render(layout_default, { content });
  }

  // lib/templates/header.html
  var header_default = '<h1 class="header">{{title}}</h1>';

  // lib/utils/escape.js
  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // lib/components/Header.js
  function Header({ title }) {
    return render(header_default, {
      title: escapeHtml(title)
    });
  }

  // lib/templates/event-list.html
  var event_list_default = '<li class="event-item">\n  <strong>{{title}}</strong>\n  <span>{{date}}</span>\n</li>';

  // lib/templates/event-item.html
  var event_item_default = '<ul class="event-list">\n  {{items}}\n</ul>';

  // lib/components/EventItem.js
  function EventItem(event) {
    return render(event_item_default, {
      title: escapeHtml(event.title),
      date: escapeHtml(event.date)
    });
  }

  // lib/components/EventList.js
  function EventList(events = []) {
    const items = events.map(EventItem).join("");
    return render(event_list_default, { items });
  }

  // lib/renderEmbed.js
  function renderEmbedContent(args) {
    const title = args?.title || "Calendar";
    const events = args?.events || [
      { title: "Meeting", date: "10:00" },
      { title: "Workout", date: "18:00" }
    ];
    const content = `
    ${Header({ title })}
    ${EventList(events)}
  `;
    return `
<style>
${main_default}
</style>

${Layout(content)}
`;
  }

  // lib/plugin.js
  var plugin = {
    async appOption(app) {
      await app.openSidebarEmbed({
        id: "sidebar-calendar-main",
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
