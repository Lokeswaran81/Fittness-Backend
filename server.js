const express = require("express");
const connectDB = require("./config/db");
connectDB();
const authRoutes = require("./Routes/authRoute");
const app = express();
const PORT = 3000;
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`server listen using port number of ${PORT}`);
})
app.use('/auth',authRoutes)