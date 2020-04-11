/**
 * @author Keshiki#3065
 * @description Custom Mentions fetcher
 */

const { Message } = require('discord.js')

/**
 * @param {Message} msg
 * @param {Array<string>} args
 */
module.exports.getMemberMention = async (msg, args) => {
	if (msg.mentions.members.first()) return msg.mentions.members.first()
	if (args.length > 0) {
		return (await msg.guild.members.fetch()).filter(user => user.id === args[0]).first()
	}
}

/**
 * @param {Message} msg
 * @param {Array<string>} args
 */
module.exports.getBannedMention = async (msg, args) => {
	// first attempt: Username#TagNumber
	// second attempt: UserID

	// on .indexOf(), I made it so it checks to see if the exact Username#Tag were mentioned first
	return (await msg.guild.fetchBans()).filter(ban => {
		if (args.join(' ').indexOf(ban.user.tag) === 0) {
			args = args.join(' ').substring(ban.user.tag.length + 1).split(' ')
			return true
		} else if (ban.user.id === args[0]) {
			args.shift()
			return true
		}
	}).first()
}