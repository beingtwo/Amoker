const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'commands',
  description: 'Responds with an embed when someone requests available commands.',
  execute(message) {
    // Create an embed
    const embed = new EmbedBuilder()
      .setColor(0x8B0000) // Green color
      .setTitle('🤖 Available Commands')
      .setDescription("***Here are the available commands:***\n\n**🛡️ Admin**\n```ban, unban, kick, mute, unmute, warn, unwarn, warnlist, clearwarns```\n**🌐 General**\n```commands, info, ping, help, uptime```\n**🎉 Fun**\n```8ball, meme, joke, gayrate, simprate, coinflip, rolldice```")

    // Reply with the embed
    message.reply({ embeds: [embed] });
  },
};
