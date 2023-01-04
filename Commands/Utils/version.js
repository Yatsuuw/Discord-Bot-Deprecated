const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'version',
    category: 'utils',
    permissions: [PermissionFlagsBits.SendMessages],
    ownerOnly: false,
    usage: 'version',
    examples: ['version'],
    description: 'Information sur la version de développement du Discord-Bot',
    async runInteraction(client, interaction) {
        const Version = new EmbedBuilder()
            .setTitle('Version Discord-Bot :')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields([{ name: '0.8-SNAPSHOT', value: 'Développement interne non terminé.' }])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord", iconURL: interaction.user.displayAvatarURL() });

        // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
        //const version = await interaction.reply({ embeds: [embed], ephemeral: true });

        // Met une différence entre la commande est ce que le bot répond
        interaction.deferReply();
        // Supprimer le "reply" de la commande de base
        setTimeout(() => interaction.deleteReply());
        // Envoie de la réponse dans le salon où a été exécuté la commande
        const version = await interaction.channel?.send({ embeds: [Version], fetchReply: true });
    },
};