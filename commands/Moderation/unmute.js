const { Message, MessageEmbed } = require('discord.js')
const Mentions = require('../../utils/Mentions.js')


module.exports = {
	name: 'unmute',
    description: 'Unmutes mentioned member', // oof
    guildOnly: true, // i had to delete the source for the many errors
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {
		if (!msg.guild.me.hasPermission(['MANAGE_ROLES'])) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**I do not have permission to unmute**'))
		if (!msg.member.hasPermission(['MANAGE_ROLES'])) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to unmute**'))
        
        let member = await Mentions.getMemberMention(msg, args)

        if(!member) return msg.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription('**You need to specify a member**'))

        let reason = (args.shift()) && args.join(' ') || 'No reason given'

        member.roles.remove(msg.guild.roles.cache.find(r => r.name === "Muted").id).then(() => {
            msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**${member.user.tag} was unmuted**`))
        }).catch(e => console.error(e.msg))
    
        let embed = new MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({ size: 2048, dynamic: true }), null) // its this shit
        .addField("Moderation:", "Unmute")
        .addField("Who?:", `${member.user.tag} (${member.user.id})`) // undefined? 
        .addField("Date:", msg.createdAt.toLocaleString()) // this bit works
        .setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`)

    let sChannel = msg.guild.channels.cache.find(c => c.name === "logs")
    sChannel.send(embed)
    }
}