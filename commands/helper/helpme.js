const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Categories = require('../../utils/categories');
const Statuses = require('../../utils/statuses');

// Command use to explain how to contribute to the bot.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('helpme')
		.setDescription('Provides a list of people who can help you with your technology issues.')
		.addStringOption(option =>
			option.setName('technology')
				.setDescription('Select a techology')
				.setRequired(true)
				.addChoices(
					{ name: 'HTML', value: 'html' },
					{ name: 'JS', value: 'js' },
					{ name: 'CSS', value: 'css' },
				)),
	category: Categories.INFORMATION,
	status: Statuses.COMPLETED,

	async execute(interaction) {
		try {
			// Defer the reply to allow more time to process the command
			await interaction.deferReply();

			// Get options value
			const technology = interaction.options.getString('technology');

			// Set mandatory roles
			const roleNames = [process.env.helperRole, technology];

			// Get server members
			const guild = interaction.guild;
			const members = await guild.members.fetch();

			// Find members ready to help for this technology
			const filteredMembers = members.filter(member => {
				return roleNames.every(roleName =>
					member.roles.cache.some(role => {
						return role.name.toLowerCase() === roleName.toLowerCase();
					}),
				);
			});

			// Create an embed to reply
			const helpMeEmbed = new EmbedBuilder()
				.setTitle(`Help ${technology.toUpperCase()}`)
				.setColor(process.env.helhaColor)
				.setTimestamp();

			// Add user to the list
			if (filteredMembers.size > 0) {
				const userList = filteredMembers.map(member => `- ${member.user.username}`).join('\n');
				helpMeEmbed.setDescription(`List of users that can help you :\n ${userList}`);
			}
			else {
				helpMeEmbed.setDescription('No user found for this technology.');
			}

			await interaction.editReply({ embeds: [helpMeEmbed] });

		}
		catch (error) {
			if (!interaction.deferred && !interaction.replied) {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
			else {
				await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};