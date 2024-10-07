const { Events } = require('discord.js');
const logger = require('../utils/logger');

// Execute when an interaction is made with the bot
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			logger.error(`No command matching ${interaction.commandName} was found.`);
			await interaction.reply(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			logger.info(`User ${interaction.user.username} executed the command "${interaction.commandName}".`);
			await command.execute(interaction);
		}
		catch (error) {
			logger.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			}
			else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};