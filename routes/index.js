const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index',null);
});

router.get('/project', (req, res, next) => {
    res.render('form',null);
});

router.post('/project/add', (req, res, next) => {
    const data = {
        code: 200,
        status: 'success',
        data: req.body
    }
    res.json(data);
});
module.exports = router;