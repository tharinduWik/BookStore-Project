
import mongoose from "mongoose";

const bookShema = mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
        }
    }
)
export const Book = mongoose.model('cat',{name:String});