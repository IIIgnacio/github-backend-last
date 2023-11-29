import express from "express";
import { connectDB } from "./src/mongo/mongoConnection";
import mainRouter from "./src/routes";

const PORT = process.env.PORT || 3000;

const app = express();
connectDB();
app.use(express.json());

app.use(mainRouter)

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
