module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`${client.user.tag} is now ready to provide your payment info`);
    console.log(
      `Bot made by Aezdek.\n\nSource code at https://github.com/Aezdek/payment-bot/`
    );
    // Damn bro u made it till here
  },
};
