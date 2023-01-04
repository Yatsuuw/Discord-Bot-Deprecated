const dotenv = require("dotenv"); dotenv.config()
const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Reaction, Channel } = Partials

const client = new Client({
    intents: [ Guilds, GuildMembers, GuildMessages, MessageContent ],
    partials: [ User, Message, GuildMember, ThreadMember, Reaction, Channel ]
})

const mongoose = require('mongoose');
const Logger = require('./Utils/Logger');

['Commands', 'Buttons', 'Selects'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil', 'SelectUtil'].forEach(handler => { require(`./Utils/Handlers/${handler}`)(client) });
require('./Utils/Function')(client);

process.on('exit', code => { Logger.client(`Le processus s'est arrêté avec le code : ${code}`) });

process.on('uncaughtException', (err, origin) => {
    Logger.error(`UNCAUGHT_EXCEPTION : ${err}`);
      console.error(`Origine : ${origin}`);
});

process.on('unhandledRejection', (reason, promise) => {
    Logger.warn(`UNHANDLED_REJECTION : ${reason}`);
    console.log(promise);
});

process.on('warning', (...args) => Logger.warn(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}).then(() => { Logger.client('- connecté à la base de données'); })
.catch(err => { Logger.client(err); })

client.login(process.env.TOKEN);