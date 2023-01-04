const { ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');

const buttons = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('primary-button')
            .setLabel('Primary')
            .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
            .setCustomId('secondary-button')
            .setLabel('Secondary')
            .setStyle(ButtonStyle.Secondary),

        new ButtonBuilder()
            .setCustomId('success-button')
            .setLabel('Success')
            .setStyle(ButtonStyle.Success),
            
        new ButtonBuilder()
            .setCustomId('danger-button')
            .setLabel('Danger')
            .setStyle(ButtonStyle.Danger),

        new ButtonBuilder()
            .setURL('https://www.google.fr/')
            .setLabel('Link')
            .setStyle(ButtonStyle.Link),
    )

module.exports = {
    name: 'button',
    category: 'utils',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: true,
    usage: 'button',
    examples: ['button'],
    description: 'button',
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Cliquez sur les boutons', components: [buttons] });
    }
};