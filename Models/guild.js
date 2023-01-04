const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    name: String,
    id: String,
    logChannel: { 'type': String, 'default': 'x' },
    JoinChannel: { 'type': String, 'default': 'y' },
    QuitChannel: { 'type': String, 'default': 'z' },
    RoleAccept: { 'type': String, 'default': 'a' },
    RoleRefuse: { 'type': String, 'default': 'b'},
});

module.exports = mongoose.model('Guild', guildSchema);