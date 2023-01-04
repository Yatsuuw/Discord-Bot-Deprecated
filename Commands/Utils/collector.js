const { PermissionFlagsBits, ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'collector',
    category: 'utils',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: false,
    usage: 'collector [message]',
    examples: ['collector Bouh'],
    description: 'Recupère le nombre de messages comportant un certain mot dans un laps de temps défini à 5 secondes.',
    options: [
        {
            name: "message",
            description: "Le message à collecter",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async runInteraction(client, interaction) {
        const messageToCollect = interaction.options.getString('message');
        await interaction.reply(`Tapez le message ${messageToCollect} !`);
        const filter = msg => msg.content.includes(messageToCollect) && msg.author.bot === false;
        const collector = interaction.channel.createMessageCollector({ filter, time: 5000 });
        let counter = 0;

        collector.on('collect', msg => {
            counter ++;
            //console.log(counter);
            //console.log(`Collected ${msg.content}`);
        });

        collector.on('ignore', msg => {
            console.log(`Ignoring ${msg.content}`);
        });

        collector.on('end', async msg => {
        const collect = new EmbedBuilder()
            .setTitle('Messages collectés')
            .addFields([{ name: 'Nombre :', value: `Il y a ${counter} messages collectés comportant le mot "${messageToCollect}"`}])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const collected = await interaction.followUp({ embeds: [collect] });
        });
    }
};