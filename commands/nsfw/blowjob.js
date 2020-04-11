const { Message, MessageEmbed } = require('discord.js')
const superagent = require("superagent");

module.exports = {
	name: 'blowjob',
	description: 'Gives the user a hentai blowjob',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/bj`);
    if (!msg.channel.nsfw) return msg.channel.send(new MessageEmbed()
 .setColor('RED')
 .setDescription('**You must use this command in an nsfw channel**'))

    if(!user) return msg.channel.send(new MessageEmbed().setDescription(`**Hentai!**`).setColor("RANDOM").setImage(body.url))
    }
}