import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './connectDB/connectDB'


const authRouter = require("./routers/auth.routers");
const favoriteRouter = require("./routers/favorite.router");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vacation API");
});

app.use("/auth", authRouter);
app.use("/favorite", favoriteRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})
