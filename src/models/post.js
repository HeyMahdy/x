import mongoose from "mongoose";



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    year : {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const  Post = mongoose.model("Post", postSchema);
export default Post;


 // Use `export` in ES Modules

