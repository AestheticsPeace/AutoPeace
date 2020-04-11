const { Message, MessageEmbed, User } = require('discord.js')
let a = require("math-expression-evaluator");

module.exports = {
    name: 'calc',
    description: 'Acts as a calculator to solve your equation',
    /**
     * @param {Message} msg
     */
    execute(msg, args) {
        if (args.join(" ").length > 2000) return msg.channel.send(new MessageEmbed().setColor('RED').setDescription('Calculation too long'))
        try { 
            msg.channel.send(new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Calculation of ${args.join(" ")}\n\n**` + a.lex(args.join(" ")).toPostfix().postfixEval() + '**'))
        } catch (err) {
           msg.channel.send(err.message)
        }
    }
}