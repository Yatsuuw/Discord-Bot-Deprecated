const { ActivityType } = require('discord.js')
const Logger = require('../../Utils/Logger');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        let guildsCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
        Logger.client(`Prête à être utilisée par ${usersCount} utilisateurs sur ${guildsCount.size} serveurs !`);

        client.user.setPresence({
            activities: [{ name: "Aide : /help", type: ActivityType.Playing }],
            status: "online",
        });

        //Slash commands local (instant modification)
        //const Guild = await client.guilds.cache.get(process.env.GUILD_ID);
        //Guild.commands.set(client.Commands.map(cmd => cmd));

        //Slash commands API server (1 heure avant modification)
        client.application.commands.set(client.Commands.map(cmd => cmd));
    },
};