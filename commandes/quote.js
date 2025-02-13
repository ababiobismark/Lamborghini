const { zokou } = require('../framework/zokou');

zokou({ nomCom: 'quote', categorie: 'Fun' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('Commande réservée au groupe uniquement');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╔══════════════════════════╗
║   𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊              ║
╚══════════════════════════╝

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚; 𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╔══════════════════════════╗
║   𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊              ║
╚══════════════════════════╝

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚; 𝑳𝒂𝒎𝒃𝒊𝒓𝒈𝒉𝒊𝒏𝒊`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});