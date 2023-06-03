const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("paypal")
    .setDescription("Returns paypal payment information."),
  async execute(client, interaction) {
    if (!process.env.paypal || process.env.paypal == "PAYPALEMAIL") {
      console.error(`Paypal information not set!\n\nBot exiting`);
      process.exit(111);
    }
    let embed = new EmbedBuilder()
      .setDescription(
        `Hello, the paypal payment must be sent to ${process.env.paypal}`
      )
      .setFooter({ text: `Aezdek's Payment bot` })
      .setColor(`F933FF`);
    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
