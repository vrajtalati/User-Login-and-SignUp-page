const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");


 
 
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});