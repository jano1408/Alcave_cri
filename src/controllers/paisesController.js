const controller = {};
/*
const dbConnection = require('../config/dbConnection');
*/
  // Listar Registros de Tabla de paises
  controller.list = (req, res) => {
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM paises', (err, result) => {
            if (err) {
              res.json(err);
             }
              res.render('paises' , {
              paises: result    
             });     
           });
        });
    };

  // Adicionar Registros en Tabla de paises
  controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO paises SET ?', [data], (err, result) => {
         res.redirect('/paises');
    });
  });
};

  // Seleccionamos Registro en Tabla de paises para Actualizar
  controller.update = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paises WHERE id= ?', [id], (err, result) => {
              res.render('paises_edit', {
                paises: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de paises
  controller.edit = (req, res) => {
    const { id } = req.params;
    const newPais = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE paises SET ? WHERE id= ?', [newPais, id], (err, result) => {
               res.redirect('/paises');
            });
        });
  };

  // Eliminar Registros en Tabla de paises
  controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM paises WHERE id= ?', [id], (err, result) => {
            res.redirect('/paises');
       });
    });
  };

  module.exports = controller;