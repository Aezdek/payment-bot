const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cashapp")
    .setDescription("Returns cashapp payment information."),
  async execute(client, interaction) {
    if (!process.env.cash_app || process.env.cash_app == "$AezdekXX") {
      console.error(`Cashapp information not set!\n\nBot exiting`);
      process.exit(111);
    }
    let embed = new EmbedBuilder()
      .setDescription(
        `Hello, the cashapp payment must be sent to ${process.env.cash_app}`
      )
      .setFooter({ text: `Aezdek's Payment bot` })
      .setColor(`F933FF`);
    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
