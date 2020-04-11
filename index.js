const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { lstatSync, existsSync, readdirSync } = require('fs')
const cmdsDir = readdirSync('commands')
const eventsDir = readdirSync('events')

const client = new Discord.Client({
	presence: {
		activity: {
			name: '+help' // uh how do i get it saying 'Automating Peace..'
		}
	}
});

let idx = 0
// to prevent uh gonna restart the bot
setInterval(() => { //                ||
	if (idx === 0) {
		client.user.setActivity('Automating Peace..') // something here, doesn't. work
		idx = 1
	} else {
		client.user.setActivity('+help')
		idx = 0
	}
}, 20000) // 10 secs
// yes
client.commands = {}

// client.commands = new Discord.Collection();
//var cmdObjs = {}

/*client.once('ready', () => {
	console.log('Ready!');
}); // Im scared to touch things here now, since theres more apparently but you did it. uh do everything you can to make this process easier please thx,
*/
for (let i = 0; i < eventsDir.length; i++) {
	client.on(eventsDir[i].split('.')[0], (...params) => {
		if (Array.isArray(params) && params.length > 0)
			require(`./events/${eventsDir[i]}`)(...params)
		else
			require(`./events/${eventsDir[i]}`)(client)
	})
}

// if true, it will use folders as its own categories
client.fldrToggle = true
for (let i = 0; i < cmdsDir.length; i++) {
	let cmd_or_dir = cmdsDir[i]

	if (!client.fldrToggle)
		client.commands[cmd_or_dir.split('.')[0]] = require(`./commands/${cmd_or_dir}`)
	else if (lstatSync(`commands/${cmd_or_dir}`).isDirectory()) {
		client.commands[cmd_or_dir] = {}

		let categoryDir = readdirSync(`commands/${cmd_or_dir}`)
		for (let i2 = 0; i2 < categoryDir.length; i2++) {
			let cmdFile = categoryDir[i2]
			if (lstatSync(`commands/${cmd_or_dir}/${cmdFile}`).isFile()) {
				client.commands[cmd_or_dir][cmdFile.split('.')[0]] = require(`./commands/${cmd_or_dir}/${cmdFile}`)
			}
		}
	}
}

/*client.on('msg', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return
    if (command.guildOnly && msg.channel.type !== 'text') {
        return msg.reply('I can\'t execute commands inside Dms');
    }
	const args = msg.content.substring(prefix.length).split(/ +/)
	const cmd = args.shift().toLowerCase()

	if (!fldrToggle && Object.keys(cmdObjs).indexOf(cmd) !== -1) {
		cmdObjs[cmd].execute(msg, args)
	} else if (fldrToggle) {
		for (let i = 0; i < Object.keys(cmdObjs).length; i++) {
			if (Object.keys(cmdObjs[i]).indexOf(cmd) !== -1) {
				cmdObjs[i][cmd].execute(msg, args)
			}
		}
	}
})*/

client.login('Njk3MDUxMjM1MzcwNDAxODQz.Xox5LA.eZZYQ_fw47WC-TZvpttK9CcypXs');