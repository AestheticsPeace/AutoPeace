const { Message, MessageEmbed } = require('discord.js')
const Mentions = require('../../utils/Mentions.js')

module.exports = {
  name: 'unban',
  description: 'Unbans mentioned user',
  guildOnly: true,
  /**
   * @param {Message} msg
   */
  async execute(msg, args) {
    if (!msg.member.hasPermission(["BAN_MEMBERS"])) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('**You do not have permission to use this**'))
    let bot = msg.guild.members.cache.filter(m => m.user.bot)
    let banned = await Mentions.getBannedMention(msg, args)
    if (!banned) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('**Specify the User with his ID or Tag to unban**'))

    let reason = (args.shift()) && args.join(' ') || 'No reason given'

    if (!msg.guild.me.hasPermission(["BAN_MEMBERS"])) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription(`**I do not have the Permission to do that**`)) | msg.delete()

    // since most functions are `Promise`, you can use .then or .catch
    msg.guild.members.unban(banned.user, { reason: reason }).then(() => {
      msg.channel.send(new MessageEmbed().setColor('#0099ff').setDescription(`**${banned.user.tag} has been unbanned**`))
    }).catch(e => console.error(e.msg))
    // Output Stuff IM LEARNING MORE
    let embed = new MessageEmbed()
      .setColor('#0099ff')
      .setAuthor(`${msg.guild.name} Modlogs`, msg.guild.iconURL({size:2048,dynamic:true}), null) // its this shit
      .addField("Moderation:", "Unban")
      .addField("Who?:", `${banned.user.username} (${banned.user.id})`) // undefined? 
      .addField("Reason", reason)
      .addField("Date:", msg.createdAt.toLocaleString())
      .setFooter(`Executed by ${msg.author.tag} (${msg.author.id})`) // this bit works

    let sChannel = msg.guild.channels.cache.find(c => c.name === "logs")
    sChannel.send(embed)
  }
}