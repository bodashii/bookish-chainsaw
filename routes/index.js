const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/', (req, res) => {
    console.log(req, res);
});

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;