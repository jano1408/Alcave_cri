const express = require('express');
const router = express.Router();

const monedasController = require('../controllers/monedasController');

/* Proveedor */
router.get('/', monedasController.list);
router.get('/update/:idmon', monedasController.update);
router.post('/update/:idmon', monedasController.edit);
router.get('/delete/:idmon', monedasController.delete);
router.post('/save', monedasController.save);

module.exports = router;
