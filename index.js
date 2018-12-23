const discord = require("discord.js");
var client = new discord.Client();

client.on("ready", () =>{
    console.log("ready to go.");
    client.user.setActivity ("sexy");
});

client.on("message", (message) => {
    if (message.author.bot) return;
  
    msg = message.content.toLowerCase();
  
    
  
    if(msg.startsWith ("zephyr")) {
      message.channel.send ("that would be me.");
    }

    if(msg.startsWith ("tiddies")) {
        message.channel.send ("tiddies.");
    }
    
    if(msg.startsWith ("sexy")) {
        message.channel.send ("yes?");
    }
   
    if(msg.startsWith ("sexy")) {
        message.channel.send ("yes?");
    }

    //random 

    const zeph = [
        "hello zephyr",
        "hey zephyr",
        "hi zephyr",
        "hey zeph",
        "hello zeph",
        "hi zeph",
        "zephyr hello",
        "zephyr hi",
        "zeph hi",
        "zeph hello",
        "what's up zephyr",
        "what's up zeph"
        ];
      
      const greetings = [
        "greetings.",
        "hello there.",
        "hi.",
        "hello. how are you?",
        "hello : )"
        ];
      
      if(zeph.some(word => msg.includes(word))) {
        var response = greetings [Math.floor(Math.random() * greetings.length)];
        
        message.channel.send(response).then().catch(console.error);
      } else;



      const how = [
        "how are you zeph",
        "how are u zeph",
        "how are you zephyr",
        "how are u zephyr",
        "how's everything zeph",
        "how's everything zephyr",
        "how are you doing zeph",
        "how are u doing zeph",
        "how are you doing zephyr",
        "how are u doing zephyr"
        ];
      
      const good = [
        "i'm alright.",
        "i'm doing just fine.",
        "i'm alright, thank you.",
        "i'm good, thank you.",
        "i'm alright. what about you?",
        "i'm good, how are you?"
        ];
      
      if(how.some(word => msg.includes(word))) {
        var response = good [Math.floor(Math.random() * good.length)];
        
        message.channel.send(response).then().catch(console.error);
      } else;

});

client.login(process.env.TOKEN); 