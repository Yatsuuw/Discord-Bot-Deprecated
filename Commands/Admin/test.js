const { EmbedBuilder, Message, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'test',
    category: 'admin',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: false,
    usage: 'test',
    examples: ['test'],
    description: 'Commande afin de déterminer si le Bot fonctionne bien.',
    async runInteraction(client, interaction) {
        const tryTest = await interaction.reply({ content: "On essaye de test... un instant !", fetchReply: true });

        const embed = new EmbedBuilder()
        .setTitle('Test | Command')
        .addFields([{ name: 'État', value: 'Opérationnel' }])
        .setFooter({ text: "Par Yatsuu#0949 @ Discord", iconURL: interaction.user.displayAvatarURL() })

        interaction.editReply({ content: ' ', embeds: [embed] })
    }
};
