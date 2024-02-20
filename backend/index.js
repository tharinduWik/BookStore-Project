import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send({ message: "Hello, world!" });
});
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
mongoose.connect(mongoDBURL)
.then(() => {
  console.log("DB connected");
})
.catch((err) => {
  console.log(err);
});
