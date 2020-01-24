const express = require('express');
const router = express.Router();

const proveedorController = require('../controllers/proveedorController');

/* Proveedor */
router.get('/', proveedorController.list);
router.get('/update/:idpro', proveedorController.update);
router.post('/update/:idpro', proveedorController.edit);
router.get('/delete/:idpro', proveedorController.delete);
router.post('/save', proveedorController.save);

module.exports = router;
