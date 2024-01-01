const express = require('express');
const bodyParser = require('body-parser');

const expressHandlebars= require('express-handlebars').engine;
require('dotenv').config();


const app =express();
const serverPort = process.env.SERVER_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//===================
const CustomerRouter = require('./routes/CustomerRoute');
//===================


app.use(express.static('public'));

app.engine('hbs', expressHandlebars({extname:'.hbs',
    layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', '.hbs');



app.use('/',CustomerRouter);


app.listen(serverPort,()=>{
    console.log(`Server Started & Running on port ${serverPort}`);
});