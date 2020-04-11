const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: '8ball',
	description: 'Returns an answer to your question',
    /**
     * @param {Message} message
     */
	execute(msg, args) {
		let question = args.join(" ")
		if(!question) return msg.reply('You need to ask a question!')
		if (question.length > 2000) return msg.reply('Question may not exceed 2000 characters.')
		let embed = new MessageEmbed()
		.setDescription(`**${question}**\n\nAnswer: \`${["yes", "no"][Math.floor(Math.random() * 1.75)]}\``)
		.setColor("RANDOM")
		msg.channel.send(embed)
	}
}