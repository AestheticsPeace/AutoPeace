const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'procrastinate',
	description: 'Bot will start to procrastinate',
    /**
     * @param {Message} msg
     */
	async execute(msg, args) { 

        function randomHexColor() {
            return '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6)
        };

        let procrastinateWords = ["I can't do it", "Don't want to", "Sure", "I'm not sure?", "no.", "Don't ask me"]
		let m = await msg.channel.send(new MessageEmbed().setDescription('Yes').setColor('GREEN'))

        for(let idx = 0; idx < 10; idx++) {
            setTimeout(async function() {
                m.edit(new MessageEmbed().setColor(randomHexColor()).setDescription(procrastinateWords[Math.floor(Math.random() * procrastinateWords.length)]))
            }, 1000)
        }
	},
};
