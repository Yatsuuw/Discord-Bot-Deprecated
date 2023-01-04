const guild = require('../../Models/guild');
const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'dbconfig',
    category: 'admin',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: false,
    usage: 'dbconfig [key] <value>',
    examples: ['dbconfig', 'dbconfig logChannel ?', 'dbconfig logChannel'],
    description: 'Configurer les données de la base de données',
    options: [
        {
            name: 'key',
            description: 'Choisir une clef à modifier ou à afficher.',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: 'logChannel',
                    value: 'logChannel'
                },
                {
                    name: 'JoinChannel',
                    value: 'JoinChannel'
                },
                {
                    name: 'QuitChannel',
                    value: 'QuitChannel'
                },
                {
                    name: 'RoleAccept',
                    value: 'RoleAccept'
                },
                {
                    name: 'RoleRefuse',
                    value: 'RoleRefuse'
                },
            ]
        },
        {
            name: 'value',
            description: 'Choisir la nouvelle valeur pour votre clef.',
            type: ApplicationCommandOptionType.String
        },
    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == 'logChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { logChannel: value });
                const logChan = new EmbedBuilder()
                    .setTitle('Base de données')
                    .addFields([{ name: 'Nouvelle valeur de logChannel :', value: `${value}`}])
                    .setTimestamp()
                    .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

                const logbdd = await interaction.reply({ embeds: [logChan] });
            } else {
                const logC = new EmbedBuilder()
                .setTitle('Base de données')
                .addFields([{ name: 'Valeur de logChannel :', value: `${guildSettings.logChannel}` }])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const loggedC = await interaction.reply({ embeds: [logC] });
            }

        } else if (key == 'JoinChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { JoinChannel: value });
                const joinChan = new EmbedBuilder()
                    .setTitle('Base de données')
                    .addFields([{ name: 'Nouvelle valeur de joinChannel :', value: `${value}`}])
                    .setTimestamp()
                    .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

                const joinbdd = await interaction.reply({ embeds: [joinChan] });
            } else {
            const joinC = new EmbedBuilder()
                .setTitle('Base de données')
                .addFields([{ name: 'Valeur de joinChannel :', value: `${guildSettings.JoinChannel}`}])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const joinedbdd = await interaction.reply({ embeds: [joinC] });
            }

        } else if (key == 'QuitChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { QuitChannel: value });
                const quitChan = new EmbedBuilder()
                    .setTitle('Base de données')
                    .addFields([{ name: 'Nouvelle valeur de QuitChannel :', value: `${value}`}])
                    .setTimestamp()
                    .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

                const quitbdd = await interaction.reply({ embeds: [quitChan] });
            } else {
            const quittedChan = new EmbedBuilder()
                .setTitle('Base de données')
                .addFields([{ name: 'Valeur de QuitChannel :', value: `${guildSettings.QuitChannel}`}])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const quitlogChan = await interaction.reply({ embeds: [quittedChan] });
            }

        } else if (key == 'RoleAccept') {
            if (value) {
                await client.updateGuild(interaction.guild, { RoleAccept: value });
                const RAcceptChan = new EmbedBuilder()
                    .setTitle('Base de données')
                    .addFields([{ name: 'Nouvelle valeur de RoleAccept :', value: `${value}`}])
                    .setTimestamp()
                    .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

                const logRAcceptChan = await interaction.reply({ embeds: [RAcceptChan] });
            } else {
            const RAcceptChanLog = new EmbedBuilder()
                .setTitle('Base de données')
                .addFields([{ name: 'Valeur de RoleAccept :', value: `${guildSettings.RoleAccept}`}])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const loggedRAcceptChan = await interaction.reply({ embeds: [RAcceptChanLog] });
            }

        } else if (key == 'RoleRefuse') {
            if (value) {
                await client.updateGuild(interaction.guild, { RoleRefuse: value });
                const RRefuseChan = new EmbedBuilder()
                    .setTitle('Base de données')
                    .addFields([{ name: 'Nouvelle valeur de RoleRefuse :', value: `${value}`}])
                    .setTimestamp()
                    .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

                const logRRefuseChan = await interaction.reply({ embeds: [RRefuseChan] });
            } else {
            const RRefuseChanLog = new EmbedBuilder()
                .setTitle('Base de données')
                .addFields([{ name: 'Valeur de RoleRefuse :', value: `${guildSettings.RoleRefuse}`}])
                .setTimestamp()
                .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const loggedRRefuseChan = await interaction.reply({ embeds: [RRefuseChanLog] });
            }
        }
    }
};