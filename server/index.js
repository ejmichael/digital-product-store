const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const productRouter = require('./src/routes/productsRoute');
const orderRouter = require('./src/routes/orderRoute');
const PDFRouter = require('./src/routes/uploadPDFRoute');
const userRoute = require('./src/routes/userRoute');

const connectToMongoDB = require('./src/db');

const app = express();

(async () => {
    try {
        // Connect to MongoDB
        await connectToMongoDB();
        
        // Middleware
        app.use(express.json());
        app.use(cors());
        app.use(express.urlencoded({ extended: false }));

        // Routes
        app.get('/', (req, res) => {
            res.send("Home Route");
        });

        app.use('/api/products', productRouter);
        app.use('/api/order', orderRouter);
        app.use('/api/user', userRoute);
        app.use('/api/pdf', PDFRouter);

        // Start the server
        const port = process.env.PORT || 5000; // Use the port from .env or default to 5000
        app.listen(port, () => {
            console.log("Listening on port " + port);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process if the connection fails
    }
})();
