const { ActionRowBuilder, StringSelectMenuBuilder, PermissionFlagsBits } = require('discord.js');

const selectMenu = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(3)
            .addOptions([
                {
                    label: 'Vert',
                    description: 'Choisir la couleur verte',
                    value: `1058131964495921224`,
                    // 977241690190524509
                },
                {
                    label: 'Rouge',
                    description: 'Choisir la couleur rouge',
                    value: `1058132043134926879`,
                    // 977241720825724938
                },
                {
                    label: 'Bleu',
                    description: 'Choisir la couleur orange',
                    value: `1058131893037584384`,
                    // 977241832385806346
                }
            ])
    )

module.exports = {
    name: 'roles',
    category: 'utils',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: true,
    usage: 'roles',
    examples: ['roles'],
    description: 'roles',
    async runInteraction(client, interaction, member) {
        await interaction.reply({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
    }
};