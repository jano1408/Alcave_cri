const controller = {};

  // Listar Registros de Tabla de monedas
  controller.list = (req, res) => { 
  
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM proveedores INNER JOIN paises ON proveedores.paispro= paises.id INNER JOIN estados ON estados.idedo = proveedores.estpro INNER JOIN municipios ON proveedores.munpro = municipios.idmun ' ,  (err, result) => {
            if (err) {
              res.json(err);
             }
              res.render('proveedor' , {
              proveedor: result    
             });     
           });
        });
    };

  // Adicionar Registros en Tabla de monedas
  controller.save = (req, res) => {
    const data = req.body;
    
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO proveedores SET ?', [data], (err, result) => {
         res.redirect("/provededor");
    });
  });
};

  // Seleccionamos Registro en Tabla de monedas para Actualizar
  controller.update = (req, res) => {
    const { idpro } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proveedores INNER JOIN paises ON proveedores.paispro= paises.id INNER JOIN estados ON estados.idedo = proveedores.estpro INNER JOIN municipios ON proveedores.munpro = municipios.idmun WHERE proveedores.idpro= ?', [idpro], (err, result) => {
              console.log(result);
              res.render('proveedor_edit', {
              proveedor: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de monedas
  controller.edit = (req, res) => {
    const { idpro } = req.params;
    const newProveedor = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE proveedores SET ? WHERE idpro= ?', [newProveedor, idpro], (err, result) => {
               res.redirect("/proveedor");
            });
        });
  };

  // Eliminar Registros en Tabla de monedas
  controller.delete = (req, res) => {
    const { idpro } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM proveedores WHERE idpro=?', [idpro], (err, result) => {
            res.redirect("/proveedor");
       });
    });
  };

  module.exports = controller;