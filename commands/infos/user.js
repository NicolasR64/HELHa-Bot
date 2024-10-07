const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
// Dotenv
const dotenv = require('dotenv');
dotenv.config({ path: '.env.vault' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about a user.')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('Select a user to get information about.')),
	async execute(interaction) {
		// Get user data
		const targetUser = interaction.options.getUser('target') || interaction.user;
		const member = interaction.guild.members.cache.get(targetUser.id);

		// Create embed
		const userInfoEmbed = new EmbedBuilder()
			.setColor(parseInt(process.env.helhaColor, 16))
			.setTitle(`🔍 Informations sur l'utilisateur ${targetUser.username}`)
			.setThumbnail(targetUser.displayAvatarURL({ dynamic: true, size: 1024 }))
			.setTimestamp()
			.setFooter({ text: 'Thank you for being part of our community !' });

		// Add fields
		userInfoEmbed.addFields(
			{ name: '👤 User name', value: targetUser.tag, inline: true },
			{ name: '🆔 Identifiant', value: targetUser.id, inline: true },
			{ name: '📅 Joins the', value: `${member.joinedAt.toDateString()}`, inline: true },
			{ name: '🎉 Acc. created on', value: `${targetUser.createdAt.toDateString()}`, inline: true },
			{ name: '💬 Status', value: `${member.presence?.status || 'X'}`, inline: true },
			{ name: '🔖 Roles', value: member.roles.cache.map(role => role.name).join(', ') || 'No role', inline: true },
			{ name: '🖼️ Avatar', value: `[View here](${targetUser.displayAvatarURL()})`, inline: true },
			{ name: '🔗 Mention', value: `<@${targetUser.id}>`, inline: true },
		);

		await interaction.reply({ embeds: [userInfoEmbed] });
	},
};
