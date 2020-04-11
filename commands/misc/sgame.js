const { Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'sgame',
  description: 'Suggest a game for the Devs to create',
  /**
   * @param {Message} msg
   */
  async execute(msg, args) {
    if (args.join(" ").length > 2048) return msg.channel.send(new MessageEmbed()
    .setColor('RED')
    .setDescription('That message was to long'))

    let channel = msg.guild.channels.cache.filter(chan => chan.id === '696583035466022932').first()
    if (!channel) throw new Error('CHANNEL_NOT_FOUND')
    // first you must assign it to a variable
    let m = await channel.send(new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Game Request')
      .setDescription(`**${args.join(" ")}**`)
      .setTimestamp()
      .setFooter(`Requested by ${msg.author.tag} (${msg.author.id})`)
    )
    await m.react("✅")
    await m.react("❌")
  }
}
// msg.guild.channels.cache.filter(chan => chan.id === '696583035466022932')[0]
