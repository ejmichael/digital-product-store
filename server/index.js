const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config()

const productRouter = require('./src/routes/productsRoute')
const orderRouter = require('./src/routes/orderRoute')

const connectToMongoDB = require('./src/db');
const userRoute = require('./src/routes/userRoute');

const app = express()

connectToMongoDB()

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Home Route")
})

app.use('/api/products', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/user', userRoute)


const port = 5000;

app.listen(port, () => {
    console.log("Listening on port " + port);
})