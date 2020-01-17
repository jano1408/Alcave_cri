const controller = {};
/*
const dbConnection = require('../config/dbConnection');
*/
  // Listar Registros de Tabla de impuesto
  controller.list = (req, res) => {
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM impuesto', (err, result) => {
            if (err) {
              res.json(err);
             }
              res.render('impuesto' , {
              impuesto: result    
             });     
           });
        });
    };

  // Adicionar Registros en Tabla de impuesto
  controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO impuesto SET ?', [data], (err, result) => {
         res.redirect('/impuesto');
    });
  });
};

  // Seleccionamos Registro en Tabla de impuesto para Actualizar
  controller.update = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM impuesto WHERE id= ?', [id], (err, result) => {
              res.render('impuesto_edit', {
                impuesto: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de impuesto
  controller.edit = (req, res) => {
    const { id } = req.params;
    const newImpuesto = req.body;
    console.log(id);
    console.log(newImpuesto);
    req.getConnection((err, conn) => {
        conn.query('UPDATE impuesto SET ? WHERE id= ?', [newImpuesto, id], (err, result) => {
               res.redirect('/impuesto');
            });
        });
  };

  // Eliminar Registros en Tabla de impuesto
  controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM impuesto WHERE id= ?', [id], (err, result) => {
            res.redirect('/impuesto');
       });
    });
  };

  module.exports = controller;