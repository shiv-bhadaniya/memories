import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    dislikes: {type: [String], default: []},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessageModel = mongoose.model("postMessage", postSchema);

export default PostMessageModel;