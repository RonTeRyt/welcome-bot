const Discord = require('discord.js');
const client = new Discord.Client();

const {prefix, token, channelid, matn, matngoodbe, channelid2} = require(`./bot.json`);

client.login(token);
client.on('ready', () => {
  console.log(`bot ${client.user.tag} online shod  [ready!]`)
})

console.log("node index.js")
client.on("message", message => {
  if (message.content === `${prefix}help welcome`){
    let help =new Discord.MessageEmbed()
    .setColor("RENDOM")
    .setDescription(`welcome test \n ${prefix}test welcome \n test goodbye \n ${prefix}test goodbye\n avatar you \n ${prefix}avatar `)
 message.channel.send(help)
  }
})
client.on("message", message => {
  if (message.content === `${prefix}avatar`){
    if(message.author.bot)return
  
    let welcomeEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }))
message.channel.send(welcomeEmbed)
    
    
 
  }
})

client.on('guildMemberAdd', member => {



  let welcomeChannel = client.channels.cache.get(channelid) 
  if(welcomeChannel){

      let welcomeEmbed = new Discord.MessageEmbed()
      if(member.user.bot){
        welcomeEmbed.setColor()
        welcomeEmbed.setAuthor(`${member.guild.name}`)
        welcomeEmbed.setDescription(`سلام خوش اومدی به سرور <@${member.user.id}>`)
        welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
         welcomeEmbed.setFooter(`ممبر های سرور${member.guild.memberCount}`)
        

welcomeChannel.send(welcomeEmbed)
     
        welcomeChannel.send(welcomeEmbed)
      }else{
   
          welcomeEmbed.setColor()
          welcomeEmbed.setAuthor(`${member.guild.name}`)
          welcomeEmbed.setDescription(`سلام خ.ش اومدی به سرور <@${member.user.id}>`)
          welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
           welcomeEmbed.setFooter(`ممبر های سرور${member.guild.memberCount}`)
   
          welcomeChannel.send(welcomeEmbed)

      }
  }else{
      console.log("یافت نشید ولکام چنل")
  }
})



client.on('message', message => {

  if (message.content === `${prefix}test goodbye`){


      let welcomeEmbed2 = new Discord.MessageEmbed()
if (!message.member.hasPermission("ADMINISTRATOR"))
          welcomeEmbed2.setColor("#5eff00")
          welcomeEmbed2.setAuthor(`test`)
    //welcomeEmbed.setThumbnail()
   welcomeEmbed2.setDescription(`${matngoodbe} ${message.author}`)
     welcomeEmbed2.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed2)
      }
     
  
      

})
client.on('message', message => {

  if (message.content === `${prefix}test welcome`){


      let welcomeEmbed3 = new Discord.MessageEmbed()
if (!message.member.hasPermission("ADMINISTRATOR"))

          welcomeEmbed3.setColor("#5eff00")
          welcomeEmbed3.setAuthor(`test`)
 //   welcomeEmbed.setThumbnail()
   welcomeEmbed3.setDescription(`${matn} ${message.author}`)
   welcomeEmbed3.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed3)
      }
     
  
      

})



client.on('guildMemberRemove', member => {
  let goodnuy = client.channels.cache.get(channelid2) //inja vared ko //inja vared kon
  if(goodnuy){

      let welcomeEmbed4 = new Discord.MessageEmbed()

      if(member.user.bot){

          welcomeEmbed4.setColor("#5eff00")
          welcomeEmbed4.setAuthor(`${member.guild.name}`)
          welcomeEmbed4.setDescription(`خدا نگهدار👋 <@${member.user.id}> `)
          welcomeEmbed4.setThumbnail(member.user.displayAvatarURL())
          welcomeEmbed4.setFooter(`ممبر های سرور${member.guild.memberCount}`)

          goodnuy.send(welcomeEmbed4)
      }else{
          welcomeEmbed4.setColor("#5eff00")
          welcomeEmbed4.setAuthor(`${member.guild.name}`)
          welcomeEmbed4.setDescription(`خدا نگهدار👋 <@${member.user.id}> `)
           welcomeEmbed4.setThumbnail(member.user.displayAvatarURL())
           welcomeEmbed4.setFooter(`ممبر های سرور${member.guild.memberCount}`)
 
          goodnuy.send(welcomeEmbed4)
        
      }
  }else{
      console.log(" گود بای چنل یافت نشد")
  }
})
