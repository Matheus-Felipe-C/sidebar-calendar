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

// preview/main.js
var mockEmbedArgs = {
  embedId: "sidebar-calendar-main",
  openedAt: (/* @__PURE__ */ new Date()).toISOString()
};
var root = document.getElementById("embed-root");
root.innerHTML = renderEmbedContent(mockEmbedArgs);
