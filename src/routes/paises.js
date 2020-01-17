const express = require('express');
const router = express.Router();

const paisesController = require('../controllers/paisesController');
const estadosController = require('../controllers/estadosController');
const municipiosController = require('../controllers/municipiosController');

/* Estados */
router.get('/:idpais/estados', estadosController.list);
router.get('/:idpais/estados/update/:idedo', estadosController.update);
router.post('/:idpais/estados/update/:idedo', estadosController.edit);
router.get('/:idpais/estados/delete/:idedo', estadosController.delete);
router.post('/:idpais/estados/save', estadosController.save);

/* Municipios */
router.get('/:idpais/estados/:idedo/municipios', municipiosController.list); 
router.get('/:idpais/estados/:idedo/municipios/update/:idmun', municipiosController.update);
router.post('/:idpais/estados/:idedo/municipios/update/:idmun', municipiosController.edit);
router.get('/:idpais/estados/:idedo/municipios/delete/:idmun', municipiosController.delete);
router.post('/:idpais/estados/:idedo/municipios/save', municipiosController.save);

/* Paises  */ 
router.get('/', paisesController.list);
router.post('/save', paisesController.save);
router.get('/delete/:id', paisesController.delete);
router.get('/update/:id', paisesController.update);
router.post('/update/:id', paisesController.edit);

module.exports = router;
