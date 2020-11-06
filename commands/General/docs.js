const fetch = require('node-fetch')
module.exports = {
    name: "docs",
    description: "discordjs guide search",
    usage: "{prefix}docs search about something",
    enabled: true,
    guildOnly: true,
    aliases: [],
    memberPermissions: [],
    botPermissions: [],
    nsfw: false,
    cooldown: 5000,
    ownerOnly: false,

   async execute(client, message, args){
     if (!args[0]) return message.channel.send(`Please Give Something To Search`)
       const searchQuery = args.join(" ");
       const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(searchQuery)}`;

       fetch(url)
       .then((res)=> res.json())
       .then((embed)=>{
           if(embed && !embed.error){
               message.channel.send({embed})
           }else { 
               message.reply(`
               I don't know about you but ${searchQuery} isn't a valid doc.
               `)
           };
       })
       .catch((e)=>{
           message.reply('Woops, there\'s been an error. Check console for details.');
       });
    
    },
};
