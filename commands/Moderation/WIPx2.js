const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'roleall',
    description: 'Gives everyone said role', // oof
    guildOnly: true, // i had to delete the source for the many errors
    execute(msg, args) {
		if (!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**I do not have permission to role people**'))
		if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to role people**'))

        let user = msg.mentions.users.first()

        if (!member) return msg.channel.send(new MessageEmbed()
        .setColor('#0099ff')
        .setDescription('**I could not find that user**'))

        args.shift()

        let role = msg.guild.roles.find(r => r.name.startsWith(args[0])) || msg.guild.roles.get(args[0]) || msg.guild.roles.find(r => r.name === args.join(" ")) || msg.mentions.roles.first()

        if (!role) return msg.channel.send(new MessageEmbed()
        .setColor('#0099ff')
        .setDescription('**I could not find that role**'))



        msg.guild.member(user).roles.add(role)
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`**Gave ${role.toString()} to everyone**`)
        msg.channel.send(embed)
    }
}