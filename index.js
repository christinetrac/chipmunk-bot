const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NTY0OTg3MDc2MzI4Njg1NjA2.XKwKrQ.-S75IiOPzAW3CMYPuYvLNmAkeZM');