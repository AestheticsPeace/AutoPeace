const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'procrastinate',
	description: 'Bot will start to procrastinate',
    /**
     * @param {Message} msg
     */
	async execute(msg, args) { 
		// time
		let t1 = Date.now()
		await msg.fetch()
		let m = await msg.channel.send(new MessageEmbed().setDescription('Yes').setColor('GREEN'))
		m.edit(
			new MessageEmbed()
				.setDescription([
					`No`,
				].join('\n'))
				.setColor('RED')
        )
        m.edit(
         new MessageEmbed()
				.setDescription([
					`Maybe`,
				].join('\n'))
                .setColor('PURPLE')
        )
        m.edit(
            new MessageEmbed()
                   .setDescription([
                       `I DON'T KNOW`,
                   ].join('\n'))
                   .setColor('BLACK')
        )
        m.edit(
            new MessageEmbed()
                   .setDescription([
                       `DON'T ASK ME`,
                   ].join('\n'))
                   .setColor('PINK')
                )
         m.edit(
            new MessageEmbed()
                     .setDescription([
                         `No`,
                     ].join('\n'))
                     .setColor('RED')
             )
         m.edit(
            new MessageEmbed()
                       .setDescription([
                          `Maybe`,
                      ].join('\n'))
                       .setColor('PURPLE')
               )
         m.edit(
            new MessageEmbed()
                       .setDescription([
                          `I DON'T KNOW`,
                      ].join('\n'))
                       .setColor('BLACK')
                )
          m.edit(
             new MessageEmbed()
                       .setDescription([
                          `DON'T ASK ME`,
                      ].join('\n'))
                       .setColor('PINK')
                )
           m.edit(
             new MessageEmbed()
                       .setDescription([
                          `No`,
                      ].join('\n'))
                       .setColor('RED')
                 )
           m.edit(
             new MessageEmbed()
                       .setDescription([
                          `Maybe`,
                      ].join('\n'))
                       .setColor('PURPLE')
                )
            m.edit(
              new MessageEmbed()
                       .setDescription([
                          `I DON'T KNOW`,
                      ].join('\n'))
                       .setColor('BLACK')
                )
            m.edit(
              new MessageEmbed()
                       .setDescription([
                         `DON'T ASK ME`,
                      ].join('\n'))
                       .setColor('PINK')
                )
	},
};