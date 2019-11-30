export const mood = (msg, bro, cb) => {
	const responses = [
		"No u",
		"No.",
		"Not in the mood, " + bro
	];

	if (Math.random() > 0.5) {
		// Good mood
		return cb();
	} else {
		// Bad mood
		return msg.reply(responses[Math.random() * responses.length]);
	}
};
