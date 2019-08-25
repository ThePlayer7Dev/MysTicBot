const Discord = require('discord.js')
const bot = new Discord.Client()
const botconfig = require('./botconfig.json')

bot.on('guildMemberAdd', function(member) {
    
})

bot.on('message', function(message) {
    if (message.content === ">help"){
        let hEmbed = new Discord.RichEmbed()
        .setTitle('Commandes')
        .setColor(botconfig.cyan)
        .setAuthor(message.guild.owner)
        .addField('>ping', 'Pong!', true)
        .addField('>callstaff', 'Appelera le staff une fois la commande faite', true)
        .addField('>help', "Vous donne de l'aide.", true)
        .addField('>serverinfo', 'Vous donne des infos par rapport au serveur.', true)
        .addField('>userinfo', 'Vous donne des infos sur vous meme :)', true)
        .setFooter('By VibrantTime')
        message.reply('Regarde tes messages privés :)')
        message.member.sendEmbed(hEmbed)
        message.member.send('> Le bot est en phase de Béta, Tout changement peut parvenir a tout moment')
    }

    if (message.content === '>callstaff'){
        let callEmbed = new Discord.RichEmbed()
        .setTitle("Besoin D'aide")
        .setColor(botconfig.blue)
        .addField('Nom:', message.author.username)
        .addField('ID:', message.author.id)
        bot.channels.get('609560799278530560').sendEmbed(callEmbed)
        message.reply('Le staff a été appelé :)')
    }

    if(message.content === '>ping'){
        message.channel.send('Pong!')
        message.react('🏓')
        console.log(message.author.username, " Joue au Ping Pong!")
    }

    if (message.content === '>serverinfo'){
        let sEmbed = new Discord.RichEmbed()
        .setTitle('Server Infos')
        .setAuthor(message.guild.owner)
        .setColor(botconfig.cyan)
        .setDescription('Informations du serveur')
        .addField('Nom Du Serveur:', message.guild.name, true)
        .addField('Nombre De Membres Sur Le Serveur:', message.guild.memberCount, true)
        .addField('Nombre De Roles Sur Le Serveur:', message.guild.roles.size, true)
        .addField('Propriétaire Du Serveur:', message.guild.owner, true)
        .setFooter('By VibrantTime')
        message.channel.sendEmbed(sEmbed)
    }


    if (message.content === '>userinfo'){

        let uEmbed = new Discord.RichEmbed()
        .setTitle('Vos Infos')
        .setAuthor(message.guild.owner)
        .setColor(botconfig.cyan)
        .addField('Nom:', message.author.username, true)
        .addField('ID:', message.author.id, true)
        .addField('Compte Crée Le:', message.author.createdAt, true)
        .addField('Status :', message.author.presence.status, true)
        .setFooter('By VibrantTime')
        message.channel.sendEmbed(uEmbed)

    }


})

bot.on('ready', function(ready){
    bot.user.setGame("OxFord PrisonRP")
    console.log('Ready To Use!')
})


bot.login(botconfig.token)