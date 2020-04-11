const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'help',
	description: 'Prints out each command and its function',
    /**
     * @param {Message} msg
     */
	execute(msg, args) {
		const embed = new MessageEmbed()
		embed.setTitle('Help Menu')
		embed.setColor('BLUE')
		embed.setTimestamp()
		embed.setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`)

		for (let i = 0; i < Object.keys(msg.client.commands).length; i++) {
			const key = Object.keys(msg.client.commands)[i]
			if (args.length > 0 && Object.keys(msg.client.commands[key]).indexOf(args[0]) !== -1) {
				embed.fields = []
				embed.addField('Command Name', args[0])
				embed.addField('Description', msg.client.commands[key][args[0]].description)
				msg.channel.send(embed)
				return;
			}
			embed.addField(key, Object.keys(msg.client.commands[key]).join(', '))
		}
		
		msg.channel.send(embed)
	}
}