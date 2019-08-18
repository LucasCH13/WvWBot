// modules
const Discord = require('discord.js');
const fetch = require('node-fetch');

const config = require("./config.json");

// Create an instance of a Discord client
const client = new Discord.Client();
  
/*
 * The ready event is vital, it means that only after this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Lancement du bot');
});


client.on('message', message => {
  if(message.content.startsWith('!kd'))
  {
        const url = 'https://api.guildwars2.com/v2/wvw/matches/stats?world=2103'

        async function getKD() {

            const response = await fetch(url);
            const data = await response.json();
            const { kills, deaths} = data;

            //k/d overall
            const red = kills.red / deaths.red;
            const kd_red = red.toFixed(2);

            const green = kills.green / deaths.green;
            const kd_green = green.toFixed(2);

            const blue = kills.blue / deaths.blue;    
            const kd_blue = blue.toFixed(2);

           message.channel.send('K/D Red : '+ kd_red);
           message.channel.send('K/D Green : ' + kd_green);
           message.channel.send('K/D Blue : ' + kd_blue + "\n");
   
        } 

        getKD();
   }
});

client.login(process.env['DISCORD_TOKEN']);