const { PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    permissions: [PermissionFlagsBits.ManageChannels],
    ownerOnly: false,
    usage: "lock",
    examples: ["lock"],
    description: "Vérouiller un salon",
    async runInteraction(client, interaction) {
        await interaction.channel.permissionOverwrites.edit(interaction.guild.id,  { SendMessages: false } );
        const lock = new EmbedBuilder()
          .setTitle("Statut du canal")
          .setDescription("L'état du canal vient de changer.")
          .setColor("Red")
          .addFields([
            { name: `État`, value: `Vérouillé` }
          ])
          .setFooter({ text: "Par Yatsuu#0949 @ Discord" })
          .setTimestamp()

          // interaction.reply() : Si on se fiche que le bot nous réponde à l'envoi de la réponse
          //const locked = await interaction.reply({ embeds: [lock] });

          // Met une différence entre la commande est ce que le bot répond
          interaction.deferReply();
          // Supprimer le "reply" de la commande de base
          setTimeout(() => interaction.deleteReply());
          // Envoie de la réponse dans le salon où a été exécuté la commande
          const locked = await interaction.channel?.send({ embeds: [lock], fetchReply: true });
    },
  };