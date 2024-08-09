const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "joel", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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

 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙟𝙤𝙚𝙡 𝙠𝙖𝙣𝙜'𝙤𝙢𝙖
┃   Mode: ${mode}
┃   User : ${s.OWNER_NAME}
┃
 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙟𝙤𝙚𝙡 𝙠𝙖𝙣𝙜'𝙤𝙢𝙖
 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙟𝙤𝙚𝙡 𝙠𝙖𝙣𝙜'𝙤𝙢𝙖\n\n`;


    

let menuMsg = `
┏━━━━━━━━━━━━━━┓
┣❏joel md bot 
┣❏©joel _it🕷️
┗━━━━━━━━━━━━━━┛\n




𒈒joel md cmds𒈒
`;



    for (const cat in coms) {

        menuMsg += `┏━━━━━⚼ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃🕷️ ${cmd}`;

        }

        menuMsg += `
┗━━━━━━━━━━━━━━┛\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏joel md bot 
┣❏© by joel tech 
┗━━━━━━━━━━━━━━┛\n


┏━━━━━━━━━━━━━━┓
┃regards to joel_it
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *JOEL-BOT*, déveloper joel james" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

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
