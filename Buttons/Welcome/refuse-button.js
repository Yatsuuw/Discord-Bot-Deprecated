module.exports = {
    name: 'refuse-button',
    async runInteraction(client, interaction) {
        const fetchGuild = await client.getGuild(interaction.guild);
        await interaction.member.roles.add(fetchGuild.RoleRefuse);
        //await interaction.member.roles.add('978377114673897493');

        try{
            await interaction.member.send(`Tu n'as pas accepté les règles, je t'ai donc expulsé !`);
        } catch(e) {
            await interaction.reply(`Le membre ${interaction.member.displayName} n'a pas accepté les règles, je l'ai expulsé.`);
        }

        await interaction.member.kick('Il n\'a pas accepté les règles !')
    }
};
