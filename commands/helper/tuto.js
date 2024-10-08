const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Categories = require('../../utils/categories');
const Statuses = require('../../utils/statuses');

// Command use to explain how to contribute to the bot.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('tuto')
		.setDescription('Provides tutorials on different subject.')
		.addStringOption(option =>
			option.setName('topic')
				.setDescription('Select a tutorial topic')
				.setRequired(true)
				.addChoices(
					{ name: 'How to improve the bot', value: 'improve_bot' },
					{ name: 'How to make a pull request', value: 'pull_request' },
				)),

	category: Categories.INFORMATION,
	status: Statuses.IN_PROGRESS,

	async execute(interaction) {
		const selectedTopic = interaction.options.getString('topic');
		let tutorialEmbed;

		// Embed creation
		if (selectedTopic === 'improve_bot') {
			tutorialEmbed = new EmbedBuilder()
				.setTitle('📘 How to Improve the Bot')
				.setDescription('Here are the steps to improve the bot...')
				.setColor(process.env.helhaColor)
				.addFields(
					{ name: 'Step 1', value: 'Fork the repository (TO DO : Link to the repo)' },
					{ name: 'Step 2', value: 'TO DO' },
				)
				.setFooter({ text: 'Improve the bot tutorial', iconURL: interaction.client.user.displayAvatarURL() });

		}
		else if (selectedTopic === 'pull_request') {
			tutorialEmbed = new EmbedBuilder()
				.setTitle('🔧 How to Make a Pull Request')
				.setDescription('Here are the steps to make a pull request...')
				.setColor(process.env.helhaColor)
				.addFields(
					{ name: 'Step 1', value: 'TO DO' },
				)
				.setFooter({ text: 'Pull request tutorial', iconURL: interaction.client.user.displayAvatarURL() });
		}
		await interaction.reply({ embeds: [tutorialEmbed] });
	},
};
