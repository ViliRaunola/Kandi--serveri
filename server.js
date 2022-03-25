const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 1234;
const config = require('./config/database');
const mongo_uri = process.env.MONGODB_URI || config.database;
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const api = require('./routes/api');
app.use('/api', api);

//Connecting to a databse
mongoose.connect(mongo_uri);

//When connection is established
mongoose.connection.on('connected', () => {
    console.log(`Connecting to the database': ${mongo_uri} was successfull`);
});

//On Error
mongoose.connection.on('error', () => {
    console.log(`Connecting to the database: ${mongo_uri} failed`);
});


//Main page route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

var corsOptions = {
    origin: 'https://kandi-visualisointi.herokuapp.com',
};
app.use(cors(corsOptions));

//Creating the server
app.listen(port, () =>{
    console.log(`Server is listening on port: ${port}`);
});