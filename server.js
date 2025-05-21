const express = require('express');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const app = express();
const bot = require('./bot');

const PORT = process.env.PORT || 3000;

// Webhook для Telegram
app.use(bot.webhookCallback('/bot'));

// Проверка
app.get('/', (req, res) => res.send('Бот работает!'));

bot.telegram.setWebhook(`${process.env.RENDER_EXTERNAL_URL}/bot`);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

