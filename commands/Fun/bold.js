const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'bold',
	description: 'Makes your message bold.',
    /**
     * @param {Message} message
     */
	execute(msg, args) {
		if(args.join(" ").length > 2000) return msg.reply('that message was too long, may not exceed 2048 characters.')

		msg.channel.send(`**${args.join(" ")}**`)
	}
}