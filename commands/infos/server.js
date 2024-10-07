const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
// Dotenv
const dotenv = require('dotenv');
dotenv.config({ path: '.env.vault' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides detailed server information.'),
	async execute(interaction) {
		const { guild } = interaction;

		// Get boost
		const boostTier = guild.premiumTier;

		// Choose color by boost level
		let embedColor;
		switch (boostTier) {
		case 0:
			// Helha color
			embedColor = parseInt(process.env.helhaColor, 16);
			break;
		case 1:
			// Or
			embedColor = 0xFFD700;
			break;
		case 2:
			// Silver
			embedColor = 0xC0C0C0;
			break;
		case 3:
			// Bronze
			embedColor = 0xCD7F32;
			break;
		default:
			// Helha color
			embedColor = parseInt(process.env.helhaColor, 16);
		}

		// Embded creation
		const serverInfoEmbed = new EmbedBuilder()
			.setTitle('📊 Server & bot informations')
			.setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024 }))
			.setColor(embedColor)
			.setTimestamp()
			.setFooter({
				text: `Server ID : ${guild.id}`,
				iconURL: guild.iconURL({ dynamic: true }),
			});

		// Add banner is exist
		if (guild.banner) {
			serverInfoEmbed.setImage(guild.bannerURL({ dynamic: true, size: 1024 }));
		}

		// Get version
		const packageJson = require('../../package.json');
		const botVersion = packageJson.version;

		// Add fields
		serverInfoEmbed.addFields(
			{ name: '🔍 **__Server informations__**', value: ' ', inline: false	},
			{ name: '💬 Name', value:  guild.name, inline: true },
			{ name: '👥 Membres', value: `${guild.memberCount.toLocaleString()}`, inline: true },
			{ name: '🏆 Boost level', value: `Tier ${boostTier}`, inline: true },
			{ name: '📅 Creation date', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`, inline: true },
			{ name: '\u200B', value: '\u200B' },
			{ name: '🔍 **__Bot informatons__**', value: ' ', inline: false },
			{ name: '**Version**', value: `${botVersion}`, inline: true },
			{ name: '**Support**', value: '@nicovoltes', inline: true },
			{ name: '**Documentation**', value: '[Documentation](https://github.com/NicolasR64/HELHa-Bot)', inline: true },
			{ name: '🔗 Link', value: `[Visit link](${guild.vanityURLCode ? `https://discord.gg/${guild.vanityURLCode}` : 'https://discord.gg/'})`, inline: true },
			{ name: '**Developer**', value: 'Ravaux Nicolas(@nicovoltes)', inline: true },
		);

		await interaction.reply({ embeds: [serverInfoEmbed] });
	},
};
