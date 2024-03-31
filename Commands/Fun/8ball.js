const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: '8ball',
  description: 'Ask the magic 8-ball a question!',
  execute(message, args) {
    // Array of possible 8-ball responses
    const responses = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes - definitely.',
      'You may rely on it.',
      'As I see it, yes.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      'Don\'t count on it.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.'
    ];

    // Check if a question is provided
    const question = args.join(' ');
    if (!question) {
      return message.reply('Please ask a question.');
    }

    // Get a random response from the array
    const response = responses[Math.floor(Math.random() * responses.length)];

    // Create an embed with the question and the response
    const embed = new EmbedBuilder()
      .setTitle('🎱  Magic 8-Ball  🎱')
      .setDescription(`**Question:** ${question}\n**Answer:** ${response}`)
      .setColor(0x8B0000)
      .setTimestamp();

    // Send the embed
    message.channel.send({ embeds: [embed.toJSON()] });
  },
};
