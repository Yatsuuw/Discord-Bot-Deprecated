const warnModel = require("../../Models/warnModel");
const moment = require("moment");
const { CommandInteraction, Client, EmbedBuilder, ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "warnings",
    description: "Voir tous les warns qu'un utilisateur a !",
    category: "moderation",
    permissions: [PermissionFlagsBits.ManageMessages],
    ownerOnly: false,
    usage: '/warnings [target]',
    examples: ['warnings Yatsuu'],
    options: [
        {
            name: 'target',
            description: 'Utilisateur auquel tu veux voir les warns.',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
    ],

    /**
     * @param { Client } client 
     * @param { CommandInteraction } interaction 
     */
    runInteraction: async(client, interaction) => {
        const user = interaction.options.getUser('target');
        const userWarnings = await warnModel.find({ 
            userId: user.id, 
            guildId: interaction.guildId 
        });

        if(!userWarnings?.length) 
            return interaction.reply({ 
                content: `${user} n'a pas de warns sur ce serveur !` 
            });

        const embedDescription = userWarnings
            .map((warn) => {
                const moderator = interaction.guild.members.cache.get(
                    warn.moderatorId
                );

                return [
                    `warnId: ${warn._id}`,
                    `Moderator: ${moderator || 'A quitté le serveur'}`,
                    `Date: <t:${parseInt(warn.timestamp / 1000)}:f>`,
                    `Reason: ${warn.reason}`,
                ].join("\n");
            })
            .join("\n\n");

        const embed = new EmbedBuilder()
            .setTitle(`${user.tag}'s warnings`)
            .setDescription(embedDescription)
            .setColor("Random")

        interaction.reply({ embeds: [embed] });
    },
};
