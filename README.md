![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Language](https://img.shields.io/badge/language-JavaScript-ffcc00)
![Node.js](https://img.shields.io/badge/node.js-8CC84B?style=flat&logo=node.js&logoColor=white)
![Open Source](https://img.shields.io/badge/open%20source-♥️-red)

EN
# HELHa Bot:

The "HELHa Bot" project aims to create a community-driven Discord bot dedicated to students of Haute École Louvain en Hainaut (HELHa). This bot provides an interactive platform where any HELHa student has the opportunity to add features and enhance the bot's capabilities.

**Key Objectives:**

Engaged Community: Provide a dynamic and engaging Discord space for HELHa students.
Customization: Allow users to add features specific to their needs.
Open Collaboration: Encourage collaboration by enabling each student to contribute.

Join us in creating an interactive and customizable Discord space for the HELHa student community with HELHa Bot!

---
VF
# HELHa Bot :

Le projet "HELHa Bot" vise à créer un bot Discord communautaire dédié aux étudiants de la Haute École Louvain en Hainaut (HELHa). Ce bot offre une plateforme interactive où n'importe quel étudiant de la HELHa a la possibilité d'ajouter des fonctionnalités et d'améliorer les capacités du bot.

**Objectifs Principaux:**
- **Communauté Engagée:** Fournir un espace Discord dynamique et engageant pour les étudiants de la HELHa.
- **Personnalisation:** Permettre aux utilisateurs d'ajouter des fonctionnalités spécifiques à leurs besoins.
- **Collaboration Ouverte:** Encourager la collaboration en permettant à chaque étudiant d'apporter sa contribution.

Rejoignez-nous dans la création d'un espace Discord interactif et personnalisable pour la communauté étudiante de la HELHa grâce à HELHa Bot!

---
# For HELHa IT Students
## How to Contribute
### Step 1: Fork This Repository
1. Click the **Fork** button at the top right of this page to create your own copy of the repository.

### Step 2: Prepare Your Code for Testing
1. **Install Dependencies**: Run the following command in your terminal:
   ```bash
   npm install
   ```
2. **Create the Environment File**: Create a file named `.env.vault` to store local global variables and sensitive data.
3. **Set Up Your Discord Application**:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
   - Add the following variables to your `.env.vault` file:
     ```plaintext
     applicationId=X       # Found in the "General Information" section of your bot
     publicKey=X           # Found in the "General Information" section of your bot
     clientId=X            # Found in the "OAuth2" section of your bot
     clientSecret=X        # Found in the "OAuth2" section of your bot (only visible when created, so be careful)
     token=X               # Found in the "Bot" section of your bot
     guildId=X             # Guild ID of the server where you want to test.
     helhaColor="009A93"   # Custom color for your bot
     helperRole=helper     # Role to designate helpers
     ```
4. **Add Your Bot to Your Server**: Follow this guide on how to [add your bot to servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html).

### Step 3: Test Your Bot

- Launch your bot:
  ```bash
  node index.js
  ```
- Refresh the slash commands in your server (when creating a new one or changing properties):
  ```bash
  node deploy-commands.js
  ```

### Step 4: Make a Pull Request

After testing your changes, submit a pull request to contribute your improvements!

---
