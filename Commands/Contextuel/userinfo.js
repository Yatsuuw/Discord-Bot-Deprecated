const { EmbedBuilder, ApplicationCommandType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'userinfo',
    category: 'contextuel',
    permissions: [PermissionFlagsBits.ManageMessages],
    ownerOnly: false,
    usage: 'Utiliser le menu contextuel de Discord !',
    examples: ['Utiliser le menu contextuel de Discord !'],
    type: ApplicationCommandType.User,
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new EmbedBuilder()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, 
            //iconURL: member.user.bot ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gnome-stock_person_bot.svg/1200px-Gnome-stock_person_bot.svg.png' : 'https://www.affichage-dynamique-facile.com/wp-content/uploads/2017/03/groupe-silhouettes-1024x578.png' 
        })
            .setColor('#8e48f7')
            .setImage(member.user.displayAvatarURL())
            .addFields([
                { name: 'Nom', value: `${member.displayName}`, inline: true },
                { name: 'Modérateur', value: `${member.kickable ? '❎' : '✅'}`, inline: true },
                { name: 'Bot', value: `${member.user.bot ? '✅' : '❎'}`, inline: true },
                { name: 'Rôles', value: `${member.roles.cache.map(role => role).join(' | ').replace(' | @everyone', ' ')}` },
                { name: 'A créé son compte le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f>` },
                { name: 'A rejoint le serveur le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f>` },
            ])
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            interaction.reply({ embeds: [embed], ephemeral: true })
    }
};