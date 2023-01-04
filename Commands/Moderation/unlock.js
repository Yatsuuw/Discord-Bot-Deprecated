const { PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "unlock",
    category: "moderation",
    permissions: [PermissionFlagsBits.ManageChannels],
    ownerOnly: false,
    usage: "unlock",
    examples: ["unlock"],
    description: "Dévérouiller un salon",
    async runInteraction(client, interaction) {
        await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: true });
        const unlock = new EmbedBuilder()
          .setTitle("Statut du canal")
          .setDescription("L'état du canal vient de changer.")
          .setColor("Green")
          .addFields([
            { name: `État`, value: `Dévérouillé` }
          ])
          .setFooter({ text: "Par Yatsuu#0949 @ Discord" })
          .setTimestamp()

          // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
          //const unlocked = await interaction.reply({ embeds: [unlock] });

          // Met une différence entre la commande est ce que le bot répond
          interaction.deferReply();
          // Supprimer le "reply" de la commande de base
          setTimeout(() => interaction.deleteReply());
          // Envoie de la réponse dans le salon où a été exécuté la commande
          const unlocked = await interaction.channel?.send({ embeds: [unlock], fetchReply: true });
    },
  };