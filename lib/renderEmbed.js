import template from "../templates/index.html";

export function renderEmbedContent(args) {
  const { title, openedAt } = args || {};
  const effectiveTitle = title || "Sidebar Embed";
  const effectiveOpenedAt = openedAt || new Date().toISOString();

  return template
    .replace("{{title}}", effectiveTitle)
    .replace("{{openedAt}}", effectiveOpenedAt);
}

