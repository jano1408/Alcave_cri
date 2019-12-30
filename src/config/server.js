const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection'); 
const bodyParser = require('body-parser');

const app = express();

//Importing routes
const customerRoutes = require('../routes/customer');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

module.exports = app;



