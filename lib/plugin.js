import { renderEmbedContent } from "./renderEmbedContent";

const plugin = {
    async appOption(app) {
        await app.openSidebarEmbed({
            id: "sidebar-calendar-main",
            aspectRatio: 1.3,
            title: "Sidebar Calendar",
            openedAt: new Date().toISOString(),
        });
    },

    renderEmbed(app, args) {
        return renderEmbedContent(args);
    }
}

export default plugin;