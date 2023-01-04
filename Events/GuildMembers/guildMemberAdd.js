const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member, interaction) {
        const fetchGuild = await client.getGuild(member.guild);

        const memberAdd = new EmbedBuilder() // message actuellement actif
            .setAuthor({ name: `${member.user.tag}`, iconURL: member.user.displayAvatarURL() })
            .setColor('#21ff81')
            .setDescription(`Un nouvel utilisateur a rejoint !`)
            .addFields([
                { name: `Utilisateur`, value: `${member}` },
                { name: 'Ancienneté sur Discord', value: `Iel est sur Discord depuis <t:${parseInt(member.user.createdTimestamp / 1000)}:R>` }
            ])
            .setImage("https://media.tenor.com/QTbfXaY9f1sAAAAd/aoi-inuyama-yuru-camp.gif")
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const logChannel = client.channels.cache.get(fetchGuild.JoinChannel);
        logChannel.send({ embeds: [memberAdd] });
    }
}