const { Message, MessageEmbed } = require('discord.js')
const superagent = require("superagent");

module.exports = {
	name: 'avatar',
	description: 'Embeds the users avatar',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) { 
    let user = msg.mentions.users.first() || msg.author

    msg.channel.send(new MessageEmbed().setDescription(`${user}'s Avatar`).setColor("RANDOM").setImage(user.displayAvatarURL({size:2048, dynamic:true})))
    //
    }
}