 var prefix = "!"
    client.on('message', message => {
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let b5bzlog = client.channels.find("name", "5bz-log");
     
      if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
     
      message.guild.member(user).ban(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });



 client.on('message', message => {
    const prefix = "!";
      if (message.author.kick) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "kick") {
                   if(!message.channel.guild) return;
             
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
     
      if (message.mentions.users.size < 1) return message.reply("منشن شخص");
      if(!reason) return message.reply ("اكتب سبب الطرد");
      if (!message.guild.member(user)
      .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
     
      message.guild.member(user).kick(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor('Kicked !', user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("User:",  `[ + ${user.tag} + ]`)
      .addField("By:", `[  + ${message.author.tag} +  ]`)
      .addField("Reason:", `[ + ${reason} +  ]`)
      client.channels.get("492583022982463500").send({embed : banembed})
    }
    });


client.on('message', message => {
  if (true) {
if (message.content === '.invite') {
      message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=587700812558368781&permissions=8&scope=bot  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === ".invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => { //Toxic Codes
    if(message.channel.type === 'dm') {//Toxic Codes
        var guildID = 'Guild ID'; // <=============== 587533600761839618//Toxic Codes
        if(message.content.includes('discord.gg/')) {//Toxic Codes
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);//Toxic Codes
            member.ban({ reason: 'ADS In Private.' }).catch();//Toxic Codes
        }//Toxic Codes
    }//Toxic Codes
});//Toxic Codes



client.on('message', rw => {//Toixc Codes
  if (rw.content.startsWith('vb')) {//Toixc Codes
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()//Toixc Codes
let mas = rw.author//Toixc Codes
if(!men) return rw.channel.send('``');//Toixc Codes
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {//Toixc Codes
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")//Toixc Codes
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)//Toixc Codes
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
         
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()//Toixc Codes
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED//Toixc Codes
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه//Toixc Codes
client.on('message', rw => {//Toixc Codes
  if (rw.content.startsWith('اخرص')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**لا تستطع الكلام الان** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author//Toixc Codes
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');//Toixc Codes
 rw.guild.channels.forEach(c => {//Toixc Codes
 c.overwritePermissions(men.id, {//Toixc Codes
         CONNECT: true//Toixc Codes
 })
    })//Toixc Codes
const embed = new Discord.RichEmbed()//Toixc Codes
.setColor("RANDOM")//Toixc Codes
.setDescription(`**
 <@${men.id}>//Toixc Codes
 Welcome Back
Back With : <@${rw.author.id}> **`)//Toixc Codes
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
         
client.users.get(men.id).sendEmbed(embed)//Toixc Codes
const Embed11 = new Discord.RichEmbed()//Toixc Codes
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)//Toixc Codes
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>//Toixc Codes
`)//Toixc Codes
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})//Toixc Codes
    }//Toixc Codes
}) //Toixc Codes
