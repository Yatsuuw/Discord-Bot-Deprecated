const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: "clear",
    category: "moderation",
    permissions: [PermissionFlagsBits.ManageMessages],
    ownerOnly: false,
    usage: "clear [amount] <@target>",
    examples: ["clear 50", "clear 50 @Yatsuu"],
    description: "Supprimer un nombre de message spécifié sur un salon ou un utilisateur",
    options: [
      {
        name: "message",
        description: "Le nombre de message à supprimer",
        type: ApplicationCommandOptionType.Number,
        min_value: 1,
        max_value: 100,
        required: true,
      },
      {
        name: "target",
        description: "Sélectionner l'utilisateur pour la suppression de message",
        type: ApplicationCommandOptionType.User,
        required: false,
      },
    ],
    async runInteraction(client, interaction) {
      const amoutToDelete = interaction.options.getNumber('message');
      if (amoutToDelete > 100 || amoutToDelete < 0) return interaction.reply('Le \`nombre\` doit être supérieur à 0 et inférieur à 100.');
      const target = interaction.options.getMember('target');

      const messageToDelete = await interaction.channel.messages.fetch();

      if (target) {
        let i = 0;
        const filteredTargetMessages = [];
        (await messageToDelete).filter(msg => {
          if (msg.author.id == target.id && amoutToDelete > i) {
            filteredTargetMessages.push(msg); i++;
          }
        });

        await interaction.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
          interaction.reply({ content: `J'ai supprimé ${messages.size} messages sur l'utilisateur ${target} !`, ephemeral: true });
        });
      } else {
        await interaction.channel.bulkDelete(amoutToDelete, true).then(messages => {
          interaction.reply({ content: `J'ai supprimé ${messages.size} messages dans ce salon !`, ephemeral: true });
        });
      }
    },
  };