exports.run = function(discord, bot, message, args) {
	var request = require('request')
	const embed = new discord.RichEmbed().setTitle("🏢 risingthunder.community").setURL("http://risingthunder.community")

	request('http://risingthunder.community:1337/_01/rpc/GetUserCount', function (error, response, body) {
		if (error) {
			console.log('error:', error)
			console.log('statusCode:', response && response.statusCode)
			embed.addField("Server seems to be offline","waiting for restart...").setColor('#ff0000')
			message.channel.send({embed})
		} else {
			embed.addField("Server is online!","Players currently online: " + body).setColor('#00ff00')
			message.channel.send({embed})
		}
	});
}
