// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const searchRoutes = require('./routes/searchRoutes');
const { sequelize } = require('./config/config');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Rute
app.use('/api', userRoutes);
app.use('/api', searchRoutes);

// Pornirea serverului
app.listen(PORT, async () => {
    console.log(`Serverul rulează pe portul ${PORT}`);

    // Sincronizarea bazei de date la pornirea serverului
    try {
        await sequelize.sync();
        console.log("Baza de date a fost sincronizată!");
    } catch (error) {
        console.error("Eroare la sincronizarea bazei de date:", error);
    }
});
