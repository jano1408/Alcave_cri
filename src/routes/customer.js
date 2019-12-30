const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/save', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.update);
router.post('/update/:id', customerController.edit);

module.exports = router;
