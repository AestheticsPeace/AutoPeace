const { Message, MessageEmbed } = require('discord.js')
const ascii = require('ascii-art')

module.exports = {
	name: 'ascii',
	description: 'Returns text in ascii art',
    /**
     * @param {Message} message
     */
	execute(msg, args) {

    if(!msg.member.hasPermission(["VIEW_AUDIT_LOG"])) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('**You do not have perms to use this**'))

    let text = args.join(" ")

    ascii.font(text, 'Doom', function(rendered) {
        console.log(rendered)
        rendered = rendered.trimRight()
        if (rendered.length > 2000) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('**That message was too long**'))
        msg.channel.send(rendered, {
            code: 'md',
        })
    })

   
    }
}