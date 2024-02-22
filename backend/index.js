import express from "express";
import PORT from "./config.js";
import {mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookmodels.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send({ message: "Hello, world!" });
});

app.post('/books',async(req,res)=>{
  try{
    if(!request.body.title || !request.body.author || !request.body.publishYear){
      return res.status(400).send({message:"All fields are required"});
    }
    const book = new Book({
      title:request.body.title,
      author:request.body.author,
      publishYear:request.body.publishYear
    });

    const Book = await Book.create(newBook);
    return res.status(201).send(Book);
  }catch(err){
    console.log(err);
  }

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
});