const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test'){
  mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json());

routes(app);

app.use((err, req,  res,next)=>{
  res.status(422).send({error: err.message});

});

module.exports = app;
