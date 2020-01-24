const controller = {};

/*
const dbConnection = require('../config/dbConnection');
*/

  // Listar Registros de Tabla de municipios por país
  controller.list = (req, res) => { 
    const { idpais } = req.params;
    const { idedo } = req.params;
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM paises INNER JOIN estados ON paises.id = estados.idpais INNER JOIN municipios ON estados.idedo = municipios.idedo WHERE paises.id= ? and estados.idedo= ?' , [idpais, idedo], (err, result) => {
            if (err) {
              res.json(err);
             }
              res.render('municipios' , {
              idpais,
              idedo,
              municipios: result    
             });     
           });
        });
    };

  // Adicionar Registros en Tabla de municipios
  controller.save = (req, res) => {
    const { idpais } = req.params;
    const { idedo } = req.params;
    const data = req.body;
    
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO municipios SET ?', [data], (err, result) => {
         res.redirect("/paises/"+ idpais + "/estados/"+ idedo + "/municipios/");
    });
  });
};

  // Seleccionamos Registro en Tabla de municipios para Actualizar
  controller.update = (req, res) => {
    const { idpais } = req.params;
    const { idedo } = req.params;
    const { idmun } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paises INNER JOIN estados ON paises.id = estados.idpais INNER JOIN municipios ON estados.idedo = municipios.idedo WHERE municipios.idpais= ? and municipios.idedo= ? and municipios.idmun= ?', [idpais, idedo, idmun], (err, result) => {
              console.log(result);
              res.render('municipios_edit', {
              municipios: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de municipios
  controller.edit = (req, res) => {
    const { idpais } = req.params;
    const { idedo } = req.params;
    const { idmun } = req.params;
    const newMunicipio = req.body;
    console.log(idpais);
    console.log(idedo);
    console.log(idmun);
    console.log(newMunicipio);
    req.getConnection((err, conn) => {
        conn.query('UPDATE municipios SET ? WHERE idpais= ? and idedo= ? and idmun= ?', [newMunicipio, idpais, idedo, idmun], (err, result) => {
               res.redirect("/paises/"+ idpais + "/estados/"+ idedo + "/municipios/");
            });
        });
  };

  // Eliminar Registros en Tabla de municipios
  controller.delete = (req, res) => {
    const { idpais } = req.params;
    const { idedo } = req.params;
    const { idmun } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM municipios WHERE idpais=? and idedo=? and idmun= ?', [idpais, idedo, idmun], (err, result) => {
            res.redirect("/paises/"+ idpais + "/estados/"+ idedo + "/municipios/");
       });
    });
  };

  module.exports = controller;