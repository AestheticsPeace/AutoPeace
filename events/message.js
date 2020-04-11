const {Message} = require('discord.js')
const { prefix, token } = require('../config.json')
// if need to debug stuff, enable this
const DEBUG = false

/**
 * @param {Message} msg
 */
module.exports = async (msg) => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return
	const args = msg.content.substring(prefix.length).split(/ +/)
	const cmd = args.shift().toLowerCase()

	let members = msg.guild.members.cache
	msg.guild.humans = members.filter(mem => !mem.user.bot).size
	msg.guild.bots = members.filter(mem => mem.user.bot).size
	msg.guild.totalMembers = members.size

	let cmdObj = undefined
	if (!msg.client.fldrToggle && Object.keys(msg.client.commands).indexOf(cmd) !== -1) {
		cmdObj = msg.client.commands[cmd]
	} else if (msg.client.fldrToggle) {
		for (let i = 0; i < Object.keys(msg.client.commands).length; i++) {
			let keyObj = msg.client.commands[Object.keys(msg.client.commands)[i]]
			if (Object.keys(keyObj).indexOf(cmd) !== -1) {
				if (DEBUG)
					msg.channel.send(`${keyObj} | ${cmd} | Debug`)
				try {
					cmdObj = keyObj[cmd]
				} catch(exception) {
					if (DEBUG)
						msg.channel.send(String(exception))
				}
			}
		}
	}

	if (DEBUG)
		console.log('[CMD OBJECT]', cmdObj, ' | cmd inputted:', cmd)

	if (cmdObj) {
		if (cmdObj.guildOnly && msg.channel.type !== 'text') {
			return msg.reply('I can\'t execute commands inside DMs')
		}
		try {
			cmdObj.execute(msg, args)
		} catch(e) {
			if (DEBUG)
				msg.channel.send(String(e))
		}
	}
}