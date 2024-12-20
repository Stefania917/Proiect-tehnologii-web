import express from 'express';
import sequelize from './models/db.js';
import userRoutes from './routes/userRoutes.js';
import searchRoutes from './routes/searchRoutes.js';

const app = express();
app.use(express.json());

// Rute
app.use('/users', userRoutes);
app.use('/searches', searchRoutes);

// Creare baza de date și tabele
app.get('/create', async (req, res) => {
    try {
        await sequelize.sync({ force: true });
        res.status(201).json({ message: 'Database & tables created!' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default app;
