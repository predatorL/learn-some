const router = require('express').Router();
const {PostsModel} = require('../models')


router.get('/posts', function(req, res, next) {
    PostsModel.find((err, param) => {
        res.send({
            attachment: param,
            message: '',
            status: err ? 400 : 200
        });
    });
});

router.post('/posts', function(req, res, next) {
    const {name, desc} = req.body;
    PostsModel.create({
        title: name,
        content: desc
    }, (err, param) => {
        res.send({
            attachment: param,
            message: '',
            status: err ? 400 : 200
        });
    });

});

router.put('/posts', function(req, res, next) {
    res.send({
        attachment: {
            list: [],
        },
        status: 200
    });
});

router.delete('/posts', function(req, res, next) {
    res.send({
        attachment: {
            list: [],
        },
        status: 200
    });
});

module.exports = router;
