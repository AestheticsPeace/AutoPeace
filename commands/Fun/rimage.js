const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'rimage',
	description: 'Sends a random image',
    /**
     * @param {Message} message
     */
	execute(msg, args) {
		msg.channel.send(
			new MessageEmbed()
				.setImage(`https://i.picsum.photos/id/${Math.floor(Math.random() * 1050)}/800/300.jpg`)
				.setColor('RANDOM')
		)
	}
}