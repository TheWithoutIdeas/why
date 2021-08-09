//web
const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send("Yeah i guess")
});

//packages
const Discord = require("discord.js");
require("discord-reply");
const client = new Discord.Client();
const db = require("quick.db");
const moment = require("moment");

//status and more
client.on("ready", () => {
client.user.setActivity("Some servers", { type: "WATCHING" });
});

//command connects
client.on("message", async (message) => {

  //Rules and important stuff
  let prefix = db.get(`prefix_${message.guild.id}`);
  if(!prefix) {
    prefix = "!"
  }
	if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot || message.content.includes('@here') || message.content.includes('@everyone')) {
		return;
  }

  //defining what is a command
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(" ");
	const command = args.shift().toLowerCase();

  // Types of vip / developer
  let vipget = db.get(`vip_${message.author.id}`);
  let vipgoldget = db.get(`vipgold_${message.author.id}`);
  let vipdiamondget = db.get(`vipdiamond_${message.author.id}`);
  let developerget = db.get(`developer_${message.author.id}`);

  //cash delivery date
  let datecheck = moment(new Date()).format("DD");
  
  //owner
  if(message.author.id === "861376659597164545") {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(datecheck = 21) {
      if(!cashdelivered) {
      db.add(`cash_${message.author.id}`, 125);
      db.set(`cashvip_${message.author.id}`, true);
      let embed = new Discord.MessageEmbed()
      .setTitle("You got your cash delivered!")
      .setDescription(`As today is ${datecheck} and you are the owner, you got your 125 cash delivery!`)
      .setColor("PURPLE")
      .setThumbnail(`https://discord.com/assets/11b9d8164d204c7fd48a88a515745c1d.svg`)
      message.author.send(embed)
      }
    }
    else {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(cashdelivered === true) {
    db.delete(`cashvip_${message.author.id}`);
    }
    }
  };

  //normal vip
  if(vipget === true) {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(datecheck = 21) {
      if(!cashdelivered) {
      db.add(`cash_${message.author.id}`, 25)
      db.set(`cashvip_${message.author.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle(`You got your cash delivered!`)
      .setDescription(` As today is ${datecheck} and you are vip, you got your 25 cash delivery!`)
      .setColor("PURPLE")
      .setThumbnail("https://discord.com/assets/11b9d8164d204c7fd48a88a515745c1d.svg");
      message.author.send(embed);
      }
    }
    else {
    let cashdelivered = db.get(`cashvip_${message.author.id}`)
    if(cashdelivered === true) {
    db.delete(`cashvip_${message.author.id}`)
    }
    }
  };

  //gold vip
  if(vipgoldget === true) {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(datecheck = 21) {
      if(!cashdelivered) {
      db.add(`cash_${message.author.id}`, 45);
      db.set(`cashvip_${message.author.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle("You got your cash delivered!")
      .setDescription(`As today is ${datecheck} and you are vip gold, you got your 45 cash delivery!`)
      .setColor("PURPLE")
      .setThumbnail("https://discord.com/assets/11b9d8164d204c7fd48a88a515745c1d.svg");
      message.author.send(embed)
      }
    }
    else {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(cashdelivered === true) {
    db.delete(`cashvip_${message.author.id}`)
    }
    }
  };

  //vip diamond
  if(vipdiamondget === true) {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(datecheck = 21) {
      if(!cashdelivered) {
      db.add(`cash_${message.author.id}`, 65)
      db.set(`cashvip_${message.author.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle("You got your cash delivered!")
      .setDescription(`As today is ${datecheck} and you are vip diamond, you got your 65 cash delivery!`)
      .setColor("PURPLE")
      .setThumbnail("https://discord.com/assets/11b9d8164d204c7fd48a88a515745c1d.svg");
      message.author.send(embed)
      }
    }
    else {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(cashdelivered === true) {
    db.delete(`cashvip_${message.author.id}`)
    }
    }
  };

  //developer
  if(developerget === true) {
    let cashdelivered = db.get(`cashdeveloper_${message.author.id}`)
    if(datecheck = 21) {
      if(!cashdelivered) {
      db.add(`cash_${message.author.id}`, 100)
      db.set(`cashdeveloper_${message.author.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle("You got your cash delivered!")
      .setDescription(`As today is ${datecheck} and you are a developer, you got your 100 cash delivery!`)
      .setColor("PURPLE")
      .setThumbnail("https://discord.com/assets/11b9d8164d204c7fd48a88a515745c1d.svg");
      message.author.send(embed)
      }
    }
    else {
    let cashdelivered = db.get(`cashvip_${message.author.id}`);
    if(cashdelivered === true) {
    db.delete(`cashvip_${message.author.id}`)
    }
    }
  };

  //commands
  if(command.toLowerCase() === "ping") {
    let pinging = new Discord.MessageEmbed()
    .setTitle(`Pinging...`)
    .setColor("GREEN");
    let ping = Date.now() - message.createdTimestamp;
    let ping2 = Math.round(client.ws.ping);
    let pong = new Discord.MessageEmbed()
    .setTitle(`PONG`)
    .setDescription(`🏓 Latency - \`\`${ping}\`\`ms \n🤖 Api Latency - \`\`${ping2}\`\`ms`);
    if(ping <= 150) {
      pong.setFooter(`Fast response!`)
      pong.setColor("GREEN")
    };
    if(ping > 150 && ping <= 500) {
      pong.setFooter("Not so fast but it answers the commands")
      pong.setColor("YELLOW");
    };
    if(ping > 500) {
      pong.setFooter("Really slow. Please contact a developer if this continues")
      pong.setColor("RED")
    };
    message.channel.send(pinging).then(message => {
      setTimeout(function() {
        message.edit(pong);
      }, ping)
    })
  };
  if(command.toLowerCase() === "work") {
  let worklist = [
    "Streamer",
    "Programmer",
    "Clown",
    "Babysitter",
    "Middle aged teacher who is unhappy with their life",
    "Forex Trader",
    "Scammer"
  ];
  let works = Math.floor(Math.random() * worklist.length);
  let work = worklist[works];
  let money = Math.floor(Math.random() * 1000) + 500;
  let embed = new Discord.MessageEmbed()
  .setTitle(`You worked as a ${work} and won ${money} Coins`)
  .setColor("PURPLE");
  if(work === "Streamer") {
    embed.setThumbnail(`https://cdn.discordapp.com/attachments/872503326296641568/873336164986269726/Why_1.png`)
  }
  db.add(`money_${message.author.id}`, money)
  message.lineReply(embed)
  };
  if(command.toLowerCase() === "balance" || command.toLowerCase() === "bal" || command.toLowerCase() === "b" || command.toLowerCase() === "money" || command.toLowerCase() === "m") {
    let user = message.mentions.users.first();
    if(!user) {
      user = message.author;
    };
    let money = db.get(`money_${user.id}`);
    if(!money) {
      money = 0;
    };
    let inventoryvalue = db.get(`invvalue_${user.id}`);
    if(!inventoryvalue) {
      inventoryvalue = 0;
    };
    let level = db.get(`mlevel_${user.id}`);
    if(!level) {
      level = 1;
    };
    let xp = db.get(`mxp_${user.id}`);
    if(!xp) {
      xp = 0;
    };
    let levelrate = db.get(`mlevelrate_${message.guild.id}`);
    let xpnecessary = db.get(`mxpnecessary_${message.guild.id}`);
    if(!xpnecessary) {
      xpnecessary = 150;
    };
    if(!levelrate) {
      levelrate = xpnecessary * 1;
    };
    let cash = db.get(`cash_${user.id}`);
    if(!cash) {
      cash = 0
    };
    let credit = db.get(`credit_${user.id}`);
    if(!credit) {
      credit = 0
    };
    let moneyembed = new Discord.MessageEmbed()
    .setTitle(`${user.username}'s net worth`)
    .setDescription("**Note: items are valued. Please do not try to sell to anyone with a different value**")
    .addFields(
      { name: ":money_with_wings: **Coins:**", value: `\`\`${money}\`\``, inline: true},
      { name: ":credit_card: **Bank Credit:**", value: `\`\`${credit}\`\``, inline: true},
      { name: ":coin: **Cash:**", value: `\`\`${cash}\`\``, inline: true},
      { name: ":moneybag: **Inventory value:**", value: `\`\`${inventoryvalue}\`\``, inline: true}
    )
    .addFields(
      { name: "**Money Level:**", value: `\`\`${level}\`\``, inline: true},
      { name: "**Money xp:**", value: `\`\`${xp}/${level*levelrate}\`\``, inline: true},
    )
    .setColor("ORANGE")
    .setThumbnail(user.displayAvatarURL({dynamic : true}));
    message.channel.send(moneyembed);
  };
  if(command.toLowerCase() === "shop") {
  let shopembed = new Discord.MessageEmbed()
  .setTitle(":shopping_cart: Shop")
  .setDescription("<:VipNormal:873217193989517322> VIP - \`\`1.500.000\`\` Coins / \`\`20\`\` Cash :coin:")
  .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setFooter("Page 1")
  .setColor("YELLOW");
  message.channel.send(shopembed);
  }
  if(command.toLowerCase() === "vip") {
    let developer = db.get(`developer_${message.author.id}`);
    if(developer === true || message.author.id === "861376659597164545") {
    let user = message.mentions.users.first();
    if(!user) {
      user = message.author;
    };
    let vip = db.get(`vip_${user.id}`);
    let vipgold = db.get(`vipgold_${user.id}`);
    let vipdiamond = db.get(`vipdiamond_${user.id}`);
    let cashvip = db.get(`cashvip_${user.id}`);
    if(!cashvip) {
      cashvip = "ready for next month";
    };
    if(cashvip === true) {
      cashvip = "this user collected their cash today, so they need to wait 1 month";
    };
    let vipp = "Not a vip";
    let color = "BLUE";
    if(vip === true) {
      vipp = "Normal VIP"
      color = "RED"
    }
    if(vipgold === true) {
      vipp = "VIP Gold"
      color = "ORANGE"
    }
    if(vipdiamond === true) {
      vipp = "VIP Diamond"
      color = "#03d3fc"
    }
    let vipembed = new Discord.MessageEmbed()
    .setTitle(`Vip?`)
    .setDescription(`Hello there, if you have any questions about perks and how to get vip, just do !help vip. \n\n**__VIP Status__** \n${user.username}  is currently ${vipp} \n\n**__Cash Status__** \n${cashvip}`)
    .setFooter(`Developer tool`)
    .setColor(color)
    message.channel.send(vipembed)
    }
    else {
    let cashvipp = db.get(`cashvip_${message.author.id}`)
    if(!cashvipp) {
      cashvipp = "ready for next month"
    }
    if(cashvipp === true) {
      cashvipp = "you collected your cash today, so wait 1 month"
    }
    let author = message.author
    let vip = db.get(`vip_${author.id}`)
    let vipgold = db.get(`vipgold_${author.id}`)
    let vipdiamond = db.get(`vipdiamond_${author.id}`)
    let vipp = "Not a vip"
    let color = "BLUE"
    if(vip === true) {
      vipp = "Normal VIP"
      color = "RED"
    }
    if(vipgold === true) {
      vipp = "VIP Gold"
      color = "ORANGE"
    }
    if(vipdiamond === true) {
      vipp = "VIP Diamond"
      color = "#03d3fc"
    }
    let vipembed = new Discord.MessageEmbed()
    .setTitle(`Vip?`)
    .setDescription(`Hello there, if you have any questions about perks and how to get vip, just do !help vip. \n\n**__VIP Status__** \nYou are currently ${vipp} \n\n**__Cash Status__** \n${cashvipp}`)
    .setColor(color)
    message.channel.send(vipembed)
  }
  }
  if(command.toLowerCase() === "upgrade") {
    let user = message.author
    let vip = db.get(`vip_${user.id}`)
    let vipgold = db.get(`vipgold_${user.id}`)
    let vipdiamond = db.get(`vipdiamond_${user.id}`)

    //upgrade to normal vip
    if(!vip && !vipgold && !vipdiamond) {
      let filter = m => m.author.id === message.author.id
      let embed = new Discord.MessageEmbed()
      .setTitle(`Upgrade to vip?`)
      .setDescription(`Would you like to upgrade to vip? It will cost 1.500.000$ or 20 Cash (in case you do not have 1,5M$, the bot will check your cash and if you have 20 cash, it will upgrade automatically)`)
      .setColor("#ff3b21")
      .setFooter(`Yes / No`)
      message.channel.send(embed).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 60000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            let money = db.get(`money_${user.id}`)
            let cash = db.get(`cash_${user.id}`)
            if(money >= 1500000) {
              db.subtract(`money_${message.author.id}`, 1500000)
              db.set(`vip_${message.author.id}`, true)
              let success = new Discord.MessageEmbed()
              .setTitle(`Successfull Upgrade!`)
              .setColor("GREEN")
              .setDescription(`You are now VIP! \nIf you want to know more info about VIP and it's perks and rewards, do !help vip`)
              message.channel.send(success)
            }
            else if(money <= 1500000 && cash >= 20) {
              db.subtract(`cash_${message.author.id}`, 20)
              db.set(`vip_${message.author.id}`, true)
              let success = new Discord.MessageEmbed()
              .setTitle(`Successfull Upgrade!`)
              .setColor("GREEN")
              .setDescription(`You are now VIP! \nIf you want to know more info about VIP and it's perks and rewards, do !help vip`)
              message.channel.send(success)
            }
            else {
              let embed = new Discord.MessageEmbed()
              .setTitle(`Oh no :(`)
              .setDescription(`You do not have enough money / cash to upgrade to vip`)
              .setColor("RED")
              message.channel.send(embed)
            }
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.channel.send(`Ok then... upgrade canceled`)
          } else {
            message.channel.send(`That is not a valid answer, please say YES or NO`)
          }
        })
        .catch(collected => {
            message.channel.send(`You took too long... what is the point of trying to upgrade to then ignore me \n${collected}`)
        });
    })
    }

    //upgrade to vip gold
    if(vip === true && !vipgold && !vipdiamond) {
      let filter = m => m.author.id === message.author.id
      let embed = new Discord.MessageEmbed()
      .setTitle(`Upgrade to vip gold?`)
      .setDescription(`Would you like to upgrade to vip gold? It will cost 3.500.000$ or 40 Cash (in case you do not have 3,5M$, the bot will check your cash and if you have 40 cash, it will upgrade automatically)`)
      .setColor("#ff3b21")
      .setFooter(`Yes / No`)
      message.channel.send(embed).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 60000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            let money = db.get(`money_${user.id}`)
            let cash = db.get(`cash_${user.id}`)
            if(money >= 3500000) {
              db.subtract(`money_${message.author.id}`, 3500000)
              db.set(`vipgold_${message.author.id}`, true)
              db.delete(`vip_${message.author.id}`)
              let success = new Discord.MessageEmbed()
              .setTitle(`Successfull Upgrade!`)
              .setColor("GREEN")
              .setDescription(`You are now VIP Gold! \nIf you want to know more info about VIP Gold and it's perks and rewards, do !help vipgold`)
              message.channel.send(success)
            }
            else if(money <= 3500000 && cash >= 40) {
              db.subtract(`cash_${message.author.id}`, 40)
              db.set(`vipgold_${message.author.id}`, true)
              db.delete(`vip_${message.author.id}`)
              let success = new Discord.MessageEmbed()
              .setTitle(`Successfull Upgrade!`)
              .setColor("GREEN")
              .setDescription(`You are now VIP Gold! \nIf you want to know more info about VIP Gold and it's perks and rewards, do !help vipgold`)
              message.channel.send(success)
            }
            else {
              let embed = new Discord.MessageEmbed()
              .setTitle(`Oh no :(`)
              .setDescription(`You do not have enough money / cash to upgrade to vip gold`)
              .setColor("RED")
              message.channel.send(embed)
            }
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.channel.send(`Ok then... upgrade canceled`)
          } else {
            message.channel.send(`That is not a valid answer, please say YES or NO`)
          }
        })
        .catch(collected => {
            message.channel.send(`You took too long... what is the point of trying to upgrade to then ignore me \n${collected}`);
        });
    })
    }

    //upgrade to vip diamond
    if(!vip && vipgold === true && !vipdiamond || vip === true && vipgold === true && !vipdiamond) {
      let filter = m => m.author.id === message.author.id
      let embed = new Discord.MessageEmbed()
      .setTitle(`Upgrade to vip diamond?`)
      .setDescription(`Would you like to upgrade to vip diamond? It will cost 6.000.000$ or 60 Cash (in case you do not have 6M$, the bot will check your cash and if you have 60 cash, it will upgrade automatically)`)
      .setColor("#ff3b21")
      .setFooter(`Yes / No`)
      message.channel.send(embed).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 60000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            let money = db.get(`money_${user.id}`)
            let cash = db.get(`cash_${user.id}`)
            if(money >= 6000000) {
              db.subtract(`money_${message.author.id}`, 6000000)
              db.set(`vipdiamond_${message.author.id}`, true)
              db.delete(`vipgold_${message.author.id}`)
              let success = new Discord.MessageEmbed()
              .setTitle(`Successfull Upgrade!`)
              .setColor("GREEN")
              .setDescription(`You are now VIP Diamond! \nIf you want to know more info about VIP Diamond and it's perks and rewards, do !help vipdiamond`)
              message.channel.send(success)
            }
            else if(money <= 6000000 && cash >= 60) {
              db.subtract(`cash_${message.author.id}`, 60)
              db.set(`vipdiamond_${message.author.id}`, true)
              db.delete(`vipgold_${message.author.id}`)
              let success = new Discord.MessageEmbed()
              .setTitle(`Successfull Upgrade!`)
              .setColor("GREEN")
              .setDescription(`You are now VIP Diamond! \nIf you want to know more info about VIP Diamond and it's perks and rewards, do !help vipdiamond`)
              message.channel.send(success)
            }
            else {
              let embed = new Discord.MessageEmbed()
              .setTitle(`Oh no :(`)
              .setDescription(`You do not have enough money / cash to upgrade to vip diamond`)
              .setColor("RED")
              message.channel.send(embed)
            }
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.channel.send(`Ok then... upgrade canceled`)
          } else {
            message.channel.send(`That is not a valid answer, please say YES or NO`)
          }
        })
        .catch(collected => {
            message.channel.send(`You took too long... what is the point of trying to upgrade to then ignore me \n${collected}`);
        });
    })
    }

    //vip diamond, what about now?
    if(vipdiamond === true) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Why?`)
      .setDescription(`You already have maximum level of vip... why would you want to upgrade from that?`)
      .setColor("RED")
      .setThumbnail(`https://cdn.discordapp.com/attachments/872514306346999878/872514337821044746/sad_face_1_adobespark.png`)
      message.channel.send(embed)
    }
  }
  if(command.toLowerCase() === "profile" || command.toLowerCase() === "p") {
  let user = message.mentions.users.first()
  if(!user) {
    user = message.author
  }
  if(!args[0] || message.mentions.users.first()) {
  let usetothisprofile = db.get(`usetothisprofile2_${user.id}`)
  if(!usetothisprofile) {
  db.add(`usetothisprofile2_${user.id}`, 1)
  db.add(`bruh1_${client.id}`, 1)
  let profiletagtoset = db.get(`bruh1_${client.id}`)
  db.set(`profiletag1_${user.id}`, profiletagtoset)
  db.set(`searchwithprofiletag_${profiletagtoset}`, user.id)
  }
  let profiletag = db.get(`profiletag1_${user.id}`)
  let vip = db.get(`vip_${user.id}`)
  let aboutme = db.get(`aboutme_${user.id}`)
  let vipgold = db.get(`vipgold_${user.id}`)
  let vipdiamond = db.get(`vipdiamond_${user.id}`)
  let developer = db.get(`developer_${user.id}`)
  let coins = db.get(`money_${user.id}`)
  let bank = db.get(`bank_${user.id}`)
  let inventoryvalue = db.get(`invvalue_${user.id}`)
  let entirenetworth = Math.floor(coins + bank + inventoryvalue)
  let emoji = `<:NoMedals:873239636925886514>`
  let color = "#1b0cc2"
  if(!vip && !vipgold && !vipdiamond) {
  color = "YELLOW"
  }
  if(!aboutme) {
    aboutme = "This profile does not have an about me"
  }
  if(vip === true) {
    emoji = `<:VipNormal:873217193989517322>`
    color = "RED"
  }
  if(vipgold === true) {
    emoji = `<:VipGold:873217197374312469>`
    color = "ORANGE"
  }
  if(vipdiamond === true) {
    emoji = `<:VipDiamond:873217200620732496>`
    color = "#03a9fc"
  }
  let cash = db.get(`cash_${user.id}`)
  if(!cash) {
    cash = 0
  }
  if(developer === true) {
    color = "#1b0cc2"
  }
  let profile = new Discord.MessageEmbed()
  .setTitle(`${user.username}'s Profile ${emoji}`)
  .addFields(
    { name: `:gem: Entire Net Worth`, value: `${entirenetworth}`, inline: true },
    { name:`:coin: Cash`, value: `${cash}`, inline: true }
  )
  .setColor(`${color}`)
  .setDescription(`${aboutme}`)
  .setFooter(`Profile #${profiletag}`)
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
  if(developer === true) {
    profile.setTitle(`${user.username}'s Profile ${emoji} <:Developer:873243466224791612>`)
  }
  if(user.id === "861376659597164545") {
    profile.setTitle(`${user.username}'s Profile ${emoji} <:Owner:873244943324442624>`)
  }
  message.channel.send(profile)
  }
  else {
  let tagsearch = args.slice(0)
  let tagsearchtouser = db.get(`searchwithprofiletag_${tagsearch}`)
  if(args[0].toLowerCase() === "set") {
  if(!args[1]) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`what`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/872514306346999878/872514337821044746/sad_face_1_adobespark.png`)
    .setDescription(`Can you specify a profile variable? \nExample: aboutme / ${prefix}p set aboutme <aboutme>`)
    .setColor("RED")
    message.lineReply(embed)
  }
  else if(args[1].toLowerCase() === "aboutme") {
      let newaboutme = args.splice(2).join(' ')
      if(!newaboutme || newaboutme.length > 500) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`There is no about me`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/872514306346999878/872514337821044746/sad_face_1_adobespark.png`)
      .setDescription(`You did not even specify a new about me or your about me is too long! please specify a valid aboutme with less then 500 letters`)
      .setColor("RED")
      message.lineReply(embed)
      }
      else {
        db.set(`aboutme_${message.author.id}`, newaboutme)
        let embed = new Discord.MessageEmbed()
        .setTitle(`New about me!`)
        .setDescription(`Your new about me is: \n__${newaboutme}__`)
        .setColor("GREEN")
        message.lineReply(embed)
      }
    }
  }
  else if(!message.mentions.users.first() && tagsearch || !message.mentions.users.first() && args[0].includes("#")) {
    let usetothisprofile = db.get(`usetothisprofile2_${tagsearchtouser}`)
    if(!usetothisprofile) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Oh no :/`)
    .setDescription(`Seems like this profile doesn't exist! Please search with other tags`)
    .setFooter(`Make sure you use ONLY numbers as tags. Example: !profile 1`)
    .setColor("RED")
    message.channel.send(embed)
    }
    else {
    let profiletag = db.get(`profiletag1_${tagsearchtouser}`)
    let vip = db.get(`vip_${tagsearchtouser}`)
    let vipgold = db.get(`vipgold_${tagsearchtouser}`)
    let vipdiamond = db.get(`vipdiamond_${tagsearchtouser}`)
    let developer = db.get(`developer_${tagsearchtouser}`)
    let aboutme = db.get(`aboutme_${tagsearchtouser}`)
    let cash = db.get(`cash_${tagsearchtouser}`)
  let coins = db.get(`money_${tagsearchtouser}`)
  let bank = db.get(`bank_${tagsearchtouser}`)
  let inventoryvalue = db.get(`invvalue_${tagsearchtouser}`)
  let entirenetworth = Math.floor(coins + bank + inventoryvalue)
    let emoji = `<:NoMedals:873239636925886514>`
    let color1 = "#1b0cc2"
    if(!cash) {
    cash = 0
    }
    if(!aboutme) {
      aboutme = `This profile does not have an about me!`
    }
    if(developer === true) {
      color1 = "#1b0cc2"
    }
    if(!vip && !vipgold && !vipdiamond) {
      color1 = "YELLOW"
    }
    if(vip === true) {
    emoji = `<:VipNormal:873217193989517322>`
    color1 = "RED"
    }
    if(vipgold === true) {
    emoji = `<:VipGold:873217197374312469>`
    color1 = "ORANGE"
    }
    if(vipdiamond === true) {
    emoji = `<:VipDiamond:873217200620732496>`
    color1 = "#03a9fc"
    }
    if(!color1 || color1 === "BLACK") {
      color1 = "PURPLE"
    }
    let a = await client.users.fetch(`${tagsearchtouser}`)
    let profile = new Discord.MessageEmbed()
    .addFields(
      { name: `:gem: Entire Net Worth`, value: `${entirenetworth}`, inline: true },
      { name:`:coin: Cash`, value:`${cash}`, inline: true }
      )
    .setColor(`${color1}`)
    .setDescription(`${aboutme}`)
    .setFooter(`Profile #${profiletag}`)
    .setThumbnail(a.displayAvatarURL())
    .setTitle(`${a.username}'s Profile ${emoji}`)
    if(developer === true) {
      if(emoji === `<:NoMedals:873239636925886514>`) {
      profile.setTitle(`${a.username}'s Profile  <:Developer:873243466224791612>`)
      }
      else {
      profile.setTitle(`${a.username}'s Profile ${emoji} <:Developer:873243466224791612>`)
      }
    }
    if(tagsearchtouser === "861376659597164545") {
      profile.setTitle(`${a.username}'s Profile ${emoji} <:Owner:873244943324442624>`)
    }
    if(tagsearchtouser === "873911024603004988") {
      if(emoji === `<:NoMedals:873239636925886514>`) {
      profile.setTitle(`${a.username}'s Profile  <:Helper:873914146759004200>`)
      }
      else {
      profile.setTitle(`${a.username}'s Profile ${emoji} <:Helper:873914146759004200>`)
      }
    }
  message.channel.send(profile)
  }
  }
  }
  }
  if(command.toLowerCase() === "setprefix") {
    let prefixargs = args[0]
    if(!prefixargs) {
      let error = new Discord.MessageEmbed()
      .setTitle(`No prefix was set!`)
      .setDescription(`Please say the prefix you want to set to!`)
      .setColor("RED")
      .setImage("https://cdn.discordapp.com/attachments/872514306346999878/872514337821044746/sad_face_1_adobespark.png")
      message.lineReplyNoMention(error)
    }
    else {  
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      let error = new Discord.MessageEmbed()
      .setTitle(`No permissions!`)
      .setDescription(`You do not have administrator permissions to execute this command!`)
      .setColor("RED")
      .setImage("https://cdn.discordapp.com/attachments/872514306346999878/872514337821044746/sad_face_1_adobespark.png")
      message.lineReplyNoMention(error)
    }
    else {
      db.set(`prefix_${message.guild.id}`, prefixargs)
      let success = new Discord.MessageEmbed()
      .setTitle(`New prefix!`)
      .setColor("GREEN")
      .setDescription(`${message.guild.name}'s new prefix is: \`\`${prefixargs}\`\``)
      message.channel.send(success)
      db.add(`prefixchanges_${client.id}`, 1)
      let prefixchanges = db.get(`prefixchanges_${client.id}`)
      let embedforglogs = new Discord.MessageEmbed()
      .setTitle(`Prefix log #${prefixchanges}`)
      .setDescription(`${message.guild.name} (${message.guild.id}) just changed their prefix to: \`\`${prefixargs}\`\``)
      .setColor("PURPLE")
      let globallogs = client.channels.cache.get("872590517735682058")
      globallogs.send(embedforglogs)
    }
  }
  }
  if(command.toLowerCase() === "justforvipcashspecialocasions") {
    if(message.member.id ==! "861376659597164545") {
      return
    }
    else {
      message.channel.send("success")
      db.delete(`cashvip_${message.author.id}`)
    }
  }
  if(command.toLowerCase() === "uptime") {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let embed = new Discord.MessageEmbed()
    .setTitle(`Uptime`)
    .setColor("PURPLE")
    .setDescription(`Days - ${days} \nHours - ${hours} \nMinutes - ${minutes} \nSeconds - ${seconds}`)
    .setFooter(`Non-developer uptime`)
    message.channel.send(embed)
  }
  if(command.toLowerCase() === "help") {
    let commandcheck = args[0]
    let prefixhelp = db.get(`prefix_${message.guild.id}`)
    if(!prefixhelp) {
      prefixhelp = "!"
    }
    if(!commandcheck) {
    let help = new Discord.MessageEmbed()
    .setTitle(`The most helpfull embed`)
    .setDescription(`:wrench: Moderation - \`\`${prefixhelp}setprefix\`\` \n\n:moneybag: Economy - \`\`${prefixhelp}money\`\`, \`\`${prefixhelp}profile\`\` (you can mention someone or use tags, make sure you only use the number of the tag though)\n\n**More soon...** \n\n**__Team__** \n- ABigDisappointment#2294 [Owner]`)
    .setURL(`https://discord.gg/stAxsb4XhA`)
    .setFooter(`If you need help with a specific command, just type ${prefixhelp}help <command / item / money variable (example: cash)>`)
    .setColor("#ff8a54")
    message.channel.send(help)
    }
    else if(commandcheck.toLowerCase() === "setprefix") {
      let setprefix = new Discord.MessageEmbed()
      .setTitle(`${prefixhelp}setprefix <prefix>`)
      .setDescription(`This command sets your server's prefix.`)
      .setFooter(`<> - Required | [] - Util but not required | () - Not required at all and probably not so util`)
      .setColor("#34eb95")
      message.channel.send(setprefix)
    }
    else if(commandcheck.toLowerCase() === "cash") {
      let cashembed = new Discord.MessageEmbed()
      .setTitle(`:coin: Cash`)
      .setDescription(`Cash is a really rare type of money. \nThe most commun and easier ways to get cash is: \n**- Upgrading to the money levels 25, 50 and 100 (also if you are top 1 on !money top)** \n**- Boosting WHY's server, for us that is considered a donation so yeah <3** \n**- Being a vip / developer also gives you money (if today is the 6th, you receive your cash, can be up to 100 depending on the type of vip you have or if you are a developer)** \n**And finally but not least, just by having extreme luck on !cassino and other rng commands :D**`)
      .setColor("#34eb95")
      .setFooter(`Money variable`)
      message.channel.send(cashembed)
    }
    else if(commandcheck.toLowerCase() === "profile" || commandcheck.toLowerCase() === "p") {
      let profileembed = new Discord.MessageEmbed()
      .setTitle(`Profiles`)
      .setDescription(`**__What are profiles?__** \nProfiles are embeds that resume your entire progress / status. \n\n**__Some info on profiles__** \n**Profile tag** - the profile tag shows what account number your profile is and the later you "create" your profile, more people can register new profiles meaning your tag will have a higher number. \nExample: the first profile has the tag of #1 (or 1, to see with \`\`${prefixhelp}profile <number / mention>\`\`). \n\n**About me** - the about me of your profile is a brief description of yourself! set it with \`\`${prefixhelp}p set aboutme <newaboutme>\`\` `)
      .setColor("#42f58a")
      message.channel.send(profileembed)
    }
    else if(commandcheck.toLowerCase() === "vip") {
      let vipembed = new Discord.MessageEmbed()
      .setTitle(`VIP`)
      .setDescription(`**__What is vip?__** \nVIP is something that gives you lots of perks and rewards \n\n**__What are the perks and rewards?__** \n**Cash**\n Cash is a rare economy where gives you advantage on buying items, upgrading vip, ... \nYou can get cash (every month on day 21), depending on the level of your vip. \nVIP Normal - 25 cash \nVIP Gold - 45 cash \nVIP Diamond - 65 cash \n\n**VIP kits & more commands** \n Vips have access to more commands and more kits and again, depending on the level of your vip, you can have access to more and better commands. \n\n**Money advantage** \nAre you tired of paying taxes everytime you deposit something on the bank? with vip you don't pay taxes, also you get more money on the commun commands such as **${prefixhelp}work**,... \n\n**More chances on rng** \nTo make it fair, we didn't make the advantage too big, because that would be kind of bad, so you have only 2-5% more chance on rng commands then non-vip members (depending on your vip level, again) \nVIP Normal - +2% \nVIP Gold - +3.5% \nVIP Diamond - +5% \n\n**__How to get vip?__** \nYou can get vip for free or by boosting on our server as a donation <3\nIf you want a vip for free, you can just buy it from the ${prefixhelp}shop, or have extreme luck on the cassino or even by commercializing with other players! \n**Note: it can take up to 24 hours to get your vip by boosting, so if it is instantaneous for you or takes almost 1 day, remember this ;D**`)
      .setColor("GREEN")
      .setThumbnail(`https://cdn.discordapp.com/emojis/873217200620732496.png?v=1`)
      message.channel.send(vipembed)
    }
  }
  if(command.toLowerCase() === "settings") {
    message.channel.send("soon")
  }
})

//vip give
client.on('guildMemberUpdate', async (oldMember, newMember) => {
  if (oldMember.premiumSince !== newMember.premiumSince) {
    if(newMember.roles.has("872503325747204107")) {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Boost!`)
    .setDescription(`Someone just boosted the server! \nAs a reward, you got some items and now you have perks! Thank you so much for boosting our server and liking our bot, this means a lot to the developers to continue! :D`)
    .setColor("PURPLE")
    let vip = db.get(`vip_${newMember.id}`)
    let vipgold = db.get(`vipgold_${newMember.id}`)
    let vipdiamond = db.get(`vipdiamond_${newMember.id}`)
    if(!vip) {
    db.set(`vip_${newMember.id}`, true)
    }
    if(vip === true) {
    db.set(`vipgold_${newMember.id}`, true)
    }
    if(vipgold === true) {
    db.set(`vipdiamond_${newMember.id}`, true)
    }
    if(vipdiamond === true) {
    db.add(`cash_${newMember.id}`, 25)
    }
    db.add(`cash_${newMember.id}`, 75)
    newMember.guild.channels.get("872503326296641568").send(embed);
  }
  else {
    return
  }
  }
});
//Bot started well?
app.listen(3000, () => {
  console.log("\x1b[32m%s\x1b[0m", 'Bot started successfully');
});

//bot login
const token = process.env['BotKey']
client.login(token)
