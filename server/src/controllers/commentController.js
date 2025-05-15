const dataStore = require('../models');

// GET all comments
const getAllComments = (req, res) => {
    res.status(200).json(dataStore.comments);
};

// GET comment by ID
const getCommentById = (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = dataStore.comments.find(c => c.id === commentId);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    res.status(200).json(comment);
};

// POST create a new comment
const createComment = (req, res) => {
    const { userId, videoId, text } = req.body;

    if (!userId || !videoId || !text) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const userExists = dataStore.users.some(user => user.id === userId);
    const videoExists = dataStore.videos.some(video => video.id === videoId);

    if (!userExists) {
        return res.status(404).json({ error: 'User not found' });
    }
    if (!videoExists) {
        return res.status(404).json({ error: 'Video not found' });
    }

    const newComment = {
        id: dataStore.nextIds.comments++,
        userId,
        videoId,
        text,
        likes: [],
        createdAt: new Date().toISOString()
    };

    dataStore.comments.push(newComment);

    res.status(201).json(newComment);
};

// PUT update a comment
const updateComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);

    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    dataStore.comments[commentIndex].text = text;
    dataStore.comments[commentIndex].updatedAt = new Date().toISOString();

    res.status(200).json(dataStore.comments[commentIndex]);
};

// DELETE a comment
const deleteComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);

    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    dataStore.comments.splice(commentIndex, 1);
    res.status(204).end();
};

// POST like a comment
const likeComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    const comment = dataStore.comments.find(c => c.id === commentId);
    const userExists = dataStore.users.some(user => user.id === userId);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    if (!userExists) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (comment.likes.includes(userId)) {
        return res.status(409).json({ error: 'User already liked this comment' });
    }

    comment.likes.push(userId);
    res.status(201).json({ message: 'Comment liked successfully' });
};

// DELETE unlike a comment
const unlikeComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    const comment = dataStore.comments.find(c => c.id === commentId);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    const likeIndex = comment.likes.indexOf(userId);
    if (likeIndex === -1) {
        return res.status(404).json({ error: 'User has not liked this comment' });
    }

    comment.likes.splice(likeIndex, 1);
    res.status(204).end();
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
    likeComment,
    unlikeComment
};
