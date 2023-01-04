const { ApplicationCommandOptionType, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'sondage',
    category: 'utils',
    permissions: [PermissionFlagsBits.ManageMessages],
    ownerOnly: false,
    usage: 'sondage [question]',
    examples: ['sondage question:[Quel est votre fruit préféré ?] reponses:["Fraise" "Pomme" "Banane"]'],
    description: 'Postez votre propre sondage.',
    options: [
        {
            name: 'question',
            description: 'Taper la question de votre sondage.',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'reponses',
            description: 'Mettez vos réponses entres guillemets (" ")',
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],
    async runInteraction(client, interaction, message) {
        const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
        const sondageQuestion = await interaction.options.getString('question');
        const regex = /"([^"]*)"/g;
        const matches = interaction.options.getString("reponses").match(regex)

        if (interaction.options.data.length < 2) {
            return interaction.reply(`Il faut minimum 2 réponses pour le sondage.`)
        }

        const Sondage = new EmbedBuilder()
            .setTitle(sondageQuestion)
            .setColor('#00a3b5')
            .setDescription("Veuillez réagir avec l'une des réactions ci-dessous.\nLes réactions sont dans le même ordre que les réponses.")
            .addFields([
                { name: 'Réponses possibles', value: `${matches.map(res => `-> ${res.replaceAll("\"", "")}`).join("\n")}` },
            ])
            .setTimestamp()
            .setFooter({ text: `Sondage généré par ${interaction.user.tag} !`, iconURL: interaction.user.displayAvatarURL() })
        
        // Pour loger les réponses dans le terminal
        //console.log(matches.map(res => `-> ${res}`).join("\n"));
        
        // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
        //const envoieSondage = await interaction.reply({ embeds: [Sondage], fetchReply: true });

        // Met une différence entre la commande est ce que le bot répond
        interaction.deferReply();
        // Supprimer le "reply" de la commande de base
        setTimeout(() => interaction.deleteReply());
        // Envoie de la réponse dans le salon où a été exécuté la commande
        const envoieSondage = await interaction.channel?.send({ embeds: [Sondage], fetchReply: true });
        
        for (let i = 0; i < matches.length; i++) {
            await envoieSondage.react(emojis[i]);
        };
    },
};