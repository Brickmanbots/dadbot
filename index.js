const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
const prefix = "dad";
var rand =["dadjoke 1", "dadjoke 2"];
var pun =["dadpun 1", "dadpun 2"];


client.on('ready', () => {
    client.user.setActivity("dadhelp"); 
    });
    client.on("message", async (message) => {
        if (message.author.bot) return;
        if (message.content.startsWith(`${prefix}help`)) {
            var embed = new Discord.RichEmbed()
                .setColor(0x252629)
                .setAuthor(client.user.username, client.user.avatarURL)
                .setTitle("Help Menu")
                .setDescription("The Help Menu for DadBot")
                .addField("**Help**", "Shows the help menu.")
                .addField("**Joke**", "Tells a dad joke")
                .addField("**Pun**", "Tells a pun")
                .addField("**Ping**", "Gets the ping of the bot.")
                .setTimestamp()
                .setFooter("Created by brickman#4669", client.user.avatarURL)
                message.channel.send(embed)
            
        } else if (message.content.startsWith(`${prefix}joke`)) {
            var repl = rand[Math.floor(Math.random()*rand.length)];
        message.channel.send(repl);
    } else if (message.content.startsWith(`${prefix}pun`)) {
        var repl2 = pun[Math.floor(Math.random()*pun.length)];
        message.channel.send(repl2);
    } else if (message.content.startsWith(`${prefix}ping`)) {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
        }});
        client.login(token).catch(err => console.log(err));
