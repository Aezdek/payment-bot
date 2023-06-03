const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("btc")
    .setDescription("Returns bitcoin payment information."),
  async execute(client, interaction) {
    if (!process.env.btc || process.env.btc == "BTC_ADDRESS") {
      console.error(`btc information not set!\n\nBot exiting`);
      process.exit(111);
    }
    let embed = new EmbedBuilder()
      .setDescription(
        `Hello, the bitcoin payment must be sent to ${process.env.btc}`
      )
      .setFooter({ text: `Aezdek's Payment bot` })
      .setColor(`F933FF`);
    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
