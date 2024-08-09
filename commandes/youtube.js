const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');
const yt=require("../framework/dl/ytdl-core.js")
const ffmpeg = require("fluent-ffmpeg");
const yts1 = require("youtube-yts");
//var fs =require("fs-extra")

zokou({
  nomCom: "play",
  categorie: "Search",
  reaction: "🕷�?"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
     
  if (!arg[0]) {
    repondre("quelle chanson veux-tu.");
    return;
  }

  try {
    let topo = arg.join(" ")
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const urlElement = videos[0].url;
          
       
      let infoMess = {
  image: { url: videos[0].thumbnail },
  caption: `𝐉𝐎𝐄𝐋 𝐌𝐃 𝐖𝐀 𝐁𝐎𝐓 𝐕 𝟐.𝟓.Œ
*Song Name:* ${videos[0].title}

*Uploaded:* ${videos[0].ago}

*Author:* ${videos[0].author.name}

*URL:* ${videos[0].url}

Views: ${videos[0].views}`,
        
  whatsapp: "Join my WhatsApp channel: 'https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x'"
};
     

      
       zk.sendMessage(origineMessage,infoMess,{quoted:ms}) ;
      // Obtenir le flux audio de la vidéo
      const audioStream = ytdl(urlElement, { filter: 'audioonly', quality: 'highestaudio' });

      // Nom du fichier local pour sauvegarder le fichier audio
      const filename = 'audio.mp3';

      // Écrire le flux audio dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier audio en utilisant l'URL du fichier local
      

     zk.sendMessage(origineMessage, { audio: { url:"audio.mp3"},mimetype:'audio/mp4' }, { quoted: ms,ptt: false });
        console.log("Envoi du fichier audio terminé !");

     
      });

      fileStream.on('error', (error) => {
        console.error('Erreur lors de l\'écriture du fichier audio :', error);
        repondre('Une erreur est survenue lors de l\'écriture du fichier audio.');
      });
    } else {
      repondre('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});



zokou({
  nomCom: "song",
  categorie: "Search",
  reaction: "🕷�?"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
     
  if (!arg[0]) {
    repondre("wich song do you want.");
    return;
  }

  try {
    let topo = arg.join(" ")
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const urlElement = videos[0].url;
          
       let infoMess = {
          image: {url : videos[0]. thumbnail},
         caption : `\n*song name :* _${videos[0].title}_

*Time :* _${videos[0].timestamp}_

*Url :* _${videos[0].url}_


_*on downloading...*_\n\n`
       }

      

      

      
       zk.sendMessage(origineMessage,infoMess,{quoted:ms}) ;
      // Obtenir le flux audio de la vidéo
      const audioStream = ytdl(urlElement, { filter: 'audioonly', quality: 'highestaudio' });

      // Nom du fichier local pour sauvegarder le fichier audio
      const filename = 'audio.mp3';

      // Écrire le flux audio dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier audio en utilisant l'URL du fichier local
      

     zk.sendMessage(origineMessage, { audio: { url:"audio.mp3"},mimetype:'audio/mp4' }, { quoted: ms,ptt: false });
        console.log("Envoi du fichier audio terminé !");

     
      });

      fileStream.on('error', (error) => {
        console.error('Erreur lors de l\'écriture du fichier audio :', error);
        repondre('Une erreur est survenue lors de l\'écriture du fichier audio.');
      });
    } else {
      repondre('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});

  

zokou({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎬"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("donne le nom de la  video");
    return;
  }

  const topo = arg.join(" ");
  try {
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const Element = videos[0];

      let InfoMess = {
  image: { url: Element.thumbnail },
  caption: ` 𝐉𝐎𝐄𝐋 𝐌𝐃 𝐖𝐀 𝐁𝐎𝐓 𝐕 𝟐.𝟓.𝟎
*Video Name:* ${Element.title}
*Uploaded:* ${Element.ago}
*Author:* ${Element.author.name}
*URL:* ${Element.url}
*Views:* ${videos[0].views}

*𝐣𝐨𝐢𝐧 𝐰𝐚 𝐜𝐡𝐚𝐧𝐧𝐞𝐥 https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x*
1. 𝐤𝐞𝐞𝐩 𝐮𝐬𝐢𝐧𝐠 𝐣𝐨𝐞𝐥 𝐦𝐝
2. 𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐣𝐨𝐞𝐥 𝐭𝐞𝐜𝐡

_*Downloading...*_`
};

      zk.sendMessage(origineMessage, InfoMess, { quoted: ms });

      // Obtenir les informations de la vidéo à partir du lien YouTube
      const videoInfo = await ytdl.getInfo(Element.url);
      // Format vidéo avec la meilleure qualité disponible
      const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
      // Télécharger la vidéo
      const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

      // Nom du fichier local pour sauvegarder la vidéo
      const filename = 'video.mp4';

      // Écrire le flux vidéo dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      videoStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier vidéo en utilisant l'URL du fichier local
        zk.sendMessage(origineMessage, { video: { url :"./video.mp4"} , caption: "𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗷𝗼𝗲𝗹 𝗸𝗮𝗻𝗴'𝗼𝗺𝗮", gifPlayback: false }, { quoted: ms });
      });

      fileStream.on('error', (error) => {
        console.error('Erreur lors de l\'écriture du fichier vidéo :', error);
        repondre('Une erreur est survenue lors de l\'écriture du fichier vidéo.');
      });
    } else {
      repondre('No video found');
    }
  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});
