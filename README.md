# HatchMate - The All-in-One Discord Bot

**Created by IdeaHatch**

HatchMate is a powerful, feature-rich, all-in-one Discord bot designed to handle everything your server needs. From a professional moderation suite and server statistics to a full-fledged casino-style economy, advanced quiz systems, and AI-powered chat, HatchMate brings all the tools you need into a single, reliable package.

## ✨ Core Features

*   **👑 Full Moderation Suite:** Keep your server safe and clean with powerful tools, including an automod for banned words, kick/ban/purge commands, and configurable welcome messages.

*   **💬 Community & Casino Economy:** Make your server fun and interactive.
    *   **Leveling System:** Members gain XP and level up by being active.
    *   **Economy System:** Earn daily currency and check balances.
    *   **Casino Games:** Gamble your earnings with `/coinflip` and `/slots`!
    *   **Leaderboard:** Compete to see who is the richest in the server.

*   **🧠 Advanced Quiz Engine:** Host engaging quiz events.
    *   **Standard Quizzes:** Create and run simple, single-question quizzes with optional prizes.
    *   **Multi-Stage Rapid Fire Events:** A unique, professional-grade event system! Admins use a command to generate a private channel for question submission. After questions are added, a separate command opens a pop-up form to input all the answers. Finally, a start command runs a fully automated, timed quiz in a public channel, culminating in a frantic, "submit-all" answer phase.

*   **🎉 Interactive Events:**
    *   **Reaction Roles:** A seamless way for users to self-assign roles using emoji reactions.
    *   **Giveaways:** Easily start reaction-based giveaways with custom durations, winner counts, and optional role requirements.

*   **🤖 AI-Powered Chat:**
    *   Integrates with **Google Gemini** to allow users with a specific role to ask questions directly to a powerful AI model using the `/ask` command.

*   **📈 Productivity & Utility:** Essential tools for server management like `/serverinfo` and `/userinfo`.

*   **⚙️ Modern & Reliable:**
    *   Built exclusively with modern Discord **Slash (/) Commands** for a clean user experience.
    *   Powered by a **Supabase (PostgreSQL)** backend for fast, persistent, and relational data storage.

---

## 🚀 Getting Started

Follow these steps to get your own instance of HatchMate running.

### Prerequisites

1.  **Python 3.8+**: [Download Python](https://www.python.org/downloads/)
2.  **Discord Bot Token**: Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications).
3.  **Supabase Project**: Create a free project on the [Supabase Dashboard](https://supabase.com/dashboard).
4.  **Google Gemini API Key**: Get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone or Download this Project:**
    Get all the files and place them in a folder.

2.  **Run the SQL Scripts:**
    In your Supabase project dashboard, go to the **SQL Editor**. Find the `.sql` files in the project folder and run their contents one by one. This will create the necessary database tables.

3.  **Install Dependencies:**
    Open a terminal in the project folder and run:
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment Variables:**
    Create a file named `.env` in the main project folder. Open it and add your credentials. You can find your Supabase URL and Key in your Supabase project's API settings.
    ```
    # .env file
    DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN_HERE"
    
    GEMINI_API_KEY="YOUR_GOOGLE_GEMINI_API_KEY_HERE"
    
    SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL_HERE"
    SUPABASE_KEY="YOUR_SUPABASE_SERVICE_ROLE_KEY_HERE"
    ```

5.  **Run the Bot:**
    Start the bot with the following command:
    ```bash
    python main.py
    ```

6.  **Invite the Bot:**
    In your Discord Developer Portal, go to the "OAuth2" > "URL Generator" tab. Select the `bot` and `applications.commands` scopes. Then, under "Bot Permissions," grant it **Administrator** permissions (this is the easiest way to ensure all features work). Use the generated URL to invite it to your server.

---

## 🤖 Command List

HatchMate uses Slash (`/`) Commands for all features.

### Moderation
-   `/purge <limit>` - Deletes a specified number of messages.
-   `/kick <member> [reason]` - Kicks a member.
-   `/ban <member> [reason]` - Bans a member.
-   `/automod addword <word>` - Adds a word to the blocklist.
-   `/automod removeword <word>` - Removes a word from the blocklist.
-   `/automod listwords` - Lists all blocked words.

### Community & Economy
-   `/level [@member]` - Checks a user's level.
-   `/balance [@member]` - Checks a user's coin balance.
-   `/daily` - Claims your daily coin reward.
-   `/leaderboard` - Shows the server's richest users.
-   `/coinflip <bet> <choice>` - Bet on a 50/50 coin flip.
-   `/slots <bet>` - Play the emoji slot machine!

### Event & Server Setup
-   `/set_welcome <channel>` - Sets the channel for welcome messages.
-   `/roles add <message_id> <emoji> <role>` - Creates a new reaction role.
-   `/setup rapidfire_event <name> <admin_role> <participant_role>` - Creates a new Rapid Fire event.
-   `/setup rapidfire_answers <name>` - Opens a form to enter the answers for a Rapid Fire event.
-   `/set_gemini_role <role>` - Sets the role required to use the `/ask` command.

### Event Gameplay
-   `/quiz create <name> ...` - Creates a standard, single-question quiz.
-   `/quiz start <name>` - Starts a standard quiz.
-   `/giveaway start <prize> <duration> ...` - Starts a reaction-based giveaway.
-   `/play rapidfire <name>` - Starts a pre-configured Rapid Fire event.
-   `/play rapidfire_open` - Opens the chat for the Rapid Fire answering phase.

### Utility & AI
-   `/serverinfo` - Displays stats about the server.
-   `/userinfo [@member]` - Displays info about a user.
--   `/ask <prompt>` - Ask a question to the Gemini AI model.
