const { Message, MessageEmbed, User } = require('discord.js')

module.exports = {
	name: 'approve',
	description: 'Approves users request',
	/**
	 * @param {Message} msg
	 * @param {Array<string>} args
	 */
	async execute(msg, args) {
		// christ the intellisense are shit lol
		// im using my bot's eval for making sure that im doing it correctly lol, no worries, hope we can make more bots in future tbh
		if (args.length === 0) return msg.reply('You must input the following arguments, <userID, message>')
		/**
		 * @type {User} user
		 */ 
		// i forgot my eval doesn't support awaits inside of the eval function, 
		// it's either do or not do xD
		const user = await msg.client.users.fetch(args[0], true)
		if (!user) return msg.reply('You must input the correct UserID')
		args.shift()
		try {
			user.send(`Your request has been approved by ExoduS Devs, you can expect to see your request developed soon`)
		} catch {}
		
		// with reasons
		/*
		try {
			user.send(`Your request has been approved, you can expect to see your request developed soon${args.length > 0 ? '\n' + args.join(' ') : ''}`)
        } catch {} hm
		*/
		// do you have to input the reasons? not for now, if so maybe write out the code but put it in these green lines,
	}
} 