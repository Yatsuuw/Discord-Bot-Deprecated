module.exports = {
    name: 'threadCreate',
    once: false,
    async execute(client, thread, member) {
        const fetchGuild = await client.getGuild(thread.guild);

        if (thread.isTextBased()) thread.join();
        //const logChannel = client.channels.cache.get(process.env.THREAD_CHANNEL);
        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        logChannel.send(`Nom du thread : ${thread.name}`);
    }
}