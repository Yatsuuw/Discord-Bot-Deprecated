const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'minecraft-server',
    category: 'utils',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: true,
    usage: 'minecraft-server',
    examples: ['minecraft-server'],
    description: 'Envoie toutes les informations relatives au Serveur Minecraft.',
    async runInteraction(client, interaction) {
        const MCServer = new EmbedBuilder()
            .setTitle('Minecraft-Serveur :')
            .setThumbnail(client.user.displayAvatarURL())
        	.setColor('#e74a4a')
            .addFields([
                { name: 'Adresse IP :', value: 'play.yatsuu.fr', inline: true },
                { name: 'Version :', value: '1.19 - Yatsuu-API', inline: true },
                { name: 'Optifine - Sodium :', value: 'Conseillé' },
                { name: 'Whitelist', value: 'Oui', inline: true },
                { name: 'Mods de triche :', value: '❌', inline: true }
            ])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord", iconURL: interaction.user.displayAvatarURL() });

            /* 
            Éventuellement faire que l'embed soit complété par des options pour :
                    -> réponse à l'IP
                    -> réponse à la version
                    -> toute la ligne de "Conseillé"
                    -> Si Whitelist
                    -> Si mods de triche ==> à définir
            */

        // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
        //const mcserver = await interaction.reply({ embeds: [MCServer] });

        // Met une différence entre la commande est ce que le bot répond
        interaction.deferReply();
        // Supprimer le "reply" de la commande de base
        setTimeout(() => interaction.deleteReply());
        // Envoie de la réponse dans le salon où a été exécuté la commande
        const mcserver = await interaction.channel?.send({ embeds: [MCServer], fetchReply: true });
    },
};