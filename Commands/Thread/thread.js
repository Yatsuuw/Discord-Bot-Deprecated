const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "thread",
    category: "thread",
    permissions: [PermissionFlagsBits.ManageThreads],
    ownerOnly: false,
    usage: "thread {join|leave|archive|unarchive|delete}",
    examples: ["thread join", "thread leave"],
    description: "Commande concernant les threads",
    options: [
      {
        name: "join",
        description: "Rejoindre un thread",
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "leave",
        description: "Quitter un thread",
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "archive",
        description: "Archiver un thread",
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "unarchive",
        description: "Désarchiver un thread",
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "delete",
        description: "Supprimer un thread",
        type: ApplicationCommandOptionType.Subcommand,
        options : [ { name: 'channel', type: ApplicationCommandOptionType.String, description: 'ID du channel', required: true }],
      },
    ],
    async runInteraction(client, interaction, member) {
        const fetchGuild = await client.getGuild(interaction.guild);
        let thread = interaction.channel;
        if (!thread.isThread()) return interaction.reply('Impossible de taper cette commande : vous n\'êtes pas dans un thread.');

        if (interaction.options.getSubcommand() === 'join') {
            const join = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: 'Je viens de rejoindre le Thread ! ✅'}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const joined = await interaction.reply({ embeds: [join] });

            const logChannel = client.channels.cache.get(fetchGuild.logChannel);

            const joinLog = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: `Je viens de rejoindre le Thread "${thread.name}" ! ✅`}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const joinedLog = await logChannel.send({ embeds: [joinLog] });

            if (thread.joinable) await thread.join();


        } else if (interaction.options.getSubcommand() === 'leave') {
            const leave = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: 'Je viens de quitter le Thread ! ✅'}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const left = await interaction.reply({ embeds: [leave] });

            const logChannel = client.channels.cache.get(fetchGuild.logChannel);

            const leaveLog = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: `Je viens de quitter le Thread "${thread.name}" ! ✅`}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const leftLog = await logChannel.send({ embeds: [leaveLog] });

            await thread.leave();


        } else if (interaction.options.getSubcommand() === 'archive') {
            const archive = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: 'Je viens d\'archiver le Thread ! ✅'}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const archived = await interaction.reply({ embeds: [archive] });

            const logChannel = client.channels.cache.get(fetchGuild.logChannel);

            const archiveLog = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: `Je viens d'archiver le Thread "${thread.name}" ! ✅`}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const archivedLog = await logChannel.send({ embeds: [archiveLog] });

            await thread.setArchived(true);


        } else if (interaction.options.getSubcommand() === 'unarchive') {
            const unarchive = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: 'Je viens de désarchiver le Thread ! ✅'}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const unarchived = await interaction.reply({ embeds: [unarchive] });

            const logChannel = client.channels.cache.get(fetchGuild.logChannel);

            const archiveLog = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: `Je viens de désarchiver le Thread "${thread.name}" ! ✅`}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const archivedLog = await logChannel.send({ embeds: [archiveLog] });

            await thread.setArchived(false);


        } else if (interaction.options.getSubcommand() === 'delete') {
            //const channelId = interaction.options.getString('channel');
            //const logChannel = client.channels.cache.get(channelId);
            const logChannel = client.channels.cache.get(fetchGuild.logChannel);

            const deleteLog = new EmbedBuilder()
              .setTitle('Thread')
              .addFields([{ name: 'Action', value: `Je viens de supprimer le Thread "${thread.name}" ! ✅`}])
              .setTimestamp()
              .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const deletedLog = await logChannel.send({ embeds: [deleteLog] });

            await thread.delete();
        }
    },
};