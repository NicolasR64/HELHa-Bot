const { SlashCommandBuilder } = require('discord.js');


// Used to check if the bot is manually up and running correctly.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};