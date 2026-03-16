/**
 * Minimal JSX runtime: no React, no Preact.
 * JSX compiles to h(type, props, ...children). This builds a simple tree
 * and renderToHtml() turns it into an HTML string.
 */

const Fragment = Symbol.for("jsx.fragment");

function flatten(children) {
  const out = [];
  for (const c of children) {
    if (c == null || c === true || c === false) continue;
    if (Array.isArray(c)) out.push(...flatten(c));
    else out.push(c);
  }
  return out;
}

export function h(type, props, ...children) {
  const flat = flatten(children);
  if (typeof type === "function") {
    return type({ ...(props || {}), children: flat.length === 1 ? flat[0] : flat });
  }
  return { type, props: props || {}, children: flat };
}

function escapeHtml(s) {
  const str = String(s);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderToHtml(node) {
  if (node == null || node === true || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return escapeHtml(node);
  if (Array.isArray(node)) return node.map(renderToHtml).join("");

  const { type, props, children } = node;

  if (type === Fragment) return (children || []).map(renderToHtml).join("");

  const attrs = Object.entries(props)
    .filter(([k, v]) => v != null && v !== false && k !== "children")
    .map(([k, v]) => {
      if (k === "class") return `class="${escapeHtml(v)}"`;
      if (k === "className") return `class="${escapeHtml(v)}"`;
      if (k === "style" && typeof v === "string") return `style="${escapeHtml(v)}"`;
      if (v === true) return k;
      return `${k}="${escapeHtml(v)}"`;
    })
    .join(" ");
  const open = attrs ? `<${type} ${attrs}>` : `<${type}>`;
  const inner = (children || []).map(renderToHtml).join("");
  return `${open}${inner}</${type}>`;
}

export { renderToHtml, Fragment };
