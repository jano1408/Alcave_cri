const express = require('express');
const router = express.Router();

const impuestoController = require('../controllers/impuestoController');

router.get('/', impuestoController.list);
router.post('/save', impuestoController.save);
router.get('/delete/:id', impuestoController.delete);
router.get('/update/:id', impuestoController.update);
router.post('/update/:id', impuestoController.edit);

module.exports = router;
