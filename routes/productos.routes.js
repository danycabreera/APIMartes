const express = require('express');
const router = express.Router();

const { obtenerTodos, obtenerUno, crear } = require('../controllers/productos.controller.js')

router.get('/', obtenerTodos);
router.get('/:id', obtenerUno);
router.post('/', crear);


module.exports = router;