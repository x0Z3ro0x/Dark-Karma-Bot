const { handleBlockedWords } = require("../services/moderationService");
const { handleLinkFilter } = require("../services/linkFilterService");
const { handleSupportMessage } = require("../services/supportService");
const { runCommand } = require("../services/commandService");

module.exports = (client) => {
    client.on("messageCreate", async (msg) => {
        try {
            if (msg.author.bot) return;

            const handledSupport = await handleSupportMessage(msg);
            if (handledSupport) return;

            const handledBlockedWords = await handleBlockedWords(msg);
            if (handledBlockedWords) return;

            const handledLink = await handleLinkFilter(msg);
            if (handledLink) return;

            await runCommand(client, msg);
        } catch (err) {
            console.error("[MESSAGE CREATE] Unexpected error:", err);
        }
    });
};