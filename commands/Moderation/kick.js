const { Message, MessageEmbed } = require('discord.js')
const Mentions = require('../../utils/Mentions.js')

module.exports = {
    name: 'Kick',
    description: 'Kicks the mentioned user',
    guildOnly: true,
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
        if (!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**I do not have permission to kick**'))
        if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to kick**'))
        let member = await Mentions.getMemberMention(msg, args)
        if (!member) return msg.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription('**You need to specify a user to kick**'))

        if (!member.kickable) return msg.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription('**This user cannot be kicked**'))

        let reason = (args.shift()) && args.join(' ') || 'No reason given'

        let user = msg.mentions.users.first()
        msg.guild.member(user).kick().then(() => {
            msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**${user.tag} has been kicked**`))
        }).catch(e => console.error(e.msg))
        let embed = new MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({ size: 2048, dynamic: true }), null) // its this shit
        .addField("Moderation:", "Kick")
        .addField("Who?:", `${user.tag} (${user.id})`) // undefined? 
        .addField("Reason", reason)
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
            .addField("Moderation:", "kick")
            .addField("Who?:", `${user.tag} (${user.id})`) // undefined? 
            .addField("Reason", reason)
            .addField("Date:", msg.createdAt.toLocaleString()) // this bit works
            .setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`)

        let sChannel = msg.guild.channels.cache.find(c => c.name === "logs")
        sChannel.send(embed)
*/