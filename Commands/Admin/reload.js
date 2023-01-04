const { Guild } = require('../../Models/index');
const { PermissionFlagsBits, EmbedBuilder } = require('discord.js');

// Commande nécessitant le module PM2 : démarrage du Bot avec "pm2 start .\index.js"

module.exports = {
    name: 'reload',
    category: 'admin',
    permissions: [PermissionFlagsBits.Administrator],
    ownerOnly: true,
    usage: 'reload',
    examples: ['reload'],
    description: 'Relancer le bot',
    async runInteraction(client, interaction) {
        // Pour relancer le bot lorsque les commandes sont en local dans le serveur !
        const devGuild = await client.guilds.cache.get(process.env.GUILD_ID);
        devGuild.commands.set([]);
        const restart = new EmbedBuilder()
            .setTitle('Redémarrage')
            .addFields([{ name: 'Statut :', value: 'Validé ! ✅'}])
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord" })

        const rerun = await interaction.reply({ embeds: [restart] });
        return process.exit();
    },
};