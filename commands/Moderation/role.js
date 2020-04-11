const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'role',
    description: 'Gives the member said role', // oof
    guildOnly: true, // i had to delete the source for the many errors
    async execute(msg, args) {
		if (!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**I do not have permission to role people**'))
		if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to role people**'))

        let user = msg.mentions.users.first() 

        if (!user) return msg.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription('**I could not find that user**'))

        args.shift()

        let role = msg.mentions.roles.first() || msg.guild.roles.cache.filter(r => String(r.name).toLowerCase() === args[0]).first()
      
        if (!role) return msg.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription('**I could not find that role**'))


        msg.guild.member(user).roles.add(role).then(() => {
            msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**Gave ${role.toString()} to** ${user.tag}`))
        }).catch(e => msg.channel.send(e.msg))
        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({ size: 2048, dynamic: true }), null) // its this shit
            .addField("Action:", "Role")
            .addField("Roled", `Gave ${role.toString()} to ${user.tag}`) // undefined? 
            .addField("Date:", msg.createdAt.toLocaleString()) // this bit works
            .setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`)

        let sChannel = msg.guild.channels.cache.find(c => c.name === "logs")
        sChannel.send(embed)
    }
}

/*
        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({ size: 2048, dynamic: true }), null) // its this shit
            .addField("Action:", "role")
            .addField("Roled", `Gave ${role.toString()} to ${user.tag}`) // undefined? 
            .addField("Date:", msg.createdAt.toLocaleString()) // this bit works
            .setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`)

        let sChannel = msg.guild.channels.cache.find(c => c.name === "logs")
        sChannel.send(embed)
*/
