const { EmbedBuilder, ApplicationCommandOptionType, PermissionFlagsBits, PermissionsBitField } = require('discord.js');
const { readdirSync, cp, appendFile } = require('fs');
const commandFolder = readdirSync("./Commands");

const contextDescription = {
    userinfo: 'Renvoie des informations sur l\'utilisateur.',
    avatar: 'Renvoie l\'avatar de l\'utilisateur dans le salon écrit.'
}

module.exports = {
    name: 'help',
    category: 'utils',
    permissions: [PermissionFlagsBits.SendMessages], // SEND_MESSAGES
    ownerOnly: false,
    usage: 'help <command>',
    examples: ['help', 'help ping', 'help emit'],
    description: 'Renvoie une liste de commandes filtrée par catégories !',
    options: [
        {
            name: 'command',
            description: 'Taper le nom de votre commande.',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
    ],
    async runInteraction(client, interaction, guildSettings) {
        const prefix = guildSettings.prefix;

        const cmdName = interaction.options.getString('command');
        
        if (!cmdName) {
            const noArgsEmbed = new EmbedBuilder()
                .setColor('#6e4aff')
                .addFields([{ name: 'Liste des commandes', value: `Une liste de toutes les catégories disponibles et leurs commandes. \nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\`` }])
                .setFooter({ text: "Par Yatsuu#0949 @ Discord", iconURL: interaction.user.displayAvatarURL() })
            
            for (const category of commandFolder) {
                noArgsEmbed.addFields([{
                    name: `${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    value: `\`${client.Commands.filter(cmd => cmd.category == category.toLocaleLowerCase()).map(cmd => cmd.name).join(', ')}\``
                }]);
            }

            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
        }

        const cmd = client.Commands.get(cmdName);
        if (!cmd) return interaction.reply({ content: "Cette commande n'existe pas.", ephemeral: true });

        const helpCmd = new EmbedBuilder()
            .setTitle(`${cmd.name}`)
            .setDescription(`${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}`)
            .addFields(
                { name: 'Owner', value: `${cmd.ownerOnly ? "/!\\ Pour les admins du bot uniquement /!\\" : "Non \u200b"}` },
                { name: 'Utilisation', value: `/${cmd.usage}` },
                { name: 'Exemples', value: `/${cmd.examples.join(` | /`)}` },
                { name: 'Permissions', value: `${new PermissionsBitField(cmd.permissions.map(c => BigInt(c))).toArray().join(", ")}` },
                { name: 'Informations', value: `/ = prefix pour utiliser le bot\n{} = sous commande(s) disponible(s)\n[] = option(s) obligatoire(s)\n<> = option(s) optionnelle(s)\nNe pas inclure ces caractères -> {}, [], et <> dans vos commandes.`}
            )
            .setTimestamp()
            .setFooter({ text: "Par Yatsuu#0949 @ Discord", iconURL: interaction.user.displayAvatarURL() })

        const help = await interaction.reply({ embeds: [helpCmd], ephemeral: true });
    }
};