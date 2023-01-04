const mongoose = require("mongoose");

module.exports = mongoose.model(
    "warnings",
    new mongoose.Schema({
        user: String,
        userId: String,
        guild: String,
        guildId: String,
        moderator: String,
        moderatorId: String,
        reason: String,
        timestamp: String,
    })
);
