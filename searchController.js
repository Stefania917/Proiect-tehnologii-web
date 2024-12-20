import Search from './models/search.js';
import User from './models/user.js';

// Funcția pentru crearea unei căutări
export const createSearch = async (req, res) => {
    const { query, resultCount, userId } = req.body;

    try {
        // Validăm datele de intrare
        if (!query || resultCount === undefined || !userId) {
            return res.status(400).json({ message: 'Missing query, resultCount, or userId' });
        }

        // Verificăm dacă utilizatorul există
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Creăm căutarea
        const search = await Search.create({ query, resultCount, userId });
        return res.status(201).json({ message: 'Search created successfully', search });
    } catch (err) {
        // Gestionarea erorii
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Funcția pentru obținerea tuturor căutărilor
export const getAllSearches = async (req, res) => {
    try {
        const searches = await Search.findAll();
        return res.status(200).json(searches);
    } catch (err) {
        // Gestionarea erorii
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
