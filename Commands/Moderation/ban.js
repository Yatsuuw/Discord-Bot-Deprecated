const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "exil",
    category: "moderation",
    permissions: [PermissionFlagsBits.BanMembers],
    ownerOnly: false,
    usage: "exil [@member] <reason>",
    examples: ["exil @Yatsuu raison"],
    description: "Exiler un utilisateur avec une raison",
    options: [
      {
        name: "target",
        description: "L'utilisateur à exiler",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
      {
        name: "reason",
        description: "La raison de l'exile",
        type: ApplicationCommandOptionType.String,
        required: false,
      },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');
  
        if (!target.bannable) return interaction.reply('Ce membre ne peut pas être exilé.');
  
        target.ban({ reason });
        const ban = new EmbedBuilder()
          .setTitle("Bannissement")
          .setDescription("Malheureusement, un nouvel utilisateur vient d'être banni !")
          .addFields([
            { name: `Utilisateur`, value: `${target}` },
            { name: `Raison`, value: `${reason}` }
          ])
          .setFooter({ text: "Par Yatsuu#0949 @ Discord" })
          .setTimestamp()

          const banned = await interaction.reply({ embeds: [ban] });
    },
  };