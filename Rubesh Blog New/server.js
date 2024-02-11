const express = require( 'express')
const cors = require( 'cors')
const morgan = require( 'morgan')
const colors = require( 'colors')
const dotenv = require( 'dotenv')
const connectDB = require('./config/db');

//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoutes')

//Connect DB
connectDB();


//rest object
const app = express()

//middlewares
app.use(cors( ))
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("api/v1/user", userRoutes);

//Port
const PORT = process.env.PORT || 8080;


// Listen
app.listen(8080, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode Port ${PORT}` .bgCyan.white)
});