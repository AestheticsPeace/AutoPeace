const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'cat',
	description: 'Sends a random cat.',
    /**
     * @param {Message} message
     */
	execute(msg, args) {
		msg.channel.send(
			new MessageEmbed()
				.setImage(`https://cataas.com/cat?${Math.floor(Math.random()*1000)+1}`)
				.setColor('RANDOM')
				.setFooter('🐾 Meow')
				.setTimestamp()
		)
	}
}