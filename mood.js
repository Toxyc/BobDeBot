module.exports = (msg, bro, cb) => {
    const responses = [
        "No u",
        "No.",
        "Not in the mood, " + bro
    ];

    let random = Math.random();
    console.log(random);

    if (random > 0.5) {
        // Good mood
        return cb();
    } else {
        // Bad mood
        return msg.reply(responses[Math.random() * responses.length]);
    }
};