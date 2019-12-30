const controller = {};

const dbConnection = require('../config/dbConnection');

  // Listar Registros de Tabla de Clientes
  controller.list = (req, res) => {
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM customer ORDER BY name', (err, result) => {
            if (err) {
              res.json(err);
             }
             res.render('customer' , {
             customer: result    
             });     
           });
        });
    };

  // Adicionar Registros en Tabla de Clientes
  controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO customer SET ?', [data], (err, result) => {
         res.redirect('/');
    });
  });
};

  // Seleccionamos Registro en Tabla de Clientes para Actualizar
  controller.update = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id= ?', [id], (err, result) => {
              res.render('customer_edit', {
              customer: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de Clientes
  controller.edit = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    console.log(id);
    console.log(newCustomer);
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer SET ? WHERE id= ?', [newCustomer, id], (err, result) => {
               res.redirect('/');
            });
        });
  };

  // Eliminar Registros en Tabla de Clientes
  controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id= ?', [id], (err, result) => {
            res.redirect('/');
       });
    });
  };

  module.exports = controller;