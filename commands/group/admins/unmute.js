module.exports.command = () => {
  let cmd = ["unmute"];

  return { cmd, handler };
};

const handler = async (bot, msg, from, msgInfoObj) => {
  await bot.groupSettingUpdate(from, "not_announcement");
};
