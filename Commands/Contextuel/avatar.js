const { EmbedBuilder, ApplicationCommandType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'avatar',
    category: 'contextuel',
    permissions: [PermissionFlagsBits.SendMessages],
    ownerOnly: false,
    usage: 'Utiliser le menu contextuel de Discord !',
    examples: ['Utiliser le menu contextuel de Discord !'],
    type: ApplicationCommandType.User,
    async runInteraction(client, interaction) {
        const member  = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new EmbedBuilder()
            .setAuthor({ name: `${member.user.tag}` })
            .setColor('#8e48f7')
            .setImage(member.user.displayAvatarURL())
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            interaction.reply({ embeds: [embed], ephemeral: true })
    }
};