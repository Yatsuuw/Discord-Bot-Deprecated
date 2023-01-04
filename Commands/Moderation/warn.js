const { Client, CommandInteraction, ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js");
const warnModel = require("../../Models/warnModel");

module.exports = {
    name: "warn",
    description: "warn un utilisateur",
    category: "moderation",
    permissions: [PermissionFlagsBits.ManageMessages],
    ownerOnly: false,
    usage: 'warn [target] <reason>',
    examples: ['warn Yatsuu bip', 'warn Yatsuu'],
    options: [
        {
            name: "target",
            description: "utilisateur que tu veux warn",
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: "reason",
            description: "raison du warn",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    /**
     * @param { Client } client
     * @param { CommandInteraction } interaction
     */
    runInteraction: async(client, interaction) => {
        const user = interaction.options.getUser("target");
        const reason = interaction.options.getString("reason");

        new warnModel({
            user: user.tag,
            userId: user.id,
            guild: interaction.guild.name,
            guildId: interaction.guildId,
            moderator: interaction.member.displayName,
            moderatorId: interaction.user.id,
            reason,
            timestamp: Date.now(),
        }).save();

        user.send(
            `Tu as été warn sur ${interaction.guild.name} pour ${reason}`
            ).catch(console.log);

        const warn = new EmbedBuilder()
            .setTitle("Warn")
            .setDescription("Un nouvel utilisateur vient de recevoir un warn !")
            .addFields([
              { name: `Utilisateur`, value: `${user}` },
              { name: `Raison`, value: `${reason}` }
            ])
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })
            .setTimestamp()
  
            const warned = await interaction.reply({ embeds: [warn] });
    },
};