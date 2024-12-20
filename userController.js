import User from './models/user.js';

// Funcția pentru crearea unui utilizator
export const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        // Validăm datele de intrare
        if (!name || !email) {
            return res.status(400).json({ message: 'Missing name or email' });
        }

        // Creăm utilizatorul
        const user = await User.create({ name, email });
        return res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        // Gestionarea erorii
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Funcția pentru obținerea tuturor utilizatorilor
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (err) {
        // Gestionarea erorii
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
