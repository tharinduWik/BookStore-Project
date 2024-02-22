
import mongoose from "mongoose";

const bookShema = mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
        },
        Author:{
            type:String,
            required: true,
        },
        PubclishYear:{
            type:Number,
            required: true,
        },
    },
    {timestamps:true}
)
export const Book = mongoose.model('cat',{bookShema});