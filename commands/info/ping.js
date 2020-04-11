const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ping',
	description: 'Ping!',
    /**
     * @param {Message} msg
     */
	async execute(msg, args) { 
		// time
		let t1 = Date.now()
		await msg.fetch()
		let m = await msg.channel.send(new MessageEmbed().setTitle(':ping_pong:').setColor('GREEN'))
		m.edit(
			new MessageEmbed()
				.setTitle(':ping_pong:')
				.setDescription([
					`Bot Latency (DateTime based): ${Math.ceil(Date.now() - t1)} ms`,
					`Bot Latency (Message based): ${Math.ceil(m.createdTimestamp - msg.createdTimestamp)} ms`,
					`Gateway Latency: ${msg.client.ws.ping.toFixed(0)} ms`
				].join('\n'))
				.setColor('GREEN')
				.setFooter(`Executed by ${msg.author.tag}`)
		)
	},
};