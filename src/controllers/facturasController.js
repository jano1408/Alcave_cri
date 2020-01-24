const controller = {};

  // Listar Registros de Tabla de facturas
  controller.list = (req, res) => { 
  
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM facturas INNER JOIN proveedores ON facturas.riffac= proveedores.rifpro INNER JOIN impuesto ON facturas.idivafac = impuesto.id INNER JOIN monedas ON facturas.curfac = monedas.idmon INNER JOIN paises ON facturas.paisfac = paises.id INNER JOIN estados ON facturas.paisfac = estados.idpais and facturas.edofac = estados.idedo INNER JOIN municipios ON facturas.paisfac = municipios.idpais and facturas.edofac = municipios.idedo and facturas.munfac = municipios.idmun' ,  (err, result) => {
            if (err) {
              res.json(err);
             }
              res.render('facturas' , {
              facturas: result    
             });     
           });
        });
    };

    // Adicionar Registros en Tabla de facturas
  controller.save = (req, res) => {
    const { idpais } = req.params;
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO facturas SET ?', [data], (err, result) => {
         res.redirect("/paises/"+ idpais + "/estados");
    });
  });
};

  // Seleccionamos Registro en Tabla de facturas para Actualizar
  controller.update = (req, res) => {
    const { idfac } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM facturas INNER JOIN proveedores ON facturas.riffac= proveedores.rifpro INNER JOIN impuesto ON facturas.idivafac = impuesto.id INNER JOIN monedas ON facturas.curfac = monedas.idmon INNER JOIN paises ON facturas.paisfac = paises.id INNER JOIN estados ON facturas.paisfac = estados.idpais and facturas.edofac = estados.idedo INNER JOIN municipios ON facturas.paisfac = municipios.idpais and facturas.edofac = municipios.idedo and facturas.munfac = municipios.idmun WHERE facturas.idfac = ?', [idfac], (err, result) => {
                res.render('facturas_edit', {
                facturas: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de facturas
  controller.edit = (req, res) => {
    const { idfac } = req.params;
    const newFacturas = req.body;
    const registro = {
      idfac:  idfac,
      numfac: req.body.numfac,
      fecfac: req.body.fecfac,
      ctlfac: req.body.ctlfac,
      riffac: req.body.riffac,
      basfac: req.body.basfac,
      ivafac: req.body.ivafac,
      curfac: req.body.curfac,
      idivafac: req.body.idivafac,
      paisfac: req.body.paisfac,
      edofac: req.body.edofac,
      munfac: req.body.munfac
    };
    req.getConnection((err, conn) => {
        console.log(registro);
        conn.query('UPDATE facturas SET ? WHERE idfac= ?', [registro, idfac], (err, result) => {
            if (err) {            
                console.log('error en la consulta');
                console.log(err);
            return;
            }
                res.redirect("/facturas");
            });
        });
  };

  // Eliminar Registros en Tabla de facturas
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