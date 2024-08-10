"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*𝑯𝒊 𝑰𝒎 𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊* \n\n ' + "𝑻𝒉𝒆 𝑴𝒐𝒔𝒕 𝒃𝒆𝒍𝒐𝒗𝒆𝒅 𝒃𝒐𝒕";
    let d = ' 𝑩𝒚 *𝑴𝒂𝒓𝒊𝒔𝒆𝒍*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/ab57d624f8447c1a414c1.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://telegra.ph/file/626e7105422c8908f723d.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
