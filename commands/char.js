exports.run = function(discord, bot, message, args) {
	const embed = new discord.RichEmbed()
		if (args.length === 0) {
			embed.setTitle('Not enough arguments. Possible commands: ``-char all`` ``-char chel`` ``-char edge`` ``-char talos`` ``-char vlad`` ``-char dauntless`` ``-char crow``').setColor('#ff0000')
		} else if (args[0] === "all") {
			embed.setTitle('<https://imgur.com/a/OkQAM> shoutouts to **dabis#9351** for creating these').setColor('#ffff00')
		} else if (args[0] === "chel") {
			embed.setTitle('https://imgur.com/NCJbql6').setColor('#00ff00')
		} else if (args[0] === "edge") {
			embed.setTitle('https://imgur.com/b0uD4qK').setColor('#00ff00')
		} else if (args[0] === "talos") {
			embed.setTitle('https://imgur.com/5sUJxDF').setColor('#00ff00')
		} else if (args[0] === "vlad") {
			embed.setTitle('https://imgur.com/02dMYOa').setColor('#00ff00')
		} else if (args[0] === "dauntless") {
			embed.setTitle('https://imgur.com/7QjczTQ').setColor('#00ff00')
		} else if (args[0] === "crow") {
			embed.setTitle('https://imgur.com/IDxqMSK').setColor('#00ff00')
		} else {
			embed.setTitle('Not found. Possible commands: ``-char all`` ``-char chel`` ``-char edge`` ``-char talos`` ``-char vlad`` ``-char dauntless`` ``-char crow``').setColor('#ff0000')
		}
		message.channel.send({embed});
}
