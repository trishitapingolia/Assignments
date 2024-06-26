// Importing required modules
const express = require('express');

// Initialize Express app
const app = express();

// Configure environment variables and define the server port
const PORT= 5000;

// Import and configure Mongoose for MongoDB interaction
const mongoose = require('mongoose');
const MONGODB_URL= "mongodb://localhost:27017/materials";

// Set the global base directory for the project
global.__basedir = __dirname;

mongoose.connect(MONGODB_URL);


// Event listener for successful MongoDB connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to MongoDB');
})

mongoose.connection.on('error', (err)=>{
    console.log('Error occurred while connecting');
})

// Import the material model to ensure it is registered with Mongoose
require('./models/material_model');

app.use(express.json());

// Import and use the routes
app.use(require('./routes/material_route'));
app.use(require('./routes/file_route'));


// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});