// config/config.js
require('dotenv').config();

module.exports = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    bingApiKey: process.env.BING_API_KEY
};
