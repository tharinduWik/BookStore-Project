import express from "express";
import PORT from "./config.js";
import { mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodels.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send({ message: "Hello, world!" });
});

app.post('/books', async (req, res) => {
  const { title, author, publishYear } = req.body;
  try {
    if (title && author && publishYear) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear
    });

    const savedBook = await newBook.save();
    return res.status(201).send(savedBook);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`app is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
