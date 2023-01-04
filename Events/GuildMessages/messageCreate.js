const ownerId = (process.env.OwnerID);

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message) {
        let guildSettings = await client.getGuild(message.guild);

        if (!guildSettings) {
            await client.createGuild(message.guild);
            guildSettings = await client.getGuild(message.guild);
            return message.reply('Le bot a mis à jour la base de données de votre serveur. Retapez la commande.')
        }

        const prefix = guildSettings.prefix;
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (!cmd) return message.reply('Cette commande n\'existe pas !');

        if (cmd.ownerOnly) {
            if (message.author.id != ownerId) return message.reply('La seule personne pouvant taper cette commande est l\'owner du bot !');
        }

        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande !`);

        if (cmd) cmd.run(client, message, args, guildSettings);
    },
};