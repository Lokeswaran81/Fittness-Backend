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
const homeContentRoutes = require("./Routes/homeContentRoute.js");

const programRoutes = require("./Routes/programRoutes.js");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
// middlewares
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/home-content", homeContentRoutes);

app.use("/api/programs", programRoutes);

app.get("/", (req, res) => {
  res.send("Fitness backend is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});