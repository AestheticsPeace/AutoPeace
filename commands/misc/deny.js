const { Message, MessageEmbed, User } = require('discord.js')

module.exports = {
	name: 'adeny',
	description: 'Denies the users request',
	/**
	 * @param {Message} msg
	 * @param {Array<string>} args
	 */
    async execute(msg, args) {
        if (args.length === 0) return msg.reply('you must input the following arguments, <userID, message>')
        /**
		 * @type {User} user
		 */
		const user = await msg.client.users.fetch(args[0], true)
        if (!user) return msg.reply('You must input the correct UserID')
        args.shift()
        try {
            user.send('Your request has been denied by ExoduS Devs')
        } catch {}
    

        // with reasons
		/*
		try { errored
			user.send(`Your request has been approved, you can expect to see your request developed soon${args.length > 0 ? '\n' + args.join(' ') : ''}`)
        } catch {}
        */

	}
}