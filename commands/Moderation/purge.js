const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'purge',
    description: 'Purges channel for how many messages you want',
    /**
     * @param {Message} message
     */
	execute(msg, args) {
		if (!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**I do not have permission to purge**'))
		if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to purge**'))

        const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return msg.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription('**You need to put the amount of messages to purge**'))
        } else if (amount < 1 || amount > 100) { //
            return msg.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription('**You need to put a number between 1-100**'))
      }
        msg.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            msg.channel.send(new MessageEmbed()
            .setColor('RED')
            .setDescription('**Error purging messages in this channel**'))
        });
    }
};