const router = require('express').Router();

const Post = require('../../models/post');

router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(error => {
            console.log(error);
            res.json({ error })
        })
});

router.get('/:postId', (req, res) => {
    Post.findById(req.params.postId)
        .then(post => res.json(post))
        .catch(error => res.json({ error }));
})

router.post('/', (req, res) => {
    Post.create(req.body)
        .then(post => res.json(post))
        .catch(error => res.json({ error }))
});

router.put('/:postId', (req, res) => {
    Post.findByIdAndUpdate(req.params.postId, req.body, { new: true })
        .then(post => res.json(post))
        .catch(error => res.json({ error }))
});

router.delete('/:postId', (req, res) => {
    Post.findByIdAndDelete(req.params.postId)
        .then(post => res.json(post))
        .catch(error => res.json({ error }))
})

module.exports = router;