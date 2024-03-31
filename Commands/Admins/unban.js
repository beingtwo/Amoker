const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'unban',
  description: 'Unban a user with their ID.',
  async execute(message, args) {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      const noPermEmbed = new EmbedBuilder()
        .setTitle(`❌ You do not have permission to unban users.`)
        .setColor(0x8B0000) 
        .setTimestamp();
      return message.channel.send({ embeds: [noPermEmbed] });
    }

    const userId = args[0];
    if (!userId) {
      return message.reply('❌ Please provide the ID of the user you want to unban.');
    }

    const bannedUsers = await message.guild.bans.fetch();
    const userBan = bannedUsers.get(userId);

    if (!userBan) {
      return message.reply('❌ This user is not banned.');
    }

    try {
      await message.guild.bans.remove(userId);

      const successEmbed = new EmbedBuilder()
        .setTitle(`✔️ Successfully unbanned user with ID: ${userId}`)
        .setColor(0x8B0000) // Dark red color
        .setTimestamp();
      message.channel.send({ embeds: [successEmbed] });
    } catch (error) {
      console.error(error);

      const errorEmbed = new EmbedBuilder()
        .setTitle(`❌ Failed to unban user with ID: ${userId}`)
        .setDescription(`Error: ${error.message}`)
        .setColor(0x8B0000) // Dark red color
        .setTimestamp();
      message.channel.send({ embeds: [errorEmbed] });
    }
  },
};
