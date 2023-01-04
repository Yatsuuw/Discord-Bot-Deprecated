const { PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'emoji',
    category: 'utils',
    permissions: [PermissionFlagsBits.SendMessages],
    ownerOnly: true,
    usage: 'emoji',
    examples: ['emoji'],
    description: 'Poster vos émojis.',
    async runInteraction(client, interaction) {

        const emoji = new EmbedBuilder()
            .setTitle('Émojis')
            .addFields([{ name: '3 émojis', value: 'Carré rouge : 🟥\nCarré vert : 🟩\nCarré bleu : 🟦'}])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const emojis = await interaction.reply({ embeds: [emoji], fetchReply: true });
        //poll.react('<:greencheck:946413053753753299015>'); backslash devant l'emote custom (slash inversé)//
        //🟥 🟩 🟦
        await emojis.react('🟥');
        await emojis.react('🟩');
        await emojis.react('🟦');
    },
};