const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).catch(err=>console.log('Error: '+err));

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection granted!");
})


//todolist
const usersRouter = require('./routes/users');
const elementsRouter = require('./routes/elements');

app.use('/users', usersRouter);
app.use('/elements', elementsRouter);

//e-commerce
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

app.use('/products', productsRouter);
app.use('/carts', cartsRouter);
app.use('/uploads',express.static('uploads'));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, ()=>{
    console.log('Server is running on port '+port);
})