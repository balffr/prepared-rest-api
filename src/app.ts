import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import { MONGODB_URI } from './util/secrets';

// import * as cors from "cors";

import routes from './routes';

// Create Express server
const app = express();

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB ready to use.');
  })
  .catch(err => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
  });

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

//Set all routes from routes folder
app.use('/', routes);

export default app;
