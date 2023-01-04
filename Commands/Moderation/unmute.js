const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: "unmute",
    category: "moderation",
    permissions: [PermissionFlagsBits.ModerateMembers],
    ownerOnly: false,
    usage: "unmute [@member]",
    examples: ["unmute @Yatsuu"],
    description: "Rendre la parole à un utilisateur",
    options: [
      {
        name: "target",
        description: "L'utilisateur à rendre muet",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
  
        if(!target.isCommunicationDisabled()) return interaction.reply('Ce membre a déjà droit à la parole !');
        
        target.timeout(null);
        const unmute = new EmbedBuilder()
          .setTitle("Parole")
          .setDescription("Un nouvel utilisateur vient de retrouver son droit de parole !")
          .addFields([
            { name: `Utilisateur`, value: `${target}` }
          ])
          .setFooter({ text: "Par Yatsuu#0949 @ Discord" })
          .setTimestamp()

          const unmuted = await interaction.reply({ embeds: [unmute] });
    },
  };