'use strict';
const Mongoose = require('mongoose');
const uri = process.env.DB_URI || "mongodb://127.0.0.1:27017/exercise2";

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

Mongoose.connect(uri, mongooseOptions)
.then(()=> console.log('MongoDB Connected'))
.catch(error=> console.log(`MongoDB Error: ${error.message}`))

const db = Mongoose.connection;

db.on("erorr", console.error.bind(console, "MongoDB connection error:"));

exports.Mongoose = Mongoose;