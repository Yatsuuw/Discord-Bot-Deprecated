const { PermissionFlagsBits, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'message',
    description: 'Envoi du message de ton choix par le bot.',
    category: 'moderation',
    permissions: [PermissionFlagsBits.ModerateMembers],
    ownerOnly: false,
    usage: 'message [votre message]',
    examples: ['message [Je suis un Aranara !]'],
    options: [
        {
            name: 'message',
            description: 'Écrivez votre message à faire envoyer par le bot.',
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],
    async runInteraction(client, interaction) {
        const message = await interaction.options.getString('message');

        // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
        //await interaction.reply({content : `${message}`, fetchReply: true});

        // Met une différence entre la commande est ce que le bot répond
        interaction.deferReply();
        // Supprimer le "reply" de la commande de base
        setTimeout(() => interaction.deleteReply());
        // Envoie de la réponse dans le salon où a été exécuté la commande
        interaction.channel?.send({ content: `${message}`, fetchReply: true });
    },
};