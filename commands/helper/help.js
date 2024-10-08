const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const logger = require('../../utils/logger');
const Categories = require('../../utils/categories');
const Statuses = require('../../utils/statuses');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides a list of the bot\'s commands.'),

	category: Categories.INFORMATION,
	status: Statuses.COMPLETED,

	async execute(interaction) {

		const helpEmbed = new EmbedBuilder()
			.setTitle('Help')
			.setColor(process.env.helhaColor)
			.setTimestamp()
			.setDescription('Bot\'s commands list');

		// Get commandes
		const commands = interaction.client.commands;

		if (!commands || commands.size === 0) {
			logger.error('No commands found...');
			helpEmbed.addFields({ name: 'Something went wrong', value: 'Please try again.' });
		}
		else {
			// Get categories
			const CategoriesList = Object.values(Categories);

			// Create section for embed
			CategoriesList.forEach(category => {
				// Get commands of this category
				const cmdsInCategory = commands.filter(cmd => cmd.category === category);

				if (cmdsInCategory.size > 0) {
					const commandList = cmdsInCategory.map(cmd => {
						const statusEmoji = getStatusEmoji(cmd.status);
						return `\`${statusEmoji} /${cmd.data.name}\` - ${cmd.data.description}`;
					}).join('\n');

					helpEmbed.addFields({
						name: category,
						value: commandList,
						inline: false,
					});
				}
			});

			// Handle commands without a category (this should not normally happen!)
			const cmdsWithoutCategory = commands.filter(cmd => !CategoriesList.includes(cmd.category));
			if (cmdsWithoutCategory.size > 0) {
				const commandList = cmdsWithoutCategory.map(cmd => {
					const statusEmoji = getStatusEmoji(cmd.status);
					return `\`${statusEmoji} /${cmd.data.name}\` - ${cmd.data.description}`;
				}).join('\n');
				helpEmbed.addFields({
					name: 'Autres',
					value: commandList,
					inline: false,
				});
			}
		}

		await interaction.reply({ embeds: [helpEmbed] });
	},
};

// Get icon by status
function getStatusEmoji(status) {
	switch (status) {
	case Statuses.COMPLETED:
		return '✅';
	case Statuses.IN_PROGRESS:
		return '🛠️';
	case Statuses.DEPRECATED:
		return '⚠️';
	default:
		return '❔';
	}
}
