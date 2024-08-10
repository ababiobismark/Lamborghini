"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/betingrich/Lamborghini';
  const img = 'https://telegra.ph/file/ab57d624f8447c1a414c1.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `┏❏ ⌜𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊 ⌟ ❐
┃ *REPOSITORY:* ${data.html_url}
┃ *STARS:* ${repoInfo.stars}
┃ *FORKS:* ${repoInfo.forks}
┃ *RELEASE DATE:* ${releaseDate}
┃ *UPDATE ON:* ${repoInfo.lastUpdate}
┃ *OWNER* :𝑴𝒂𝒓𝒊𝒔𝒆𝒍
┗❏`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
