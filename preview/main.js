import { renderEmbedContent } from "../lib/renderEmbedContent.js";

/** Shape this like real `args` from Amplenote as you use more fields. */
const mockEmbedArgs = {
  embedId: "sidebar-calendar-main",
  openedAt: new Date().toISOString(),
};

const root = document.getElementById("embed-root");
root.innerHTML = renderEmbedContent(mockEmbedArgs);
