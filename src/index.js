const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection'); 
const bodyParser = require('body-parser');

const app = express();

//Importing routes
const customerRoutes = require('./routes/customer');

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
      database: 'crudnodejsmysql'
    }, 'single'));

app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

// starting in the server

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});

