const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'gayrate',
  description: 'Rate how gay someone is.',
  execute(message, args) {
    // Check if a user is mentioned
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply('Please mention a user to rate their gayness.');
    }

    // Calculate the gayness rate
    let gayness = Math.floor(Math.random() * 101);

    // If the mentioned user is one of the specified users, set the gayness accordingly
    if (user.id === '950062266659778590') {
      gayness = -999;
    } else if (user.id === '1119592830327861358') {
      gayness = -999999999999999999999; // Arbitrary large negative value
    } else if (user.id === '985655980668903454') {
      gayness = 1000000000000; // Arbitrary large positive value
    }

    // Create an embed with the gayness rate
    const embed = new EmbedBuilder()
      .setColor(0x8B0000) // Pink color
      .setTitle('Gayness Rating')
      .setDescription(`According to our analysis, ${user.username} is ${gayness >= 1000000000000 ? '1000000000000' : gayness === -999 ? '-999999999999999999999' : gayness + '%'} gay! 🏳️‍🌈`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    // Send the embed
    message.channel.send({ embeds: [embed.toJSON()] });
  },
};
