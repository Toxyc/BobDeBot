'use strict';

const Discord = require('discord.js');
const config = require("./config.json");

const vibecheck = require('./vibe.js');
const mood = require('./mood.js');

let clownify = config.default_clownify;
let i, msg, sanitizedUIDs = [];

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

for (i = 0; i < listedUsers.length; i++) {
	sanitizedUIDs.push(listedUsers[i].uID);
}

function User(uname, uID) {
	this.uname = uname;
	this.uID = uID;
}

client.on('message', msg => {

	if (clownify) {
		if (sanitizedUIDs.indexOf(msg.author.id) > 0) {
			msg.react('🤡');
		}
	}

	if (msg.content.indexOf(config.prefix) === 0) {
		const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();

		switch (command) {
			case "on":
                clownify = true;
				return msg.reply("Clown fiesta is now turned ON, " + randomBro());
			case "off":
				clownify = false;
                return msg.reply("Clown fiesta is now turned OFF, " + randomBro());
            case "chimp":
                return msg.reply("Current chimp is: <@"+listedUsers[Math.floor(Math.random() * listedUsers.length)].uID+">");
            case "vibecheck":
                randomBro();
				return vibecheck(msg, randomBro());
			default:
                randomBro();
				return msg.reply("I don't know that command, " + randomBro());
		}
	}
});

client.login('NjM5MTU1NTkzNzU1NDkyMzUy.XeKZFA.vHaXrLa46MFAvsQUq1caROTfCa8');

function randomBro() {
    return brolist[Math.floor(Math.random() * brolist.length)];
}
