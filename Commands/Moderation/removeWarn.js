const { CommandInteraction, Client, ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const warnModel = require('../../Models/warnModel');

module.exports = {
    name: 'remove-warn',
    description: 'enlever un warn en utilisant l\'ID de l\'utilisateur',
    category: "moderation",
    permissions: [PermissionFlagsBits.ManageMessages],
    ownerOnly: false,
    usage: '/remove-warn [warnId]',
    examples: ['remove-warn', 'remove-warn [warnId]'],
    options: [
        {
            name: "warnid",
            description: "ID du warn que tu veux supprimer",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    /**
     * @param { Client } client 
     * @param { CommandInteraction } interaction 
     */
    runInteraction: async(client, interaction) => {
        const warnId = interaction.options.getString('warnid');

        const data = await warnModel.findById(warnId);

        if(!data) 
            return interaction.reply({ 
                content: `${warnId} ce n'est pas un ID de warn valide !`,
            });
        
            data.delete();

            const user = interaction.guild.members.cache.get(data.userId);
            const unwarn = new EmbedBuilder()
            .setTitle('Warn')
            .setDescription("Suppression d'un warn")
            .addFields([
                { name: 'Utilisateur', value: `${user}`}
            ])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const unwarned = await interaction.reply({ embeds: [unwarn] });
    }
};
