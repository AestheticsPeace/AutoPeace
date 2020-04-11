const { Message, MessageEmbed } = require('discord.js')
const {} = require('common-tags')
module.exports = {
	name: 'uinfo',
	description: 'User Information',
    /**
     * @param {Message} message
     */
	execute(message, args) {
		var member = message.mentions.members.first() // so how about the roles of a member
		// you would get it by member.roles, but of course, it'd obviously be uh, member.roles.cache
		// if you want to filter the @everyone / default role of it, member.roles.cache.filter(role => role.name !== '@everyone')
		if (!member) member = message.member // msg.member = guild member of the user who sent the message
		let joinPos = 0
		let memFound = false
		message.guild.members.cache.sort((v1,v2) => v1.joinedTimestamp > v2.joinedTimestamp).map(mem => !memFound && (function(){joinPos++;if(mem.id===member.id)memFound=true;})())
		const roles = String(member.roles.cache.filter(role => role.name === '@everyone'))
		message.channel.send(new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Member Information') // 
			.addField('User Created At', member.user.createdAt)
			.addField('User Joined At', member.user.joinedAt) // 
			 .addField('Roles', roles.length > 2048 ? roles.length : String(roles)) // member.roles.cache.filter(role => role.name !== '@everyone')
            .setFooter(`Executed by ${message.member.user.tag}`) // is it done? im still lacking brainpower
            .setTimestamp() // 
		) // mentioned users are like, a normal user without any guildmember object sure
	} // <GuildMember>.user === msg.author, so how would u do mentioned users -- Doing now
	// member.createdAt wouldn't exist since you're trying to get the property from the guildmember object
	// you would have to do member.user.createdAt // you'd have to sort the joined timestamp of each member, yes LOL and then map through it to find the actual join position
	// but i set it so it'll set the variable to `joinPos`
} // so an example of member.createdAt  o Litt, so i cant just do joinpOS or it will fukr on me
// https://life-is-pa.in/egpfUe.png -- SO how long would it take to create this whole map database for this -- yes but how,
// wdym by map database? you said abou -- btw we been making notes on this for the past hour, yeh
// i guess depends on your pc? but it doesn't take much of your RAM as it's just inside of a map so it's kinda instant ce- back to the whois cmd?
// LOL yeah, I've rewritten my v12 version numerous times to know everything - mhm lol -  sure