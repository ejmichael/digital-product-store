const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config()

const productRouter = require('./src/routes/productsRoute')

const connectToMongoDB = require('./src/db')

const app = express()

connectToMongoDB()

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Home Route")
})

app.use('/api/', productRouter)


const port = 5000;

app.listen(port, () => {
    console.log("Listening on port " + port);
})