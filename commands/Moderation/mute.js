const { Message, MessageEmbed } = require('discord.js')
const Mentions = require('../../utils/Mentions.js')
const Timer = require('../../utils/Timer.js')


module.exports = {
    name: 'mute',
    description: 'Mutes mentioned member', // oof
    guildOnly: true, // i had to delete the source for the many errors
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {
        if (!msg.guild.me.hasPermission(['MANAGE_ROLES'])) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**I do not have permission to mute**'))
        if (!msg.member.hasPermission(['MANAGE_ROLES'])) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to mute**'))

        if (!msg.guild.roles.cache.find(r => r.name === "Muted")) return msg.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription('Could not find a muted role'))

        let member = await Mentions.getMemberMention(msg, args)

        if (!member) return msg.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription('**You need to specify a member**'))

        if (member.roles.cache.filter(r => r.name === 'Muted').size !== 0) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('**This user has already been muted**'))

        args.shift()
        Timer.setTimer('mute', msg.guild, member.user, args.join(' '))
        let timerArgs = undefined
        if (Timer.getTimer('mute', msg.guild, member.user, args.join(' '))) timerArgs = args.shift()

        let reason = args.join(' ') || 'No reason given'

        member.roles.add(msg.guild.roles.cache.find(r => r.name === "Muted").id).then(() => {
            msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**${member.user.tag} has been muted**`))

            if (Timer.getTimer('mute', msg.guild, member.user)) {
                let interv = setInterval(() => {
                    // I nearly used "local" for the variable datatype LOL
                    let returned = Timer.getTimer('mute', msg.guild, member.user)
                    if ((returned && returned <= 0) || typeof(returned) === 'undefined') {
                        clearInterval(interv)
                        try {
                            member.roles.remove(msg.guild.roles.cache.find(r => r.name === 'Muted')).then(() => {
                                msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**${member.user.tag} was auto unmuted**`))
                            })
                        } catch {

                        }
                    }
                }, 1000)
            }
        }).catch(e => console.error(e.msg))

        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({ size: 2048, dynamic: true }), null) // its this shit
            .addField("Moderation:", "Mute")
            .addField("Who?:", `${member.user.tag} (${member.user.id})`) // undefined? 
            .addField("Reason", reason)
            .addField('Length', timerArgs || 'None')
            .addField("Date:", msg.createdAt.toLocaleString()) // this bit works
            .setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`)

        let sChannel = msg.guild.channels.cache.find(c => c.name === "logs")
        sChannel.send(embed)
    }
}