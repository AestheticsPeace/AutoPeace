const { Message, MessageEmbed } = require('discord.js')
const countdown = require('countdown')

module.exports = {
	name: 'uptime',
	description: 'Gets the uptime of the bot',
    /**
     * @param {Message} message
     */
	execute(message, args) {

   let time = countdown(message.client.uptime, 0, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS)

   let embed = new  MessageEmbed()
   message.channel.send(new MessageEmbed()
   .setDescription(`Days: **${time.days}**\nHours: **${time.hours}**\nMinutes: **${time.minutes}**\nSeconds: **${time.seconds}**`)
   .setColor('#0099ff'))
 }
} // works