const { Guild } = require('../../Models/index');
const { PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'update',
    category: 'admin',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: true,
    usage: 'update',
    examples: ['update'],
    description: 'Mettre à jour les nouvelles données',
    async runInteraction(client, interaction) { {
        await Guild.updateMany({}, { "$set": { "prefix": "!" }, upsert: true });

        await Guild.updateMany({}, { "$set": { "logChannel": "x" }, upsert: true });

        await Guild.updateMany({}, { "$set": { "JoinChannel": "y" }, upsert: true });

        await Guild.updateMany({}, { "$set": { "QuitChannel": "z" }, upsert: true });

        await Guild.updateMany({}, { "$set": { "RoleAccept": "a" }, upsert: true });

        await Guild.updateMany({}, { "$set": { "RoleRefuse": "b" }, upsert: true});
        }
        const update = new EmbedBuilder()
            .setTitle('Base de données')
            .addFields([{ name: 'Statut :', value: 'Réinitialisé ! ✅'}])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const updated = await interaction.reply({ embeds: [update] });
    }
};