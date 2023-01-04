module.exports = {
    name: 'accept-button',
    async runInteraction(client, interaction, member) {
        const fetchGuild = await client.getGuild(interaction.guild);
        await interaction.member.roles.add(fetchGuild.RoleAccept);
//        await interaction.member.roles.add('978377114673897493');
        await interaction.reply({ content: 'Vous avez accepté les règles ! Vous pouvez accéder au serveur.', ephemeral:  true });
    }
};