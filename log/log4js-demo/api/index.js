const router = require('express').Router();

router.post('/test1', (req, res) => {
    const {body} =req;
    console.log(body)
    res.send({
        code: 200,
        message: 'ok'
    })
})

module.exports = router;
