const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);
const Logger = require('../Logger');
const { ApplicationCommandType, PermissionFlagsBits } = require('discord.js');


module.exports = async client => {
    (await pGlob(`${process.cwd()}/Commands/*/*.js`)).map(async (cmdFile) => {
        const cmd = require(cmdFile);

        if (!cmd.name) return Logger.warn(`Commande non-déclenchée : pas de nom ↓\nFichier -> ${cmdFile}`);

        if (!cmd.description && cmd.type != ApplicationCommandType.User) return Logger.warn(`Commande non-déclenchée : pas de description ↓\nFichier -> ${cmdFile}`);

        if (!cmd.category) return Logger.warn(`Commande non-chargée: pas de catégorie ↓\nFichier -> ${cmdFile}`);

        if (!cmd.permissions) return Logger.warn(`Commande non-chargée: pas de permission ↓\nFichier -> ${cmdFile}`);

        if (cmd.ownerOnly == undefined) return Logger.warn(`Commande non-chargée: indiquer si la commande est ownerOnly ↓\nFichier -> ${cmdFile}`);

        if (!cmd.usage) return Logger.warn(`Commande non-chargée: ajouter une utilisation (usage) ↓\nFichier -> ${cmdFile}`);

        if (!cmd.examples) return Logger.warn(`Commande non-chargée: ajouter des exemples (examples) à votre commande ↓\nFichier -> ${cmdFile}`);

        cmd.permissions.forEach(permission => {
            if (!permissionList.includes(permission)) {
                return Logger.typo(`Commande non-chargée : erreur de typo sur la permission ${permission}\nFichier -> ${cmdFile}`)
            }
        });

        client.Commands.set(cmd.name, cmd);
        Logger.command(`- ${cmd.name}`);
    });
};

//const permissionList = ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'PRIORITY_SPEAKER', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'VIEW_GUILD_INSIGHTS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS_AND_STICKERS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_EVENTS', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES', 'MODERATE_MEMBERS'];

const permissionList = [ PermissionFlagsBits.AddReactions, PermissionFlagsBits.Administrator, PermissionFlagsBits.AttachFiles, PermissionFlagsBits.BanMembers, PermissionFlagsBits.ChangeNickname, PermissionFlagsBits.Connect, PermissionFlagsBits.CreateInstantInvite, PermissionFlagsBits.CreatePrivateThreads, PermissionFlagsBits.CreatePublicThreads, PermissionFlagsBits.DeafenMembers, PermissionFlagsBits.EmbedLinks, PermissionFlagsBits.KickMembers, PermissionFlagsBits.ManageChannels, PermissionFlagsBits.ManageEmojisAndStickers, PermissionFlagsBits.ManageEvents, PermissionFlagsBits.ManageGuild, PermissionFlagsBits.ManageMessages, PermissionFlagsBits.ManageNicknames, PermissionFlagsBits.ManageRoles, PermissionFlagsBits.ManageThreads, PermissionFlagsBits.ManageWebhooks, PermissionFlagsBits.MentionEveryone, PermissionFlagsBits.ModerateMembers, PermissionFlagsBits.MoveMembers, PermissionFlagsBits.MuteMembers, PermissionFlagsBits.PrioritySpeaker, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.RequestToSpeak, PermissionFlagsBits.SendMessages, PermissionFlagsBits.SendMessagesInThreads, PermissionFlagsBits.SendTTSMessages, PermissionFlagsBits.Speak, PermissionFlagsBits.Stream, PermissionFlagsBits.UseApplicationCommands, PermissionFlagsBits.UseEmbeddedActivities, PermissionFlagsBits.UseExternalEmojis, PermissionFlagsBits.UseExternalStickers, PermissionFlagsBits.UseVAD, PermissionFlagsBits.ViewAuditLog, PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ViewGuildInsights ]