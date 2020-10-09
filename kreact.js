// الاعدادات !
const yourID = "688200316994191419"; //  الايدي حقك لكي تستطيع استخدام الامر "createrolemessage"
const devs = ["670616799464783891","588309879471734784","688200316994191419"];  // ايدي المطورين ال معك لكي تستطيع استخدام اوامر الادارة
const prefix = "!"; // برافيكس البوت
const cmd = require("node-cmd");
const setupCMD = `${prefix}createrolemessage`; // الامر لتفعيل الريأكش رول
let initialMessage = '**```diff' ; // the message - "By : Kahrbaa"
let initialMessage3 = '- من هنا تستطيع الضغط علي الرولات الخاصة بك ' ; // the message - "By : Kahrbaa"
let initialMessage4 = '```**' ; // the message - "By : Kahrbaa"
let initialMessage2 = ` > ** يمكنك الحصول علي رتبة لعبة -- > **`; // the message - "By : Kahrbaa"
const roles = ["Valorant","Minecraft","league-of-legend","Over-Watch","COD","R6s","cs-go","Fortnite","Brawlhalla","pubg"]; // هنا بقا اسماء الرتب
const reactions = [":Valorant:756058956283117609",":minecraft:756058875806875679",":Leagueoflegends:756059204627988490",":overwatch:756058692532568144",":callofduty:756059300920557628",":rainbowsixsiege:756058458406518887",":CSGO:764040710768820305",":Fortnite:756059802127433768",":Browlhalla:756059434853204001",":PUPG:756059601899618344"]; // هنا اسماء الايموجي او اشكالة
// لازم يكون اسماء الرتب متساوية معا الايموجي //

const Discord = require('discord.js')
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://cornhotroles.glitch.me/`); // هنا تحط اسم البروجيكت كما ف الشرح
}, 280000);

client.on('ready', () => {
  console.log(`[System] : client Online`);
  console.log(`[System] My Name : ${client.user.username}, This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});


client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'Kahrbaa - GAMERS',
            type: "Streaming",
            url: "https://www.twitch.tv/Kahrbaa"
        }
    });
  
});
	


if (roles.length !== reactions.length) throw "قائمة الأدوار وقائمة ردود الفعل ليست بنفس الطول!";

function generateMessages(){
    var messages = [];
    messages.push(`${initialMessage}
${initialMessage3}
${initialMessage4}`);
    for (let role of roles) messages.push(`${initialMessage2} **"${role}"**`); // متغيرش حاجة هنااا ابدا
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});



client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
  if (message.content.startsWith(prefix + 'vipWT')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(prefix + 'vipLi')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(prefix + 'vipST')) {
    client.user.setGame(argresult, "https://www.twitch.tv/kahrbaa9");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  }
    if (message.content.startsWith(prefix + 'vip')) {
      message.channel.send(`** اوامر الادارة 
"vipWT" : لعمل واتشنق
"vipLi" : لعمل لستنيق
'vipST" : لعمل استرمينق
"vipName" : لتغير الاسم
"vipAV <avatar ulr>"
"vip restart" : ل اعادة تشغيل البوت ** `)
} else
    if (message.content.startsWith(prefix + 'viphelp')) {
      message.channel.send(`** اوامر الادارة 
"vipWT" : لعمل واتشنق
"vipLi" : لعمل لستنيق
'vipST" : لعمل استرمينق
"vipName" : لتغير الاسم
"vipAV <avatar ulr>"
"vip restart" : ل اعادة تشغيل البوت ** `)
} else
    if (message.content.startsWith(prefix + 'vipstaff')) {
      message.channel.send(`** اوامر الادارة 
"vipWT" : لعمل واتشنق
"vipLi" : لعمل لستنيق
'vipST" : لعمل استرمينق
"vipName" : لتغير الاسم
"vipAV <avatar ulr>"
"vip restart" : ل اعادة تشغيل البوت ** `)
} else
  if (message.content.startsWith(prefix + 'vipName')) {
  client.user.setUsername(argresult).then
      message.channel.send(` Client UserName Changed To : \` ${argresult}\` `)
} else
if (message.content.startsWith(prefix + 'vipAV')) {
  client.user.setAvatar(argresult); // By :  " Kahrbaa "
      message.channel.send(` Client Avatar Changed To : \` ${argresult}\` `)
}
});


client.on("message", async message => {
  if(message.author.id !== devs) return;
  if(message.content === prefix + "vip restart") {
    await cmd.run("refresh") // By :  " Kahrbaa "
    await message.channel.send("Done,")
  }
})


client.on('message', message => {
    if(message.content.split(' ')[0].toLowerCase() == prefix + 'stats') {
               if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('BLACK')
            .addField('Ping' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('RAM Usage', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('ID' , `[ ${client.user.id} ]` , true) // By :  " Kahrbaa "
            .addField('Prefix' , `[ ${prefix} ]` , true)
             .setColor('#36393e')
    })
}
});





client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild; // By :  " Kahrbaa "
  let kahrbaagame = guild.roles.find("name", "Black Squad");
  if(!kahrbaagame) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Black Squad") {
    newMember.addRole(kahrbaagame);
  } else if(!newMember.user.game && newMember.roles.has(kahrbaagame.id)) {
  let guild = newMember.guild;
  if(!kahrbaagame) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let pubglite = guild.roles.find("name", "PUBG");
  if(!pubglite) return;  
 // By :  " Kahrbaa "
  if(newMember.user.presence.game && newMember.user.presence.game.name === "PUBG LITE") {
    newMember.addRole(pubglite);
  } else if(!newMember.user.game && newMember.roles.has(pubglite.id)) {
  let guild = newMember.guild;
  if(!pubglite) return;
    
  }  // By :  " Kahrbaa "
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let lol = guild.roles.find("name", "League OF Legends");
  if(!lol) return;  
 // By :  " Kahrbaa "
  if(newMember.user.presence.game && newMember.user.presence.game.name === "League OF Legends") {
    newMember.addRole(lol); // By :  " Kahrbaa "
  } else if(!newMember.user.game && newMember.roles.has(lol.id)) {
  let guild = newMember.guild;
  if(!lol) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let kahrbaagame = guild.roles.find("name", "GTA V");
  if(!kahrbaagame) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Grand Theft Auto V") {
    newMember.addRole(kahrbaagame);
  } else if(!newMember.user.game && newMember.roles.has(kahrbaagame.id)) {
  let guild = newMember.guild;
  if(!kahrbaagame) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let Fortnite = guild.roles.find("name", "Fortnite");
  if(!Fortnite) return;  
 
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Fortnite") {
    newMember.addRole(Fortnite);
  } else if(!newMember.user.game && newMember.roles.has(Fortnite.id)) {
  let guild = newMember.guild;
  if(!Fortnite) return;
    
  }  
});


client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let kahrbaagame = guild.roles.find("name", "Minecraft");
  if(!kahrbaagame) return;  // By :  " Kahrbaa "
 // By :  " Kahrbaa "
  if(newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft" ) {
    newMember.addRole(kahrbaagame); // By :  " Kahrbaa "
  } else if(!newMember.user.game && newMember.roles.has(kahrbaagame.id)) {
  let guild = newMember.guild;
  if(!kahrbaagame) return;
    
  }  
}); // By :  " KahrbaaYT "

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild; // By :  " Kahrbaa "
  let kahrbaagame = guild.roles.find("name", "FiveM");
  if(!kahrbaagame) return;  
 // By :  " Kahrbaa "
  if(newMember.user.presence.game && newMember.user.presence.game.name === "FiveM") {
    newMember.addRole(kahrbaagame);
  } else if(!newMember.user.game && newMember.roles.has(kahrbaagame.id)) {
  let guild = newMember.guild;
  if(!kahrbaagame) return; // By :  " Kahrbaa "
    
  }  
}); // By :  " Kahrbaa "

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let roblox = guild.roles.find("name", "Roblox");
  if(!roblox) return;  
 // By :  " Kahrbaa "
  if(newMember.user.presence.game && newMember.user.presence.game.name === "ROBLOX") {
    newMember.addRole(roblox);
  } else if(!newMember.user.game && newMember.roles.has(roblox.id)) {
  let guild = newMember.guild;
  if(!roblox) return;
     // By :  " Kahrbaa "
  }  
});


// By :  " Kahrbaa "

client.login(process.env.BOT_KAHRBAA); // حط التوكن ف ملف .env 