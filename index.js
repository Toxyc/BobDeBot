const Discord = require('discord.js');
const config = require("./config.json");


require('./vibe.js');
require('./mood.js');

let clownify = config.default_clownify;

const client = new Discord.Client();
const listedUsers = [
	new User('Goopy', '167637273712656384'),
	new User('Kippie', '123115117062782979'),
	new User('Moron', '201036334033403904'),
	new User('Aroxis', '111277040094687232')
];

const brolist = [
	"bro",
	"broski",
	"brosopher",
	"brotthew"
];

let sanitizedUIDs = [];

for (i = 0; i < listedUsers.length; i++) {
	sanitizedUIDs.push(listedUsers[i].uID);
}

function User(uname, uID) {
	this.uname = uname;
	this.uID = uID;
}

client.on('message', msg => mood(msg, () => {

	if (clownify) {
		if (sanitizedUIDs.indexOf(msg.author.id) > 0) {
			msg.react('🤡');
		}
		// console.log(msg.author.id);
		// console.log(sanitizedUIDs);
		// console.log(sanitizedUIDs.indexOf(msg.author.id));
	}


	if (msg.content.indexOf(config.prefix) === 0) {
		const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case "on":
				return clownify = true;
			case "off":
				return clownify = false;
			case "vibecheck":
				return vibecheck(msg, randomBro());
			default:
				return msg.reply("I don't know that command, " + randomBro());
		}
	}
}));


client.login('secret');

function randomBro() { return brolist[Math.random * brolist.length] }
