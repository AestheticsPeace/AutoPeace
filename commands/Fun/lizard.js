const { Message, MessageEmbed } = require('discord.js')
const superagent = require("superagent");

module.exports = {
	name: 'lizard',
	description: 'Gives the user a lizard',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/lizard`);

    if(!user) return msg.channel.send(new MessageEmbed().setDescription(`**Lizard**`).setColor("RANDOM").setImage(body.url))
    }
}