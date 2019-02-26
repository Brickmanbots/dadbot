const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
const prefix = "dad ";
var rand =["With great power comes a huge electricity bill.", "I killed a piece of paper. RIP", "Why can’t you stay up until the cows come home? Because it's pasture bedtime.", "A horse walks into a bar. The bartender says `Hey!` Then the horse replies `Sounds good!`", "A dad was washing his car with his son. The son asked why he couldn't just use a sponge.", "I dont know why drunks fail the line test. It's really straight forward.", "What do you call an alligator wearing a vest? An Investigator!", "I never learned when to properly use contractions but that is ok. It's what it's", "Think of a number between 5 and 15. Multiply by 2, add 3, and subtract 7 from the answer. Now close your eyes. Dark, isn't it?" ,"My car horn wasn’t working, so I took it to a Boy Scout. He said `Beep repaired`", "Did you hear about the drummer who had twin daughters? He named them Anna 1, Anna 2"];
var pun =["dadpun 1", "dadpun 2"];


client.on('ready', () => {
    client.user.setActivity("dad help"); 
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
                .addField("**Support**", "Sends a link to the support server")
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
    } else if (message.content.startsWith(`${prefix}support`)) {
        message.channel.send("Join the Brickman Development support server: discord.gg/QHqJxMm");
                             }});
        client.login(token).catch(err => console.log(err));
