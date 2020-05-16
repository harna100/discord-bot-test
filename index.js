const Discord = require('discord.js');
const client = new Discord.Client();

// https://discordapp.com/oauth2/authorize?client_id=676663288167268352&scope=bot&permissions=2048

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    // List servers the bot is connected to
    console.log("Servers:");
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name + ": " + guild.id);
    })
});

client.on('message', (receivedMessage) => {
    console.log(receivedMessage)
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
});
    
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments
    
    if (primaryCommand == "servers") {
        client.guilds.cache.forEach((guild) => {
            console.log(" - " + guild.name);
            receivedMessage.channel.send(" - " + guild.name + ": " + guild.id)
        });
    }
}

bot_secret_token = "";

client.login(bot_secret_token);
