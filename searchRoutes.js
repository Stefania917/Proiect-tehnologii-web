import express from 'express';
import { createSearch, getAllSearches } from '../controllers/searchController.js'; // Importăm funcțiile din controller

const router = express.Router();

// Crearea unui search
router.post('/', createSearch);

// Obținerea tuturor căutărilor
router.get('/', getAllSearches);

export default router;
