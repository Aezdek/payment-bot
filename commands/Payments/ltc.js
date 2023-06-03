const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ltc")
    .setDescription("Returns litecoin payment information."),
  async execute(client, interaction) {
    if (!process.env.ltc || process.env.ltc == "LTC_ADDRESS") {
      console.error(`LTC information not set!\n\nBot exiting`);
      process.exit(111);
    }
    let embed = new EmbedBuilder()
      .setDescription(
        `Hello, the litecoin payment must be sent to ${process.env.ltc}`
      )
      .setFooter({ text: `Aezdek's Payment bot` })
      .setColor(`F933FF`);
    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
