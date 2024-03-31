const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'info',
  description: 'Get information about a user.',
  async execute(message, args) {
    // Check if a user ID is provided
    const userId = args[0];
    if (!userId) {
      return message.reply('❌ Please provide a valid user ID.');
    }

    // Check if the provided user ID is a valid snowflake
    if (!isValidSnowflake(userId)) {
      return message.reply('❌ Invalid user ID provided.');
    }

    try {
      // Fetch the user from Discord API
      const user = await message.client.users.fetch(userId);

      // Create an embed using EmbedBuilder
      const embed = new EmbedBuilder()
        .setColor(0x8B0000) // Green color
        .setTitle('📋 User Information')
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setDescription(`
          **Username:** ${user.username}\n
          **Discriminator:** ${user.discriminator}\n
          **User ID:** ${user.id}\n
          **Joined Discord:** ${user.createdAt.toDateString()}
          **Joined Server:** ${message.guild.members.cache.get(user.id)?.joinedAt?.toDateString() || 'Not a member of this server'}
          **Account Age:** ${getAccountAge(user.createdAt)}\n
          **Status:** ${user.presence ? user.presence.status : 'Unknown'}\n
          **Roles:** ${message.guild.members.cache.get(user.id)?.roles.cache.map(role => role.name).join(', ') || 'No roles'}
        `)
      
        .setTimestamp();

      // Send the embed
      message.channel.send({ embeds: [embed.toJSON()] });
    } catch (error) {
      console.error(error);
      message.reply('❌ Error fetching user information.');
    }
  },
};

// Function to calculate account age
function getAccountAge(createdAt) {
  const ageInMillis = Date.now() - createdAt.getTime();
  const ageInDays = Math.floor(ageInMillis / (1000 * 60 * 60 * 24));
  return `${ageInDays} days`;
}

// Function to check if a string is a valid snowflake
function isValidSnowflake(id) {
  const snowflakeRegex = /^[0-9]{17,19}$/;
  return snowflakeRegex.test(id);
}
