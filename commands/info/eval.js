const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'eval',
	description: 'Evaluates input, Only usable by whitelisted ID',
    /**
     * @param {Message} msg
     */
	execute(msg, args) {
		if (['430437160613707796','321332200668790786', '364579595044782080'].indexOf(msg.author.id) === -1) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to use this**'))
		try {// ok restart it pls LOL
			const response = String(eval(args.join(' ')))
			msg.channel.send(`\`\`\`js\n${response.replace(msg.client.token, 'lol you aren\'t getting the token, bye.... Noob').replace(/\s+/g, ' ').split('\\').join('\\\\').split('`').join('\`')}\n\`\`\``)
			.catch(async (e) =>  {
				msg.channel.send(String(e))
			})
		} catch (ex) {
			msg.channel.send(`\`\`\`c\n${ex}\n\`\`\``) // perfect
		}
	}
}