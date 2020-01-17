const controller = {};

/*
const dbConnection = require('../config/dbConnection');
*/

  // Listar Registros de Tabla de estados por país
  controller.list = (req, res) => { 
    const { idpais } = req.params;
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM paises INNER JOIN estados ON paises.id=estados.idpais where estados.idpais= ?' , [idpais], (err, result) => {
        console.log(result);  
        if (err) {
              res.json(err);
             }
              res.render('estados' , {
              estados: result    
             });     
           });
        });
    };

  // Adicionar Registros en Tabla de estados
  controller.save = (req, res) => {
    const { idpais } = req.params;
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO estados SET ?', [data], (err, result) => {
         res.redirect("/paises/"+ idpais + "/estados");
    });
  });
};

  // Seleccionamos Registro en Tabla de estados para Actualizar
  controller.update = (req, res) => {
    const { idpais } = req.params;
    const { idedo }  = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM estados where idpais = ? and idedo= ?', [idpais, idedo], (err, result) => {
                console.log(result);
                res.render('estados_edit', {
                estados: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de estados
  controller.edit = (req, res) => {
    const { idpais } = req.params;
    const { idedo } = req.params;
    const newEstado = req.body;
    const ruta = '/paises/ `idpais` /estados';
    req.getConnection((err, conn) => {
        conn.query('UPDATE estados SET ? WHERE idpais= ? and idedo= ?', [newEstado, idpais, idedo], (err, result) => {
                res.redirect("/paises/"+ idpais + "/estados");
            });
        });
  };

  // Eliminar Registros en Tabla de estados
  controller.delete = (req, res) => {
    const { idpais } = req.params;
    const { idedo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM estados WHERE idpais=? and idedo= ?', [idpais, idedo], (err, result) => {
            res.redirect("/paises/"+ idpais + "/estados");
       });
    });
  };

  module.exports = controller;