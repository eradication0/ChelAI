exports.run = function(discord, bot, message, args) {
	
		if (args.length === 0) {
			message.channel.send('Not enough arguments. Possible commands: ``-char all`` ``-char chel`` ``-char edge`` ``-char talos`` ``-char vlad`` ``-char dauntless`` ``-char crow``')
		} else if (args[0] === "all") {
			message.channel.send('<https://imgur.com/a/OkQAM> shoutouts to **dabis#9351** for creating these')
		} else if (args[0] === "chel") {
			message.channel.send('https://imgur.com/NCJbql6')
		} else if (args[0] === "edge") {
			message.channel.send('https://imgur.com/b0uD4qK')
		} else if (args[0] === "talos") {
			message.channel.send('https://imgur.com/5sUJxDF')
		} else if (args[0] === "vlad") {
			message.channel.send('https://imgur.com/02dMYOa')
		} else if (args[0] === "dauntless") {
			message.channel.send('https://imgur.com/7QjczTQ')
		} else if (args[0] === "crow") {
			message.channel.send('https://imgur.com/IDxqMSK')
		} else {message.channel.send('Not found. Possible commands: ``-char all`` ``-char chel`` ``-char edge`` ``-char talos`` ``-char vlad`` ``-char dauntless`` ``-char crow``')}
}
