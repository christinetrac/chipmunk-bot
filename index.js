const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'how are you?') {
        msg.reply('in a dog mood hbu');
    }
});

client.on('message', msg => {
    if (msg.content === "hi") {
        msg.reply('christine loves jonathan!!! heh')
    }
});

client.on('message', msg => {
    if (msg.content === "lol") {
        msg.reply('do you need some lotion for your dryness? -__-')
    }
});

client.on('message', msg => {
    if (msg.content === "christine") {
        msg.reply('christine is baby')
    }
});

client.on('message', msg => {
    if (msg.content === "jonathan") {
        msg.reply('jonathan is doggy')
    }
});

client.on('message', msg => {
    if (msg.content === "ow") {
        msg.reply('mark my words!! this is gona leave a bruise')
    }
});

client.on('message', msg => {
    if (msg.content === "i love you") {
        msg.reply('christine told me to tell you she loves you too')
    }
});

client.on('message', msg => {
    if (msg.content === "bye") {
        msg.reply('see u never... o__o')
    }
});

client.on('message', msg => {
    if (msg.content === "hehe") {
        msg.reply('nyeah ehh')
    }
});

client.on('message', msg => {
    if (msg.content === "woof") {
        msg.reply('malformation dog is dead :(')
    }
});

client.on('message', msg => {
    if (msg.content === "luv") {
        msg.reply('want to sweet sweet?')
    }
});

client.login(process.env.BOT_TOKEN); 
