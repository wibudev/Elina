const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: "createtext",
    description: "Create Text Channel",
    usage: "createtext",
    enabled: true,
    guildOnly: true,
    aliases: [],
    memberPermissions: [],
    botPermissions: ["MANAGE_CHANNELS"],
    nsfw: false,
    cooldown: 5000,
    ownerOnly: false,

async execute(client, message, args, data) {
	if (
		!message.member.hasPermission('ADMINISTRATOR', {
			checkAdmin: true,
			checkOwner: true
		})
	)
		return message.channel.send(
			"**You don't have the permission to do this**"
		);
const name = message.content.replace(data.guild.prefix+'createtext', '');
	message.guild.channels
		.create(name, {
			type: 'text'
		})
		.then(channel => {
	});
}}
