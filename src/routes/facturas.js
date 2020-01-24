const express = require('express');
const router = express.Router();

const facturasController = require('../controllers/facturasController');

/* Proveedor */
router.get('/', facturasController.list);
router.post('/save', facturasController.save);
router.get('/delete/:idfac', facturasController.delete);
router.get('/update/:idfac', facturasController.update);
router.post('/update/:idfac', facturasController.edit);

module.exports = router;
