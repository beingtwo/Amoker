const { EmbedBuilder } = require('discord.js');

// Array of joke sentences
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It's a shame they'll never meet!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "What did one ocean say to the other ocean? Nothing, they just waved!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call fake spaghetti? An impasta!",
  "I told my wife she should embrace her mistakes. She gave me a hug!",
  "Why don't eggs tell jokes? Because they might crack up!",
  "I'm on a whiskey diet. I've lost three days already!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "Why don't some couples go to the gym? Because some relationships don't work out!",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I'm reading a book on the history of glue. I just can't seem to put it down!",
  "I told my computer I needed a break and now it won't stop sending me vacation ads.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the bicycle fall over? It was two-tired!",
  "I would tell you a joke about pizza, but it's too cheesy!",
  "Why did the coffee file a police report? It got mugged!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call fake spaghetti? An impasta!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I told my wife she should embrace her mistakes. She gave me a hug!",
  "Why don't eggs tell jokes? Because they might crack up!",
  "I'm on a whiskey diet. I've lost three days already!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I'm reading a book on the history of glue. I just can't seem to put it down!",
  "I told my computer I needed a break and now it won't stop sending me vacation ads.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the bicycle fall over? It was two-tired!",
  "I would tell you a joke about pizza, but it's too cheesy!",
  "Why did the coffee file a police report? It got mugged!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call fake spaghetti? An impasta!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I told my wife she should embrace her mistakes. She gave me a hug!",
  "Why don't eggs tell jokes? Because they might crack up!",
  "I'm on a whiskey diet. I've lost three days already!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I'm reading a book on the history of glue. I just can't seem to put it down!",
  "I told my computer I needed a break and now it won't stop sending me vacation ads.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the bicycle fall over? It was two-tired!",
  "I would tell you a joke about pizza, but it's too cheesy!",
  "Why did the coffee file a police report? It got mugged!",
];



module.exports = {
  name: 'joke',
  description: 'Get a random joke.',
  execute(message, args) {
    // Select a random joke from the array
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Create an embed with the joke
    const embed = new EmbedBuilder()
      .setColor(0x8B0000) // Yellow color
      .setTitle('Random Joke')
      .setDescription(randomJoke)
      .setTimestamp();

    // Send the embed
    message.channel.send({ embeds: [embed.toJSON()] });
  },
};
