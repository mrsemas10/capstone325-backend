const express = require("express");
require("dotenv").config();
const cors = require("cors");

// ROUTERS
const authRouter = require("./routers/auth.routers");
const favoriteRouter = require("./routers/favorite.router");
// CONNECT TO DATABASE
const connectDB = require("./connectDB/connectDB");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vacation API");
});

app.use("/auth", authRouter);
app.use("/favorite", favoriteRouter);

const port = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
