// const express = require("express");
// const connectDB = require("./config/db");
// connectDB();
// const authRoutes = require("./Routes/authRoute");
// const app = express();
// const PORT = 3000;
// app.use(express.json())
// app.listen(PORT,()=>{
//     console.log(`server listen using port number of ${PORT}`);
// })
// app.use('/auth',authRoutes)



const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./Routes/authRoute.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// database connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Fitness backend is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
