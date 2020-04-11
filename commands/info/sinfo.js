const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'sinfo',
	description: 'Displays Server Information',
	execute(msg, args) { 
		var guild = 
		new MessageEmbed()
		.setAuthor('Server Info',  msg.guild.iconURL({ size: 2048, dynamic: true }), null)
		.setDescription(msg.guild.name)
		.addField('Server Created At', msg.guild.createdAt)
		.addField('Server Owner', msg.guild.owner.user.tag)
		.addField('Humans', msg.guild.members.cache.filter(m => !m.user.bot).size, true)    .addField('Bots', msg.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField('Current Members', msg.guild.members.cache.size, true)
		.setFooter(`Executed By ${msg.member.user.tag}`)
		.setTimestamp()
		msg.channel.send(guild)
		
		
		
		
		//message.channel.send(`Server Name: ${message.guild.name}\nCurrent Members: ${message.guild.memberCount}`);
	},
};