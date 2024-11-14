const express = require("express");
const mongoose = require("mongoose");
const connectDataBase = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://saikhnaa:es101206@test1.xs1k1.mongodb.net/?retryWrites=true&w=majority&appName=TEST1"
  );
  if (res) console.log("db connected");
};
connectDataBase();
const userRouter = require("./router/userRouter");
const app = express();
app.use(express.json());
app.use("/user", userRouter);
const PORT = 8080;

app.listen(PORT, console.log(`Your server is running in ${PORT}`));
