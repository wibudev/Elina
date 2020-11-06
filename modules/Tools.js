const Discord = require("discord.js");
const config = require("../config.json")
const util = require("util"),
fs = require("fs"),
readdir = util.promisify(fs.readdir);
module.exports.MapCats = async function(client){

  const embed = new Discord.MessageEmbed()
      embed.setAuthor("Help command Elina Bot");
      embed.setColor(config.color)
      embed.setThumbnail(client.user.displayAvatarURL())
      embed.setDescription("Command Prefix n!<command>, Example: E!help. ")
    let folders = await readdir("./commands/");
    folders.forEach(cat => {
    let commandFiles = fs.readdirSync('./commands/' + cat + "/").filter(file => file.endsWith('.js'))
      if(commandFiles.length > 0){
        let files = commandFiles.map(cmd => "`" + cmd.replace(".js", "") + "`").join(", ");
        embed.addField(cat, files)
      }
    });
    embed.setFooter(`You can do n!help [command] to see aditional info!`);
    return embed;



};
