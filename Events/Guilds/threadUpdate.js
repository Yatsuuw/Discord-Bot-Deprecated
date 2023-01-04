module.exports = {
    name: 'threadUpdate',
    once: false,
    async execute(client, oldThread, newThread) {
        if (oldThread.archive && !newThread.archived) newThread.join();
    }
};