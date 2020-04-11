const { Message, MessageEmbed } = require('discord.js')
const superagent = require("superagent");

module.exports = {
	name: 'wallpaper',
	description: 'Gives the user a hentai wallpaper',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/wallpaper`);
    if (!msg.channel.nsfw) return msg.channel.send(new MessageEmbed()
 .setColor('RED')
 .setDescription('**You must use this command in an nsfw channel**'))

    if(!user) return msg.channel.send(new MessageEmbed().setDescription(`**Hentai Wallpaper**`).setColor("RANDOM").setImage(body.url))
    }
}