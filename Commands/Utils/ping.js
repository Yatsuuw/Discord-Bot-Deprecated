const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'utils',
    permissions: [PermissionFlagsBits.SendMessages],
    ownerOnly: false,
    usage: 'ping',
    examples: ['ping'],
    description: 'La commande ping envoie la latence du bot et de l\'API',
    async runInteraction(client, interaction) {
        const tryPong = await interaction.reply({ content: "On essaye de pong... un instant !", fetchReply: true });

        const embed = new EmbedBuilder()
            .setTitle('🏓 Pong !')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields([
                { name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true },
                { name: "Latence BOT",  value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true},
            ])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord", iconURL: interaction.user.displayAvatarURL() });

            interaction.editReply({ content: ' ', embeds: [embed] })
    }
};