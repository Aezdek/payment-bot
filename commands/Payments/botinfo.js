const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Returns bot information."),
  async execute(client, interaction) {
    let embed = new EmbedBuilder()
      .setDescription(
        `Hello, <@${process.env.client_id}> was made using [Aezdek's Payment Bot](https://github.com/Aezdek/payment-bot/), Thank you for using my bot.`
      )
      .setFooter({ text: `Aezdek's Payment bot` })
      .setColor(`F933FF`);
    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
