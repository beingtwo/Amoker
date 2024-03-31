const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'simprate',
  description: 'Rate how simp someone is.',
  execute(message, args) {
    // Check if a user is mentioned
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('Please mention a user to rate their gayness.');
    }

    // Calculate the gayness rate (random number between 0 and 100)
    const gayness = Math.floor(Math.random() * 101);

    // Create an embed with the gayness rate
    const embed = new EmbedBuilder()
      .setColor(0x8B0000) // Pink color
      .setTitle('Simpness Rating')
      .setDescription(`According to our analysis, ${user.username} is ${gayness}% simp! ❤️`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    // Send the embed
    message.channel.send({ embeds: [embed.toJSON()] });
  },
};
