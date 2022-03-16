const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1234;
const config = require('./config/database');

const app = express();
app.use(bodyParser.json());

//Connecting to a databse
mongoose.connect(config.database);

//When connection is established
mongoose.connection.on('connected', () => {
    console.log(`Connecting to the database': ${config.database} was successfull`);
});

//On Error
mongoose.connection.on('error', () => {
    console.log(`Connecting to the database: ${config.database} failed`);
});

//Main page route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//Creating the server
app.listen(port, () =>{
    console.log(`Server is listening on port: ${port}`);
});