const { Message, MessageEmbed } = require('discord.js')
const superagent = require("superagent");

module.exports = {
	name: 'foxgirl',
	description: 'Sends a picture of a foxgirl',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/fox_girl`);
    if (!msg.channel.nsfw) return msg.channel.send(new MessageEmbed()
    .setColor('RED')
    .setDescription('**You must use this command in an nsfw channel**'))

    if(!user) return msg.channel.send(new MessageEmbed().setDescription(`**FoxGirl!**`).setColor("RANDOM").setImage(body.url).setFooter('ฅ(≈>ܫ<≈)♥').setTimestamp())
    }
}