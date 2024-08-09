const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"🦦"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝒓𝒆𝒔𝒆𝒓𝒗𝒆𝒅 𝒇𝒐𝒓 𝑴𝒂𝒓𝒊𝒔𝒆𝒍");
  }

  const {exec}=require("child_process")

    repondre("𝑳𝒂𝒎𝒃𝒐𝒓𝒈𝒉𝒊𝒏𝒊 𝒊𝒔 𝑹𝒆𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 ⏳");

  exec("pm2 restart all");
  

  



})
