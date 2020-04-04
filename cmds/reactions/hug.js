const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.run = async (client, message, args) => {
        try {
            let member = message.guild.member(message.mentions.users.first());
            if(!member) message.reply('Вы не выбрали пользователя') 
            const { body } = await superagent
                .get("https://nekos.life/api/v2/img/hug");
            const embed = new Discord.RichEmbed()
                .setColor("#FF30A2")
                .setTitle(`${message.author.username} обнял ${member.user.username}`)
                .setImage(body.url)
            message.channel.send(embed)
        } catch (err) {
            console.log(err.stack);
        }
    };
module.exports.help = {
    name: 'hug',
    aliases: ['обять'],
    description: 'обнять пользователя',
    usages: { 'f.hug @упомнинание': 'Обнять пользователя' },
    category: "Реакции"
}; 