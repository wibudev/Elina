const Discord = require("discord.js")
module.exports = {
    name: "say",
    description: "Say Something plz",
    usage: "{prefix}say say something",
    enabled: true,
    guildOnly: true,
    aliases: [],
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES"],
    nsfw: false,
    cooldown: 5000,
    ownerOnly: false,
async execute(client, message, args, data) {
const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
}
