const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const leverancierRoute = require('./routes/leverancier');
const klantRoute = require('./routes/klant');
const dashboardRoute = require('./routes/dashboard');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user',userRoute);
app.use('/leverancier',leverancierRoute);
app.use('/klant',klantRoute);
app.use('/dashboard',dashboardRoute);

module.exports = app;
