const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
})