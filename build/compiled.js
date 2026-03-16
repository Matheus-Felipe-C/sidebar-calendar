(() => {
  // lib/jsx-runtime.js
  var Fragment = /* @__PURE__ */ Symbol.for("jsx.fragment");
  function flatten(children) {
    const out = [];
    for (const c of children) {
      if (c == null || c === true || c === false) continue;
      if (Array.isArray(c)) out.push(...flatten(c));
      else out.push(c);
    }
    return out;
  }
  function h(type, props, ...children) {
    const flat = flatten(children);
    if (typeof type === "function") {
      return type({ ...props || {}, children: flat.length === 1 ? flat[0] : flat });
    }
    return { type, props: props || {}, children: flat };
  }
  function escapeHtml(s) {
    const str = String(s);
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function renderToHtml(node) {
    if (node == null || node === true || node === false) return "";
    if (typeof node === "string" || typeof node === "number") return escapeHtml(node);
    if (Array.isArray(node)) return node.map(renderToHtml).join("");
    const { type, props, children } = node;
    if (type === Fragment) return (children || []).map(renderToHtml).join("");
    const attrs = Object.entries(props).filter(([k, v]) => v != null && v !== false && k !== "children").map(([k, v]) => {
      if (k === "class") return `class="${escapeHtml(v)}"`;
      if (k === "className") return `class="${escapeHtml(v)}"`;
      if (k === "style" && typeof v === "string") return `style="${escapeHtml(v)}"`;
      if (v === true) return k;
      return `${k}="${escapeHtml(v)}"`;
    }).join(" ");
    const open = attrs ? `<${type} ${attrs}>` : `<${type}>`;
    const inner = (children || []).map(renderToHtml).join("");
    return `${open}${inner}</${type}>`;
  }

  // lib/plugin.js
  function SidebarRoot(props) {
    const { title, openedAt } = props;
    return /* @__PURE__ */ h(
      "div",
      {
        class: "sidebar-calendar-root",
        style: "background-color: #fff; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; padding: 12px;"
      },
      /* @__PURE__ */ h(
        "h1",
        {
          style: "font-size: 1.2rem; margin: 0 0 8px; color: inherit;"
        },
        title
      ),
      /* @__PURE__ */ h("p", { style: "margin: 0 0 12px; opacity: 0.8;" }, "Opened at: ", /* @__PURE__ */ h("code", null, openedAt)),
      /* @__PURE__ */ h(
        "div",
        {
          class: "sidebar-calendar-content",
          style: "font-size: 0.9rem; line-height: 1.4; color: inherit;"
        },
        /* @__PURE__ */ h("p", { style: "margin: 0 0 8px;" }, "This is your custom sidebar embed (JSX, no React/Preact)."),
        /* @__PURE__ */ h("ul", { style: "padding-left: 1.2rem; margin: 0;" }, /* @__PURE__ */ h("li", null, "Start turning this into a calendar UI."), /* @__PURE__ */ h("li", null, "Next step: add views & interactions via components."))
      )
    );
  }
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
      const effectiveTitle = title || "Sidebar Calendar";
      const effectiveOpenedAt = openedAt || (/* @__PURE__ */ new Date()).toISOString();
      return renderToHtml(
        /* @__PURE__ */ h(SidebarRoot, { title: effectiveTitle, openedAt: effectiveOpenedAt })
      );
    }
  };
  var plugin_default = plugin;
})();
