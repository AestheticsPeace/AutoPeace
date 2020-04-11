const { Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'poll',
  description: 'Creates a poll',
  /**
   * @param {Message} msg
   */
  async execute(msg, args) {
    let question = args.join(" ")
    if(!question) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('You must include arguments'))
    if(question.length > 2048) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('Poll too long'))
   
    let embed = new MessageEmbed()
    .setDescription(`**${args.join(" ")}**`)
    .setColor("RANDOM")

    msg.channel.send(embed).then(async m => {
       await m.react("✅")
       await m.react("❌")
    })
  }
}