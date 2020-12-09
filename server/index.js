// const connectDB = require('./startup/DB');
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// connectDB();
// app.use(express.json());
// app.use(bodyParser.json({limit:"30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
// app.use(cors());


// const port = process.env.PORT||5000;

// app.listen(port, () => {
//     console.log(`Server started on port:${port}`)
// });
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//This imports the routes from the routes file!!
import postRoutes from './routes/posts.js';

const app = express();

//This declares that every will start with('/posts')
//Test by using localhost:5000/posts
app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://Monbolds:semperfi@pocketdojo.bqqpg.mongodb.net/PocketDojo?retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log('Server running on port:${PORT}')))
    .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false);