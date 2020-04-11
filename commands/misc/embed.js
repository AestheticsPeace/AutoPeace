const { Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'embed',
  description: 'Embeds the arguments provided',
  /**
   * @param {Message} msg
   */
  execute(msg, args) {
    if (args.join(" ").length > 2048) return msg.channel.send(new MessageEmbed()
      .setColor('RED')
      .setDescription('That message was to long'))

    msg.channel.send(new MessageEmbed()
      .setColor('#0099ff')
      .setDescription(`**${args.join(" ")}**`)
    )
  } // LOL
} // ima try find out how to do the snipe cmd