import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

// Connect to Cloudinary to store generated posts in the MongoDB Database.
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Route to get all posts.
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

// Route to get a specifc post.
router.route('/:postId').get(async (req, res) => {
    try {
        const postId = req.params.postId;
        const postWithComments = await Post.findById(postId).populate('comments');

        if (!postWithComments) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }

        res.status(200).json({ success: true, data: postWithComments });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

// Route to create a post.
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        });

        res.status(200).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

//Route to add a comment to a post.
router.route('/:postId/comments').post(async (req, res) => {
    try {
        const postId = req.params.postId;
        const { user, text } = req.body;

        const post = await Post.findById(postId);

        post.comments.push({ user, text });
        await post.save();

        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

export default router;