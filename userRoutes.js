import express from 'express';
import { createUser, getAllUsers } from './controllers/userController.js'; // Importăm funcțiile din controller

const router = express.Router();

// Crearea unui utilizator
router.post('/', createUser);

// Obținerea tuturor utilizatorilor
router.get('/', getAllUsers);

export default router;
