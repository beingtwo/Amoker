const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'uptime',
  description: 'Displays how long the bot has been online.',
  async execute(message) {

    let totalSeconds = (message.client.uptime / 1000);
    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const uptimeEmbed = new EmbedBuilder()
      .setColor(0x8B0000) // Blue color
      .setTitle('🕒 Bot Uptime')
      .setDescription(`The bot has been online for **${days}** days, **${hours}** hours, **${minutes}** minutes, and **${seconds}** seconds.`)
      .setTimestamp();

    await message.reply({ embeds: [uptimeEmbed] });
  },
};
