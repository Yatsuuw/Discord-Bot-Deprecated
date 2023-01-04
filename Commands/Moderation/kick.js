const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "expulse",
    category: "moderation",
    permissions: [PermissionFlagsBits.KickMembers],
    ownerOnly: false,
    usage: "expulse [@member] <reason>",
    examples: ["expulse @Yatsuu raison"],
    description: "Expluser un utilisateur avec une raison",
    options: [
      {
        name: "target",
        description: "L'utilisateur à expluser",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
      {
        name: "reason",
        description: "La raison de l'expulsion",
        type: ApplicationCommandOptionType.String,
        required: false,
      },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const reason = (interaction.options.getString('reason') || 'Aucune raison fournie.');
        //console.log(target.kickable)
  
        if (!target.kickable) return interaction.reply('Ce membre ne peut pas être expulsé.');
  
        target.kick(reason);
        const kick = new EmbedBuilder()
          .setTitle("Expulsion")
          .setDescription("Malheureusement, un nouvel utilisateur vient d'être expulsé !")
          .addFields([
            { name: `Utilisateur`, value: `${target}` },
            { name: `Raison`, value: `${reason}` }
          ])
          .setFooter({ text: "Par Yatsuu#0949 @ Discord" })
          .setTimestamp()

          const kicked = await interaction.reply({ embeds: [kick] });
        },
  };