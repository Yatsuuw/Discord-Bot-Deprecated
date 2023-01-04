const { ApplicationCommandOptionType, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'emit',
    category: 'admin',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: true,
    usage: 'emit [eventName]',
    examples: ['emit', 'emit guildMemberAdd'],
    description: 'Émettre un évènement au choix !',
    options: [
        {
            name: 'event',
            description: 'Choisir un évènement à émettre.',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                },
                {
                    name: 'guildCreate',
                    value: 'guildCreate'
                },
            ]
        }
    ],
    async runInteraction(client, interaction) {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);

            const memberAdd = new EmbedBuilder()
                .setTitle('Balise d\'émetteur d\'évènement')
                .addFields([
                    { name: 'Évènement :', value: 'guildMemberAdd !' },
                    { name: 'Évènement émit ?', value: '✅' }
                ])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const memberAdded = await interaction.reply({ embeds: [memberAdd], ephemeral: true });

        } else if (evtChoices == 'guildCreate') {
            client.emit('guildCreate', interaction.guild);

            const guildCreate = new EmbedBuilder()
                .setTitle('Balise d\'émetteur d\'évènement')
                .addFields([
                    { name: 'Évènement :', value: 'guildCreate !' },
                    { name: 'Évènement émit ?', value: '✅' }
                ])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const guildCreated = await interaction.reply({ embeds: [guildCreate], ephemeral: true });

        } else {
            client.emit('guildMemberRemove', interaction.member);

            const memberRemove = new EmbedBuilder()
                .setTitle('Balise d\'émetteur d\'évènement')
                .addFields([
                    { name: 'Évènement :', value: 'guildMemberAdd !' },
                    { name: 'Évènement émit ?', value: '✅' }
                ])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const memberRemoved = await interaction.reply({ embeds: [memberRemove], ephemeral: true });
        }
    }
};