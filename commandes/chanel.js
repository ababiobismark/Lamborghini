"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝑯𝒊 𝒕𝒉𝒊𝒔 \'𝒊𝒔 *𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊* \n\n ' + '𝑻𝒉𝒆 𝑴𝒐𝒔𝒕 𝑩𝒆𝒍𝒐𝒗𝒆𝒅';
    let d = ' 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒅 𝒃𝒚 *𝑴𝒂𝒓𝒊𝒔𝒆𝒍*';
    let varmess = z + d;
    var lien = 'https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x';  // Remplacez cet URL par le lien que vous souhaitez envoyer
    await zk.sendMessage(dest, { text: varmess + "\n" + lien });
});

console.log("mon test");

});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *HACKING-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Thomas*'
      let varmess=z+d
      var img='https://telegra.ph/file/7113ddc85a26a69a7a437.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
