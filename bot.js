const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Добро пожаловать! Чтобы записаться на консультацию, нажмите на кнопку ниже.');
});

module.exports = bot;

