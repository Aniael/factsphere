require("dotenv").config();
require("colors");

const randomboot = ["Pretend this is my logo", "This following interpretation is approved for mature audiences only!", "ATTENTION! Thanks for your attention!", "WHAT ARE YOU DOING", "hi scry fuck off"]

const randomMessage = randomboot[Math.floor(Math.random() * randomboot.length)];

const facts = ["The billionth digit of Pi is 9.", 
"Humans can survive underwater. But not for very long.", 
"A nanosecond lasts one billionth of a second.", 
"Honey does not spoil.", 
"The atomic weight of Germanium is seven two point six four", 
"An ostrich's eye is bigger than its brain.", 
"Rats cannot throw up.", 
"Iguanas can stay underwater for twenty-eight point seven minutes.",
" The moon orbits the Earth every 27.32 days.",
"A gallon of water weighs 8.34 pounds.",
"According to Norse legend, thunder god Thor's chariot was pulled across the sky by two goats.",
"Tungsten has the highest melting point of any metal, at 3,410 degrees Celsius.",
"Gently cleaning the tongue twice a day is the most effective way to fight bad breath.",
"The Tariff Act of 1789, established to protect domestic manufacture, was the second statute ever enacted by the United States government.",
"The value of Pi is the ratio of any circle's circumference to its diameter in Euclidean space.",
"The Mexican-American War ended in 1848 with the signing of the Treaty of Guadalupe Hidalgo.",
"In 1879, Sandford Fleming first proposed the adoption of worldwide standardized time zones at the Royal Canadian Institute.",
"At the end of The Seagull by Anton Chekhov, Konstantin kills himself.",
"Hot water freezes quicker than cold water.",
"Polymerase I polypeptide A is a human gene."]




const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(randomMessage.rainbow);
    console.log('logged')
});

// hi yes this is the message reply part
client.on('message', (message) => {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`);
        if (message.content === 'fact_fact') {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            message.channel.send(randomFact)
        }
    }
)

client.login(process.env.TOKEN)