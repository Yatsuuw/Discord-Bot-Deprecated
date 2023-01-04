const { Timestamp } = require('bson');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);
        //const fetchKickLog = await member.guild.fetchAuditLogs({ limit: 1, type: 'MEMBER_KICK' })

        //const kickLog = fetchKickLog.entries.first();
        //const { target, reason } = kickLog;
        //let isMemberKick = false
        //+ Kick ? : ${isMemberKick ? `✅ (raison : ${reason})` : '❎'}

        //if (target.id === member.id) isMemberKick = true

        const memberRemove = new EmbedBuilder() // message actuellement actif
            .setAuthor({ name: `${member.user.tag}`, iconURL: member.user.displayAvatarURL() })
            .setColor('#21ff81')
            .setDescription(`Un utilisateur est parti !`)
            .addFields([
                { name: `Utilisateur`, value: `${member}` },
                { name: `Présence`, value: `<t:${parseInt(member.joinedTimestamp / 1000)}:R>, iel nous avait rejoint !` }
            ])
            .setImage("https://media.tenor.com/7z3LmdF1gb8AAAAC/bye-bye-anime-yoru-camp.gif")
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

            const logChannel = client.channels.cache.get(fetchGuild.QuitChannel);
            logChannel.send({ embeds: [memberRemove] });
    }
}