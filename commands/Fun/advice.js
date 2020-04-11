const { Message, MessageEmbed } = require('discord.js')
const request = require('request')

module.exports = {
	name: 'advice',
	description: 'Returns a piece of advice in an embed',
    /**
     * @param {Message} message
     */
	execute(msg, args) {
		let advice = request("http://api.adviceslip.com/advice", function(err, res, body) {
			try {
				let cnj = JSON.parse(body)
				msg.channel.send(new MessageEmbed().setDescription(cnj.slip.advice).setColor("RANDOM"))
			} catch (e) {
				console.log(e)
			}
		});
	}
}