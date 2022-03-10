const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    body: String,
    author: String,
    category: String,
    createdAt: String
});

module.exports = mongoose.model('post', postSchema);