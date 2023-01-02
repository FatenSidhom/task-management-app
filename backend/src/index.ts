import express from 'express';
import { listRoutes } from './routes/list.routes';
import { taskRoutes } from './routes/task.routes';
import cors from 'cors';
require('dotenv').config();

// Initialitation
const app = express();

// Server Settings
app.set('port', 5000);
app.use(cors());

// Database Setup
let mongoose = require('mongoose');
const mongoDB = `mongodb+srv://faten:1234@cluster0.sa2f8.mongodb.net/kanban?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middlewares
app.use(express.json()); // Can read JSON from body request params

// Loading routes
app.use('/api/list', listRoutes);
app.use('/api/task', taskRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});