const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');

const buttons = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
                .setCustomId('accept-button')
                .setLabel('Accepter')
                .setStyle(ButtonStyle.Success),
            
        new ButtonBuilder()
            .setCustomId('refuse-button')
            .setLabel('Refuser')
            .setStyle(ButtonStyle.Danger),
    )

const welcomeEmbed = new EmbedBuilder()
        .setTitle('Charte du serveur')
        .setDescription('Règles du serveur à respecter : ')
        .setColor('#1086c9')
        .addFields([{ name: '--> Article I : Le respect', value: 'Tout manque de respect envers un autre utilisateur, par des insultes, harcèlement ou autre sera sévèrement sanctionné.' }])
        .addFields([{ name: '--> Article II : Publicité', value: 'Toute forme de publicité diffusée sur le serveur ou par messages privés, pour un autre serveur ou un service tiers sera sanctionné par un bannissement imminent.' }])
        .addFields([{ name: '--> Article III : Port de photo de profil', value: 'Le port de photo de profil offensant ou blessant envers une communauté ou une personne ciblée, qu\'elle représente un mouvement politique, religieux, faisant de la promotion idéologique quelle qu\'elle soit ou visant à réaliser une publicité pour un organisme ou une entreprise est interdit. Cela sera sanctionné d\'un bannissement imminent.' }])
        .addFields([{ name: '--> Article IV : Propos', value: 'Tout propos à caractère diffamatoire, raciste, antisémite, xénophobe, sexuel, homophobe, agressif, ou injurieux est strictement interdit quelle que soit importe la forme. Les discussions politiques, religieuses ou philosophiques seront durement modérées afin d\'éviter les dérives.' }])
        .addFields([{ name: '--> Article V : Discussions', value: 'Le chat est un espace de communication qui se doit de rester lisible pour le confort de tous. Aussi, toute pollution de celui-ci, par la répétition de phrases ou de caractères, par l’emploi abusif de majuscules sera dans un premier temps sanctionnée par une perte imminente de la parole.' }])
        .addFields([{ name: '--> Article VI : Droit à la parole', value: 'Nous respectons le droit à la parole de chaque personne si tant est qu’il reste poli et courtois.' }])
        .addFields([{ name: '--> Article VII : Pseudonymes', value: 'Pour faciliter la modération, aucun membre ne doit faire usage de caractères spéciaux quel qu\'il soit dans son pseudonyme. Dans le cas contraire, un avertissement sera donné puis une expulsion si nécessaire.' }])
        .addFields([{ name: '--> Article VIII : Spoils', value: 'Toute personne faisant usage du Spoil, quelle que soit sa forme, ou que le Spoil se révèle vrai ou non, sera sanctionné d\'un bannissement imminent.' }])
        .addFields([{ name: '--> Article IX : Autres comptes', value: 'Toute personne faisant usage d\'un compte secondaire afin de contourner une sanction sera banni immédiatement.' }])
        .addFields([{ name: '--> Article X : Règlement', value: 'Toutes personnes se trouvant sur le serveur se doit de respecter ce règlement. Peu importe si la personne est d\'accord ou contre le règlement.' }])
        .setFooter({ text: 'Par Yatsuu#0949 @ Discord'})
        .setTimestamp()

module.exports = {
    name: 'welcome',
    category: 'utils',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: false,
    usage: 'welcome',
    examples: ['welcome'],
    description: 'La comme welcome permet d\'envoyer l\'embed des règles.',
    async runInteraction(client, interaction) {
        // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
        //await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });

        // Met une différence entre la commande est ce que le bot répond
        interaction.deferReply();
        // Supprimer le "reply" de la commande de base
        setTimeout(() => interaction.deleteReply());
        // Envoie de la réponse dans le salon où a été exécuté la commande
        const welcome = await interaction.channel?.send({ embeds: [welcomeEmbed], components: [buttons], fetchReply: true });
    }
};