const { Guild } = require('../Models');

module.exports = client => {
    client.getGuild = async guild => {
        const guildData = await Guild.findOne({ id: guild.id });
        return guildData;
    };

    client.createGuild = async guild => {
        const createGuild = new Guild({ id: guild.id, name: guild.name });
        createGuild.save().then(g => console.log(`Nouveau serveur : ${g.name} -> (${g.id})`));
    }

    client.updateGuild = async (guild, settings) => {
        let guildData = await client.getGuild(guild);
//        if (typeof guildData != 'object') guildData = {};
        for (const key in settings) {
            if (guildData[key] != settings[key]) guildData[key] = settings[key]
        }
        return guildData.updateOne(settings);
    }
}