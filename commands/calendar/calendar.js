const { SlashCommandBuilder } = require('discord.js');

// Command use to explain how to contribute to the bot.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('calendar')
		.setDescription('Provides calendar for your year and group on any day.')
		.addStringOption(option =>
			option.setName('year')
				.setDescription('Select a year')
				.setRequired(true)
				.addChoices(
					{ name: '1BID', value: '1' },
					{ name: '2BID', value: '2' },
					{ name: '3BID', value: '3' },
				))
		.addStringOption(option =>
			option.setName('group')
				.setDescription('Select a group')
				.setRequired(true)
				.addChoices(
					{ name: '1A', value: '1A' },
					{ name: '2A', value: '1B' },
					{ name: '2A', value: '2A' },
					{ name: '2B', value: '2B' },
				))
		.addStringOption(option =>
			option.setName('date')
				.setDescription('Specify a date (YYYY-MM-DD).')
				.setRequired(false)),

	async execute(interaction) {
		// Get options value
		const year = interaction.options.getString('year');
		const group = interaction.options.getString('group');
		console.log(interaction.options.getString('date'));
		const dateString = interaction.options.getString('date') == null ? new Date() : new Date(interaction.options.getString('date'));

		console.log(year);
		console.log(group);
		console.log(dateString);

		await interaction.reply(`Année: ${year}\nGroupe: ${group}\nDate: test`);
	},
};