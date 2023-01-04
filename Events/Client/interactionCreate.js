const { InteractionType } = require("discord.js");

const ownerId = process.env.OwnerID;

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction, message, ready) {
        let guildSettings = await client.getGuild(interaction.guild);

        if (!guildSettings) {
            await client.createGuild(interaction.guild);
            guildSettings = await client.getGuild(interaction.guild);
            return interaction.reply('Le bot a mis à jour la base de données de votre serveur. Retapez la commande.')
        }

        if (interaction.type === InteractionType.ApplicationCommand || interaction.isContextMenuCommand()) {
            const cmd = client.Commands.get(interaction.commandName);
            if (!cmd) return interaction.reply('Cette commande n\'existe pas !');

            if (cmd.ownerOnly) {
                if (interaction.user.id != ownerId) return interaction.reply('La seule personne pouvant taper cette commande est l\'owner du bot !');
            }

            if (!interaction.member.permissions.has(cmd.permissions)) return interaction.reply({ content: `Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande !`, ephemeral: true });
            
            cmd.runInteraction(client, interaction, guildSettings);
        } else if (interaction.isButton()) {
            const btn = client.Buttons.get(interaction.customId);
            if (!btn) return interaction.reply('Ce bouton n\'existe pas !');
            btn.runInteraction(client, interaction, guildSettings);
        } else if (interaction.isStringSelectMenu()) {
            const selectMenu = client.Selects.get(interaction.customId);
            if (!selectMenu) return interaction.reply('Ce menu n\'existe pas !');
            selectMenu.runInteraction(client, interaction, guildSettings);
        }
    },
};