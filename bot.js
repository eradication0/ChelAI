console.log('<== Chel-AI BOT ==>');

// Loading Requirements
const discord = require('discord.js')
const elo = require('elo-rating')
const settings = require('./settings.json')
const fs = require('fs')
const bot = new discord.Client()
const roles = require('./roles.json')

const c_bad = "#E54C4C"
const c_good = "#6DC066"
const c_warning = "#ECBE00"
const c_note = "#006FEC"
const c_special = "#ba00ec"

bot.on('message', (message) => {

	// Disables bot to listen to himself
	if (message.author.id === bot.user.id) return

	if (message.content.startsWith('.eval') && message.author.id === '64438454750031872') {
		try {
			const com = eval(message.content.split(" ").slice(1).join(" "))
			message.channel.send('```\n' + com + '```')
		} catch (e) {
			message.channel.send('```\n' + e + '```')
		}
	}

	// Bot only executes command if the right prefix is used
	if (!message.content.startsWith(settings.prefix)) return

	// give roles if nothing happend so far
	for (var I in roles) {
		if (roles[I].name === message.content.slice(1) || roles[I].fullName === message.content.slice(1)) {
				const embed = new discord.RichEmbed()
			if (message.member.roles.get(roles[I].id)) {
				message.member.removeRole(roles[I].id)
				embed.setTitle('Role removed').setColor('#E54C4C')
				message.channel.send({ embed });
			} else {
				message.member.addRole(roles[I].id)
				embed.setTitle('Role added').setColor('#6DC066')
				message.channel.send({ embed });
			}
		}
	}

	const args = message.content.split(' ');
	const command = args.shift().slice(settings.prefix.length);
	try {
		let cmdFile = require('./commands/' + command);
		cmdFile.run(discord, bot, message, args);
	} catch (e) {
		console.log(e + '\n');
	}
})

// When bot is ready
bot.on('ready', () => {
    console.log('<== Chel-AI ONLINE ==>')
})

bot.login(settings.bottoken)
