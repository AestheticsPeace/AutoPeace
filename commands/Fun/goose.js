const { Message, MessageEmbed } = require('discord.js')
const superagent = require("superagent");

module.exports = {
	name: 'goose',
	description: 'Gives the user a goose',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/goose`);

    if(!user) return msg.channel.send(new MessageEmbed().setDescription(`**Goose**`).setColor("RANDOM").setImage(body.url))
    }
}