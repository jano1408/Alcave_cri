const express = require('express');
const router = express.Router();

const municipiosController = require('../controllers/municipiosController');

router.get('/estados/:id', municipiosController.list);
router.post('/save', municipiosController.save);
router.get('/delete/:id', municipiosController.delete);
router.get('/update/:id', municipiosController.update);
router.post('/update/:id', municipiosController.edit);

module.exports = router;
