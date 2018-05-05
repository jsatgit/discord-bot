const Discord = require('discord.js');
const config = require('./config');
const rp = require('request-promise');
const selectors = require('./selectors');


const client = new Discord.Client();

async function fetchMob(mobId) {
    const html = await rp(`https://www.divine-pride.net/database/monster/${mobId}`);
    return selectors.selectStats(html);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
    const msgContent = msg.content
    if (msgContent.startsWith('mob')) {
        const splitContent = msgContent.split(' ');
        if (splitContent.length >= 2) {
            const mobId = splitContent[1]
            const mobStats = await fetchMob(mobId)
            msg.reply(JSON.stringify(mobStats));
        }
    }
});

client.login(config.token);
