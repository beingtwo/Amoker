const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'coinflip',
  description: 'Flip a coin.',
  execute(message, args) {
    // Generate a random number (0 or 1) to represent heads or tails
    const result = Math.floor(Math.random() * 2) === 0 ? 'Heads' : 'Tails';

    // Create an embed with the coinflip result
    const embed = new EmbedBuilder()
      .setColor(0x8B0000) // Yellow color
      .setTitle('Coinflip')
      .setDescription(`The coin landed on **${result}**!`)
      .setThumbnail(result === 'Heads' ? 'https://i.imgur.com/jTGm7MF.png' : 'https://cdn.discordapp.com/attachments/1209451309061640223/1223629507408433255/2-modified.png?ex=661a8cc8&is=660817c8&hm=020e70384c967f4acc62b20dee9b0612eb4d048784f08395ea12e3049a93ddc1&') // Coin images for heads and tails
      .setTimestamp();

    // Send the embed
    message.channel.send({ embeds: [embed.toJSON()] });
  },
};
