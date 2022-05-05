
module.exports = {
    name: "ping",
    description: "Show the Bot's ping",
    run: async (client, message, args, prefix) => {
        message.reply({
            content: `:ping_pong: **The Bot Ping is: \`${client.ws.ping}ms\`**`
        }).catch(() => null);
    },
};