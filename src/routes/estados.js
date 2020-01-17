const express = require('express');
const router = express.Router();

const estadosController = require('../controllers/estadosController');

router.get('/estados/:idedo', estadosController.list);
router.post('/save', estadosController.save);
router.get('/delete/:idedo', estadosController.delete);
router.get('/update/:idedo', estadosController.update);
router.post('/update/:idedo', estadosController.edit);

module.exports = router;
