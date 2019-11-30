export const vibecheck = function(msg, bro) {
	let user = msg.mentions.members.first();
	if (!user) return msg.reply("Who do I need to vibecheck, " + bro);

	msg.channel.send(
		"<@" + user.id + ">",
		{ files: ["https://cdn.discordapp.com/attachments/650283884960940056/650290577643929639/IMG_20191128_073542.jpg"] }
	);

	setTimeout(() => {
		return (Math.random() > 0.5) ?
			msg.channel.send("<@" + user.id + ">", { files: ["https://cdn.discordapp.com/attachments/650283884960940056/650290577643929639/IMG_20191128_073542.jpg", "https://cdn.discordapp.com/attachments/650283884960940056/650295315097845773/vibe4.png"] }) :
			msg.channel.send("<@" + user.id + ">", { files: ["https://cdn.discordapp.com/attachments/650283884960940056/650290613115158533/IMG_20191128_073551.jpg"] })
	}, 2000 + (Math.random() * 58000)) // Random timeout between 2 to 60 seconds

};

