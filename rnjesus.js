const Botkit = require('botkit');
const Rando = require('./rando.js')
const Emblem = require('./emblems.js')



const controller = Botkit.slackbot();

var bot = controller.spawn({

  token: "xoxb-95631118145-wFiDRns6BhjtwXSz8HzfR1pV"

});

bot.startRTM(function (err, bot, payload) {

  if (err) {
    throw Error('Could not connect to Slack');

  }
});

controller.hears(["Random",], ["direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {

  const inputMessage = message.match[0];
  bot.reply(message, Rando());

});

controller.hears(["Emblem (.*)",], ["direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
  const inputUser = message.match[1];
  Emblem(inputUser)
  .then((html) => {
    bot.reply(message, html);
  }).catch((error) => console.log(error));
});

controller.hears(["its dat boi",], ["direct_message", "direct_mention", "ambient"], function (bot, message) {
  
  bot.reply(message, "https://66.media.tumblr.com/f449d8738724cd74dafc1a63671e1984/tumblr_o6j2dt3WUx1s3o4dso1_400.gif");
  bot.reply(message, "Shit waddup!");

});

controller.hears(["its ya boi",], ["direct_message", "direct_mention", "ambient"], function (bot, message) {

  bot.reply(message, "https://i.ytimg.com/vi/NHrmFURRxSs/hqdefault.jpg")
  bot.reply(message, "Uh... Skinny penis.");

});

controller.hears(["Pray for Harambe",], ["direct_message", "direct_mention", "ambient"], function (bot, message) {

  bot.reply(message, "http://i2.mirror.co.uk/incoming/article8075004.ece/ALTERNATES/s615b/Harambe.jpg");
  bot.reply(message, "Dicks out.")

}); 

controller.hears(["Who is Margaret Coffey?",], ["direct_message", "direct_mention", "ambient"], function (bot, message) {

  bot.reply(message, "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/p160x160/14522998_1081209358600713_5939122154187772353_n.jpg?oh=4f786567b06d93742ed6feeb41e31b69&oe=58ACFFB5")
  bot.reply(message, "Margaret Coffey is a skanky ass hoe, that goes to Gallaudet College in Washington DC. Her favorite food is bananas, and her favorite activity is eating bananas.");

});

controller.hears(["What does skank mean?",], ["direct_message", "direct_mention", "ambient"], function(bot, message) {

  bot.reply(message, "http://www.urbandictionary.com/define.php?term=Skank");
  bot.reply(message, "Skank is a term, normally used for women, that means trashy/tacky.")

});

controller.hears(["Whats your favorite pet?",], ["direct_message", "direct_mention", "ambient"], function (bot, message) {

  bot.reply(message, "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg");
  bot.reply(message, "So dank, much wow.");

})