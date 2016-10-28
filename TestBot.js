const Eris = require("eris");

var bot = new Eris("MjQxMTg0NjI1NTcyMDUyOTky.CvOMMg.kOA8WaFikXa97ge8uSzfSAZ1ldg");
// TestBot's token

bot.on("ready", () => { // When the bot is ready
    console.log("Connected as TestBot."); // Log "Connected as TestBot."
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === "Hello") { // If the message content is "Hello"
        bot.createMessage(msg.channel.id, "Hi!");
        // Send a message in the same channel with "Hi!"
    } else if(msg.content === "Hi") { // Otherwise, if the message is "Hi"
        bot.createMessage(msg.channel.id, "Hello!");
        // Respond with "Hello!"
    }
});

bot.connect(); // Get the bot to connect to Discord// JavaScript source code

bot.on("guildMemberAdd", (guild, member) => { // When a member joins a guild
    var response = `Welcome ${member.mention} to ${guild.name}!`;
    // Make a welcome string with the member mention and guild name

    bot.createMessage(guild.defaultChannel.id, response);
    // Send the response in the guild's default channel
});

bot.on("guildMemberRemove", (guild, member) => { // When a member leaves a guild
    var response = `Farewell @${member.user.username}!`;
    // Make a farewell string with the member's username

    bot.createMessage(guild.defaultChannel.id, response);
    // Send the response in the guild's default channel
});