exports.run = function(discord, bot, message, args) {
	const db = require('../db.json')
	var searchTerm = args.join().replace(/,/g, ' ')
	var errorMsg = 'error, try again. Example: ``-info framedata`` \n use ``-info all`` for all possible terms'
	const embed = new discord.RichEmbed()

	// if no word to search for
	if (args.length === 0) {
		embed.setTitle(errorMsg).setColor('#E54C4C')
		message.channel.send({ embed });
	} else if (args[0] === 'all') {
		var allTerms = '';
		for (var I in db) {
			allTerms += "``"+db[I].name+"`` "
		}
		message.channel.send(allTerms)
	} else {
		for (var I in db) {
			if (db[I].name === searchTerm || db[I].alias === searchTerm) {
				embed.setTitle(db[I].name).setColor('#6DC066')
				embed.addField(db[I].content,"_")
				message.channel.send({ embed });
				return
			}
			embed.setTitle(errorMsg).setColor('#E54C4C')
			message.channel.send({ embed });
		}
	}
}
