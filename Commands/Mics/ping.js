const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Displays the bot\'s current ping.',
  async execute(message) {

    const sent = await message.reply('Pinging...');
    const timestamp = (sent.editedTimestamp || sent.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp);
    const APIPing = message.client.ws.ping;

    const pingEmbed = new EmbedBuilder()
      .setColor(0x8B0000) // Blue color
      .setTitle('🏓 Pong!')
      .addFields(
        { name: 'Round-Trip Latency', value: `${timestamp}ms`, inline: true },
        { name: 'WebSocket Heartbeat', value: `${APIPing}ms`, inline: true }
      )
      .setTimestamp();

    // Edit the original message with the ping information
    await sent.edit({ content: ' ', embeds: [pingEmbed] });
  },
};
