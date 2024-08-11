const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "marisel", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }   

   cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

┏✰𝑳𝑨𝑴𝑩𝑶𝑹𝑮𝑯𝑰𝑵𝑰✰┓
┃ ⿻Mode: ${mode}
┃ ⿻User:${s.OWNER_NAME}
┃ ⿻Library : Baileys
️┃ ⿻Prefix : ${s.PREFIXE}
️┃ ⿻Date : ${date}
┃ ⿻Time : ${temps}
┃ ⿻Tools : ${cm.length}
┃ ⿻Ram : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃ ⿻Host : ${os.platform()}
┗✰\n\n┛`;

  
let menuMsg = `
𝐋𝐀𝐌𝐁𝐈𝐑𝐆𝐇𝐈𝐍𝐈 𝐌𝐄𝐍𝐔
`;
    for (const cat in coms) {

        menuMsg += `┏✰ *${cat}*┓`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃◉ ${cmd}`;

        }

        menuMsg += `
┗✰\n┛`

    }

    menuMsg += `
┏┻━━━━━━━━━━━━┻┓
┃𝐌𝐀𝐑𝐈𝐒𝐄𝐋
┗━━━━━━━━━━━━━━┛\n
`;

   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊*, déveloper Cod3uchiha" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *𝒃𝒖𝒈𝒂𝒕𝒕𝒊*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
