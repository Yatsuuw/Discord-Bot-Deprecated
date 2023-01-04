module.exports = {
    name: 'messageReactionAdd',
    once: false,
    async execute(client, messageReaction, user) {
        //🟥 🟩 🟦
        const message = messageReaction.message;
        const emojiName = messageReaction.emoji.name;
        const member = message.guild.members.cache.get(user.id);
        if (member.user.bot) return;

        if (messageReaction.partials) {
            try {
                await messageReaction.fetch();
            } catch {
                console.log('Impossible de récupérer les messages.');
                return;
            }
        }

        if (emojiName === '🟥') message.delete();
        if (emojiName === '🟦') message.reactions.removeAll();
        if (emojiName === '🟩') message.channel.send('Je suis le carré vert ! 🟩');
    },
};