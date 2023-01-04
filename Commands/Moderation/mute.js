const ms = require('ms');
const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "mute",
    category: "moderation",
    permissions: [PermissionFlagsBits.ModerateMembers],
    ownerOnly: false,
    usage: "mute [@member] [duration] <reason>",
    examples: ["exil @Yatsuu 5 minutes raison"],
    description: "Rendre muet temporairement un utilisateur avec une raison",
    options: [
      {
        name: "target",
        description: "L'utilisateur à rendre muet",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
      {
        name: "reason",
        description: "La raison du mute",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
          name: "duration",
          description: "La durée du mute",
          type: ApplicationCommandOptionType.String,
          minValue: 1,
          maxValue: 7,
          required: true,
      }
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getString('duration');
        const convertedTime = ms(duration);
        const reason = interaction.options.getString('reason');
  
        if (!target.moderatable) return interaction.reply('Cet utilisateur ne peut pas être rendu muet !');
        if (!convertedTime) return interaction.reply('Spécifie une durée valide !');
        
        target.timeout(convertedTime, reason);
        const mute = new EmbedBuilder()
          .setTitle("Parole")
          .setDescription("Malheureusement, un nouvel utilisateur vient de perdre son droit de parole !")
          .addFields([
            { name: `Utilisateur`, value: `${target}` },
            { name: `Durée`, value: `${duration} `},
            { name: `Raison`, value: `${reason}` }
          ])
          .setFooter({ text: "Par Yatsuu#0949 @ Discord" })
          .setTimestamp()

          const muted = await interaction.reply({ embeds: [mute] });
    },
  };