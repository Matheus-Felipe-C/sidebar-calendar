(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // lib/renderEmbed.jsx
  var import_preact = __require("preact");
  var import_preact_render_to_string = __toESM(__require("preact-render-to-string"), 1);
  function SidebarRoot(props) {
    const { title, openedAt } = props;
    return /* @__PURE__ */ (0, import_preact.h)(
      "div",
      {
        class: "sidebar-calendar-root",
        style: "background-color: #fff; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; padding: 12px;"
      },
      /* @__PURE__ */ (0, import_preact.h)(
        "h1",
        {
          style: "font-size: 1.2rem; margin: 0 0 8px; color: inherit;"
        },
        title
      ),
      /* @__PURE__ */ (0, import_preact.h)("p", { style: "margin: 0 0 12px; opacity: 0.8;" }, "Opened at: ", /* @__PURE__ */ (0, import_preact.h)("code", null, openedAt)),
      /* @__PURE__ */ (0, import_preact.h)(
        "div",
        {
          class: "sidebar-calendar-content",
          style: "font-size: 0.9rem; line-height: 1.4; color: inherit;"
        },
        /* @__PURE__ */ (0, import_preact.h)("p", { style: "margin: 0 0 8px;" }, "This is your custom sidebar embed, now rendered with Preact."),
        /* @__PURE__ */ (0, import_preact.h)("ul", { style: "padding-left: 1.2rem; margin: 0;" }, /* @__PURE__ */ (0, import_preact.h)("li", null, "Start turning this into a calendar UI."), /* @__PURE__ */ (0, import_preact.h)("li", null, "Next step: add views & interactions via components."))
      )
    );
  }
  function renderEmbedContent(args) {
    const { title, openedAt } = args || {};
    const effectiveTitle = title || "Sidebar Calendar";
    const effectiveOpenedAt = openedAt || (/* @__PURE__ */ new Date()).toISOString();
    return (0, import_preact_render_to_string.default)(
      /* @__PURE__ */ (0, import_preact.h)(SidebarRoot, { title: effectiveTitle, openedAt: effectiveOpenedAt })
    );
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
