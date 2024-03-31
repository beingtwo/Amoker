// joinmessage.js
module.exports = (client) => {
  client.on('guildMemberAdd', (member) => {
    const channelId = '1220957622736519201'; // Replace with your actual channel ID
    const channel = member.guild.channels.cache.get(channelId);

    if (!channel) {
      console.error('Could not find channel');
      return;
    }

    const embed = {
      title: `**Welcome to Amoker Clothing and GFX!**`,
      description: `👋 Welcome to our server, ${member.user.toString()}! Welcome aboard! Enjoy your time with us and consider supporting our community by purchasing our exclusive Roblox clothing.`,
      color: 0x8B0000,
      timestamp: new Date(),
      footer: {
        text: 'Enjoy your stay!',
      },
      thumbnail: {
        url: member.user.displayAvatarURL({ dynamic: true, size: 256 }),
      },
    };

    channel.send({ embeds: [embed] });
  });
};
