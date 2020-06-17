const rootRouter = require('express').Router();
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

rootRouter.use('/', router);

module.exports = rootRouter;
