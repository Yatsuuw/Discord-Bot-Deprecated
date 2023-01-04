const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "slowmode",
    category: "moderation",
    permissions: [PermissionFlagsBits.ManageMessages],
    ownerOnly: false,
    usage: "slowmode [amount] secondes",
    examples: ["slowmode 50"],
    description: "Activer un ratelimit sur le salon.",
    options: [
      {
        name: "value",
        description: "Choisir la valeur du slowmode",
        type: ApplicationCommandOptionType.Number,
        required: false,
      },
    ],
    async runInteraction(client, interaction) {
      const value = interaction.options.getNumber("value")
      if (value == 0) {
        await interaction.channel.setRateLimitPerUser(0)
        const slowmodeOn = new EmbedBuilder()
            .setTitle('Slowmode')
            .addFields([{ name: 'Statut :', value: 'Désactivé ! ❌'}])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const slowOn = await interaction.reply({ embeds: [slowmodeOn] });
      } else {
        await interaction.channel.setRateLimitPerUser(value)
        const slowmodeOff = new EmbedBuilder()
            .setTitle('Slowmode')
            .addFields([{ name: 'Statut :', value: 'Activé ! ✅'}])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const slowOff = await interaction.reply({ embeds: [slowmodeOff] });
      }
    },
};