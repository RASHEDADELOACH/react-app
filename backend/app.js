const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const petRoute = require('./routes/v1/pet.routes');

// middlewares
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Route is working!")
})


// pet route
app.use('/api/v1/pet', petRoute)

module.exports = app;