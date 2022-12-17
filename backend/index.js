const express = require('express');
const cors = require("cors");
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3005;
// Products Router
const authorRouter = require('./Routes/v1/authors.routes')
const productsRouter = require('./Routes/v1/products.route');
const petRouter = require('./Routes/v1/pet.routes');
// Faker Router
const fakerRouter = require("./Routes/v1/fakerapi.routes")
const jokeRouter = require("./Routes/v1/jokes.routes")
const { dbConnect, connectToServer } = require('./Utils/dbConnect');
const jwt = require('jsonwebtoken');
const dbConnection = require('./mongooseConfig/config');
// using middlewire
const corsConfig = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig))
app.use(express.json());

// connectToServer((err) => {
//     if (!err) {
//         app.listen(port, () => {
//             console.log(`Example app listening on port ${port}`)
//         })
//     } else {
//         console.log(err);
//     }
// });
//db connection
dbConnection()

// Products Router
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/authors', authorRouter);
// Faker Router
app.use('/api/v1/faker', fakerRouter);
//jokes route
// app.use('/api/v1/jokes', jokeRouter)
// pet route
app.use('/api/v1/pet', petRouter)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, ()=>{
    console.log("The app is running on port ",port)
})