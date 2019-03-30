const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
const prefix = "dad ";
var rand =["With great power comes a huge electricity bill.", "I killed a piece of paper. RIP", "Why can’t you stay up until the cows come home? Because it's pasture bedtime.", "A horse walks into a bar. The bartender says `Hey!` Then the horse replies `Sounds good!`", "A dad was washing his car with his son. The son asked why he couldn't just use a sponge.", "I dont know why drunks fail the line test. It's really straight forward.", "What do you call an alligator wearing a vest? An Investigator!", "I never learned when to properly use contractions but that is ok. It's what it's", "Think of a number between 5 and 15. Multiply by 2, add 3, and subtract 7 from the answer. Now close your eyes. Dark, isn't it?" ,"My car horn wasn’t working, so I took it to a Boy Scout. He said `Beep repaired`", "Did you hear about the drummer who had twin daughters? He named them Anna 1, Anna 2", "My son said 'Look! I'm a 3D printer!'I told him to close the door while he poops.", "As I suspected, someone’s been adding soil to my garden. The plot thickens...", "Did you hear about the young genie who got a job and moved out of his parents' lamp to a one bedroom necklace? He was independent", "Some people think that boomboxes are really old school. I think that's just a sterotype.", "Today I saw an ad that said 'radio for sale, $1, volume stuck on full.' I said 'I can't turn that down!'", "What has 4 wheels and flies? A garbage truck", "Always knock before opening the fridge. There could be a salad dressing."];
var pun =["The first computer dates back to Adam and Eve. It was an Apple with limited memory, just one byte. And then everything crashed.", "About a month before he died, my uncle had his back covered in lard. After that, he went down hill fast.", "Doctor, there`s a patient on line 1 who says hes invisible. Doctor: Well I cant see him right now.", "Thanks for explaining the word many to me, it means a lot.", "I got a new pair of gloves today, but they're both lefts which, on the one hand, is great, but on the other, its just not right.", "The future, the present and the past walked into a bar. Things got a little tense.", "I just found out I'm colorblind. The diagnosis came completely out of the purple.", "Atheism is a non-prophet organization.", "Just burned 2,000 calories. That's the last time I leave brownies in the oven while I nap.", "I saw an ad for burial plots, and thought to myself this is the last thing I need.", "I was addicted to the hokey pokey... but thankfully, I turned myself around.", "Claustrophobic people are more productive thinking out of the box.", "What's the difference of deer nuts and beer nuts? Beer nuts are a $1.75, but deer nut are under a buck.", "A cop just knocked on my door and told me that my dogs were chasing people on bikes. My dogs don't even own bikes...", "To the mathematicians who thought of the idea of zero, thanks for nothing!", "Atheists don't solve exponential equations because they don't believe in higher powers."];
client.on('ready', () => {
    client.user.setActivity("dad help | Version 1.1"); 
    });
    client.on("message", async (message) => {
        if (message.author.bot) return;
        if (message.content.startsWith(`${prefix}help`)) {
            var embed = new Discord.RichEmbed()
                .setColor(0x252629)
                .setAuthor(client.user.username, client.user.avatarURL)
                .setTitle("Help Menu")
                .setDescription("The Help Menu for Dad")
                .addField("**Help**", "Shows the help menu.")
                .addField("**Joke**", "Tells a dad joke")
                .addField("**Pun**", "Tells a pun")
                .addField("**Ping**", "Gets the ping of the bot.")
                .addField("**Support**", "Sends a link to the support server")
                .setTimestamp()
                .setFooter("Created by Brickman#4669", client.user.avatarURL)
                message.channel.send(embed)
            
        } else if (message.content.startsWith("im ") ){

var content = message.content.replace("im ", "")

message.channel.send("Hi, " + content + ", I'm Dad!");
                    } else if (message.content.startsWith("i'm ") ){

var content2 = message.content.replace("i'm ", "")

message.channel.send("Hi, " + content2 + ", I'm Dad!");
                         } else if (message.content.startsWith("I'm ") ){

var content3 = message.content.replace("I'm ", "")

message.channel.send("Hi, " + content2 + ", I'm Dad!");
                              } else if (message.content.startsWith("Im ") ){

var content4 = message.content.replace("Im ", "")

message.channel.send("Hi, " + content2 + ", I'm Dad!");

            
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
