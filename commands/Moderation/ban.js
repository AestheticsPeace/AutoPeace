const { Message, MessageEmbed } = require('discord.js')
const Mentions = require('../../utils/Mentions.js')

module.exports = {
    name: 'Ban',
    description: 'Bans mentioned user',
    guildOnly: true,
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {
        if (!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**I do not have permission to ban**'))
        if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to ban**'))

        let member = await Mentions.getMemberMention(msg, args) // it uses user not member
        if (!member) return msg.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription('**You need to specify a user to ban**'))

        let reason = (args.shift()) && args.join(' ') || 'No reason given'

        if (!member.bannable) return msg.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription('**This user cannot be banned**'))

        member.ban().then(() => {
            msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**${member.user.tag} has been banned**`))
        }).catch(e => console.error(e.msg)) // doesnt p- FUCK ME IM DUMBBBBBBBBBB
        // Output Stuff IM LEARNING MORE
        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({ size: 2048, dynamic: true }), null) // its this shit
            .addField("Moderation:", "Ban")
            .addField("Who?:", `${member.user.username} (${member.user.id})`) // undefined? 
            .addField("Reason", reason)
            .addField("Date:", msg.createdAt.toLocaleString()) // this bit works
            .setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`)

        let sChannel = msg.guild.channels.cache.find(c => c.name === "ban-announcements")
        sChannel.send(embed)

    }
}
//
/*
 msg.guild.member(user).ban().then(() => {
      msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**${user.tag} has been banned**`))
    }).catch(e => console.error(e.msg))
    // Output Stuff IM LEARNING MORE
    let embed = new MessageEmbed()
      .setColor('#0099ff')
      .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({size:2048,dynamic:true}), null) // its this shit
      .addField("Moderation:", "ban")
      .addField("Who?:", `${user.username} (${user.id})`) // undefined?
      .addField("Reason", reason)
      .addField("Date:", msg.createdAt.toLocaleString()) // this bit works
      .setFooter(`Executed by ${msg.author.tag} (`${msg.author.id})`)
*/

