const { Message, MessageEmbed } = require('discord.js')
const superagent = require("superagent");

module.exports = {
	name: 'dog',
	description: 'Gives the user a dog',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
    let user = msg.mentions.users.first()
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/woof`);

    if(!user) return msg.channel.send(new MessageEmbed().setDescription(`**Doggo**`).setColor("RANDOM").setImage(body.url))
    }
}