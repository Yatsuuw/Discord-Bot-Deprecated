const { PermissionFlagsBits, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'result',
    category: 'utils',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: false,
    usage: ['/result'],
    examples: ['/result <Team1> <Composition1> <Team2> <Composition2> <Score> <Commentaire>'],
    description: 'Commande pour envoyer un embed qui affiche les résultats d\'une rencontre.',
    options: [
        {
            name: 'team-1',
            description: 'Nom de la première équipe',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'composition-1',
            description: 'Composition de la première équipe',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'team-2',
            description: 'Nom de la seconde équipe',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'composition-2',
            description: 'Composition de la seconde équipe',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'score',
            description: 'Résultat de la rencontre',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'commentaire',
            description: 'Ajoute un commentaire à la rencontre',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async runInteraction(client, interaction) {
        const team1 = interaction.options.getString('team-1');
        const team2 = interaction.options.getString('team-2');
        const composition1 = interaction.options.getString('composition-1');
        const composition2 = interaction.options.getString('composition-2');
        const score = interaction.options.getString('score');
        const commentaire = interaction.options.getString('commentaire');
        const MDT = new EmbedBuilder()
            .setTitle(`Résultat MDT`)
            .setDescription(`Affichage du résultat de la rencontre !`)
            .addFields([
                { name: `Team 1 : `, value: `${team1}`, inline: true },
                { name: `Team 2 : `, value: `${team2}`, inline: true },
                { name: `Composition de l'équipe 1 : `, value: `${composition1}` },
                { name: `Composition de l'équipe 2 : `, value: `${composition2}` },
                { name: `Score de la rencontre : `, value: `${score}`, inline: true },
                { name: `Commentaire : `, value: `${commentaire}`, inline: true }
            ])
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord", iconURL: interaction.user.displayAvatarURL() });

        // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
        //const mdt = await interaction.reply({ embeds: [MDT] })

        // Met une différence entre la commande est ce que le bot répond
        interaction.deferReply();
        // Supprimer le "reply" de la commande de base
        setTimeout(() => interaction.deleteReply());
        // Envoie de la réponse dans le salon où a été exécuté la commande
        const mdt = await interaction.channel?.send({ embeds: [MDT], fetchReply: true });
    },
};