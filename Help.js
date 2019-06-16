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



let ar = JSON.parse(fs.readFileSync(`AutoRole.json`, `utf8`))
client.on('message', message => {
  var sender = message.author
 
if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
 
if(message.content.startsWith(`!autorole`)) {
         
  let perms = message.member.hasPermission(`MANAGE_ROLES`)
 
  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
 let args = message.content.split(" ").slice(1)
 if(!args.join(" ")) return message.reply(`${prefix}autorole toggle / set [ROLE NAME]`)
 let state = args[0]
 if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
   if(state.trim().toLowerCase() == 'toggle') {
    if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
    if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
   }
  if(state.trim().toLowerCase() == 'set') {
  let newRole = message.content.split(" ").slice(2).join(" ")
  if(!newRole) return message.reply(`${prefix}autorole set [ROLE NAME]`)
    if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
   ar[message.guild.id].role = newRole
    message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
  }
        }
if(message.content === '!info') {
   let perms = message.member.hasPermission(`MANAGE_GUILD`)
   if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()
 
.addField(`Autorole : :sparkles:  `, `
State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)
 
 
    .setColor(`BLUE`)
    message.channel.send({embed})
  }
 
 
    fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });
 
 
});
