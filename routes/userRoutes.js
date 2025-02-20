// routes/userRoutes.js
const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = new User(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;