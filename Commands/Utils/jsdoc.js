const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'jsdoc',
    category: 'utils',
    permissions: [PermissionFlagsBits.SendMessages],
    ownerOnly: false,
    usage: 'jsdoc',
    examples: ['jsdoc'],
    description: 'Envoie la documentation de Discord.js !',
    async runInteraction(client, interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Documentation de Discord.js')
            .addFields([{ name: 'Lien :', value: 'https://discord.js.org/#/'}])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const jsdoc = await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};