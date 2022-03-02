const express = require('express');
const router = express.Router();

const {getPosts, createPost, updatePost, deletePost, likePost} = require('../controllers/post.js')

router.get('/',getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost',likePost);

module.exports = router;