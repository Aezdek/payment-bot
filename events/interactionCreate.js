const { Interaction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;
    const cmd = client.commands.get(interaction.commandName);
    if (!cmd) {
      return interaction.reply({
        content: "This command is outdated. Try again later or re-invite me!",
        ephemeral: true,
      });
    }
    try {
      cmd.execute();
    } catch (error) {
      interaction.reply({
        content:
          "There was an error executing this command! Error has been reported to developers securely.",
        ephemeral: true,
      });
      return console.log(`An Error Occured: ${error}.`);
    }
  },
};
