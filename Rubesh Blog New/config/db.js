const mongoose = require ("mongoose");
const colors = require("colors");
const connectDB = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console. log( `Congrats Rubesh Connected to Mongodb Databse  ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console. log( `MONGO Connect Error ${error}`.bgRed.white);
    }
};

        module.exports = connectDB;