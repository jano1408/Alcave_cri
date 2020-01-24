const controller = {};

  // Listar Registros de Tabla de monedas
  controller.list = (req, res) => { 
  
    req.getConnection((err, conn) => {
       conn.query('SELECT * FROM monedas' ,  (err, result) => {
            if (err) {
              res.json(err);
             }
              res.render('monedas' , {
              monedas: result    
             });     
           });
        });
    };

  // Adicionar Registros en Tabla de monedas
  controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
         conn.query('INSERT INTO monedas SET ?', [data], (err, result) => {
         res.redirect("/monedas");
    });
  });
};

  // Seleccionamos Registro en Tabla de monedas para Actualizar
  controller.update = (req, res) => {
    const { idmon } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM monedas WHERE monedas.idmon= ?', [idmon], (err, result) => {
              console.log(result);
              res.render('monedas_edit', {
                monedas: result[0]
            });
        });
    });
  };

  // Actualizar Registros en Tabla de monedas
  controller.edit = (req, res) => {
    const { idmon } = req.params;
    const newMonedas = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE monedas SET ? WHERE idmon= ?', [newMonedas, idmon], (err, result) => {
               res.redirect("/monedas");
            });
        });
  };

  // Eliminar Registros en Tabla de monedas
  controller.delete = (req, res) => {
    const { idmon } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM monedas WHERE idmon=?', [idmon], (err, result) => {
            res.redirect("/monedas");
       });
    });
  };

  module.exports = controller;