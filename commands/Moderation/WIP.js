const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'snipe',
    description: 'Shows most recent deleted message', // oof
    guildOnly: true, // i had to delete the source for the many errors
    async execute(msg, args) {
        let sniped = client.snipe.get(msg.guild.id)
        if(!sniped) return msg.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription('No messages to be sniped'))
        msg.channel.send(new MessageEmbed().setDescription(sniped.content).setAuthor(client.users.get(sniped.author).tag, client.users.get(sniped.author).displayAvatarURL).setTimestamp(sniped.time))
    }
} // this is what should be snipe, but idk