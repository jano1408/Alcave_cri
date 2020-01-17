const controller = {};
/*
const dbConnection = require('../config/dbConnection');
*/
  // Muestra menu principal del sistema
  controller.menu = (req, res) => {
     res.render('main');  
   };

module.exports = controller;