import mongoose from 'mongoose';

// Creates the Comments schema to embed in the posts. Comments require text and a username.
const Comment = new mongoose.Schema({
    user: { type: String, required: true},
    text: { type: String, required: true},
})

// Creates the Post schema for the MongoDB database. A post requires a name, prompt, and photo.
const Post = new mongoose.Schema({
    name: { type: String, requried: true},
    prompt: { type: String, requried: true},
    photo: { type: String, requried: true},
    comments: [Comment]
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;