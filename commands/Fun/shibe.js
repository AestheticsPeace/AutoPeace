const { Message, MessageEmbed } = require('discord.js')
const request = require('request')

module.exports = {
	name: 'shibe',
	description: 'Returns a picture of a random Shibe.',
    /**
     * @param {Message} message
     */
	execute(msg, args) {
		request.get(`http://shibe.online/api/shibes?count=${Math.floor(Math.random()*100)}&urls=true`, (e,r,b) => {
			let json = JSON.parse(b)
			msg.channel.send(
				new MessageEmbed()
					.setImage(json[Math.floor(Math.random()*Object.keys(json).length)])
					.setColor('RANDOM')
					.setFooter('🐾 Woof')
					.setTimestamp()
			)
		})
	}
}