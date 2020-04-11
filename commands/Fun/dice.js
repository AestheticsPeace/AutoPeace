// ${Math.floor(Math.random() * 1050)}

const { Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'dice',
	description: 'Bot will roll a dice',
    /**
     * @param {Message} msg
     */
	async execute(msg, args) { 

        let t1 = Date.now()
		await msg.fetch()
		let m = await msg.channel.send(new MessageEmbed().setDescription(`${Math.floor(Math.random() * 12)}`).setColor('BLACK'))
		m.edit(
			new MessageEmbed()
				.setDescription([
					`${Math.floor(Math.random() * 12)}`,
				].join('\n'))
				.setColor('BLACK')
        )
        m.edit(
         new MessageEmbed()
				.setDescription([
					`${Math.floor(Math.random() * 12)}`,
				].join('\n'))
                .setColor('BLACK')
        )
        m.edit(
            new MessageEmbed()
                   .setDescription([
                       `${Math.floor(Math.random() * 12)}`,
                   ].join('\n'))
                   .setColor('BLACK')
        )
        m.edit(
            new MessageEmbed()
                   .setDescription([
                       `${Math.floor(Math.random() * 12)}`,
                   ].join('\n'))
                   .setColor('BLACK')
                )
         m.edit(
            new MessageEmbed()
                     .setDescription([
                         `${Math.floor(Math.random() * 12)}`,
                     ].join('\n'))
                     .setColor('BLACK')
             )
         m.edit(
            new MessageEmbed()
                       .setDescription([
                          `${Math.floor(Math.random() * 12)}`,
                      ].join('\n'))
                       .setColor('BLACK')
               )
         m.edit(
            new MessageEmbed()
                       .setDescription([
                          `${Math.floor(Math.random() * 12)}`,
                      ].join('\n'))
                       .setColor('BLACK')
                )
          m.edit(
             new MessageEmbed()
                       .setDescription([
                          `${Math.floor(Math.random() * 12)}`,
                      ].join('\n'))
                       .setColor('BLACK')
                )
           m.edit(
             new MessageEmbed()
                       .setDescription([
                          `${Math.floor(Math.random() * 12)}`,
                      ].join('\n'))
                       .setColor('BLACK')
                 )
           m.edit(
             new MessageEmbed()
                       .setDescription([
                          `${Math.floor(Math.random() * 12)}`,
                      ].join('\n'))
                       .setColor('BLACK')
                )
            m.edit(
              new MessageEmbed()
                       .setDescription([
                          `${Math.floor(Math.random() * 12)}`,
                      ].join('\n'))
                       .setColor('BLACK')
                )
            m.edit(
              new MessageEmbed()
                       .setDescription([
                         `${Math.floor(Math.random() * 12)}`,
                      ].join('\n'))
                       .setColor('BLACK')
                )
                    }
                }