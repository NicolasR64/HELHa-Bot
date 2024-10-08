const { SlashCommandBuilder } = require('discord.js');
const Categories = require('../../utils/categories');
const Statuses = require('../../utils/statuses');


// Used to check if the bot is manually up and running correctly.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),

	category: Categories.UTILITAIRE,
	status: Statuses.COMPLETED,

	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};