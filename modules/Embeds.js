const Discord = require("discord.js");
module.exports.Error = (message) => {
    const cmdEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Uh Oh!")
        .setDescription("**Looks like there was an error trying to do this oof**");

    return message.author.send(cmdEmbed);
};
module.exports.nsfw = (message) => {
    const cmdEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Uh Oh!")
        .setDescription("This channel isn't a NSFW. Go to an NSFW channel to use this command 😏");

    return message.channel.send(cmdEmbed);
};
module.exports.Cooldown = (message, cooldown) => {
    const cmdEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Uh Oh!")
        .setDescription("You need to calm down, you're using commands too quickly wait " + cooldown + " seconds.");

    return message.channel.send(cmdEmbed);
};
