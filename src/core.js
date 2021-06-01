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
"In Africa, every 60 seconds a minute passes.",       //not related to portal but lmao why not
"Hot water freezes quicker than cold water.",
"Polymerase I polypeptide A is a human gene.",
//partially true facts
"Cellular phones will not give you cancer. Only hepatitis.",
"In Greek myth, Prometheus stole fire from the Gods and gave it to humankind. The jewelry he kept for himself.",
"The Schrödinger's cat paradox outlines a situation in which a cat in a box must be considered, for all intents and purposes, simultaneously alive and dead. Schrödinger created this paradox as a justification for killing cats.",
"The plural of surgeon general is surgeons general. The past tense of surgeons general is surgeonsed general",
"Contrary to popular belief, the Eskimo does not have one hundred different words for snow. They do, however, have two hundred and thirty-four words for fudge.",
"Diamonds are made when coal is put under intense pressure. Diamonds put under intense pressure become foam pellets, commonly used today as packing material.",
"Halley's Comet can be viewed orbiting Earth every seventy-six years. For the other seventy-five, it retreats to the heart of the sun, where it hibernates undisturbed.",
"The first commercial airline flight took to the air in 1914. Everyone involved screamed the entire way.",
"Edmund Hillary, the first person to climb Mount Everest, did so accidentally while chasing a bird.",
]




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