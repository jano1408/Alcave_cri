const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection'); 
const bodyParser = require('body-parser');

const app = express();

//Importing routes
const mainRoutes = require('./routes/main');
const impuestoRoutes = require('./routes/impuesto');
const paisesRoutes = require('./routes/paises');
const estadosRoutes = require('./routes/estados');
const municipiosRoutes = require('./routes/municipios');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'alcavecri'
    }, 'single'));

app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', mainRoutes);
app.use('/impuesto', impuestoRoutes);
app.use('/paises', paisesRoutes);
app.use('/paises/estados', estadosRoutes);
app.use('/paises/estados/municipios', municipiosRoutes);


// starting in the server

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});

