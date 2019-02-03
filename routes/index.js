const express = require('express');
const router = express.Router();

const timeStamp = require('../controllers/apiController');

router.get('/', timeStamp.mainRoute);

router.get('/:time', timeStamp.formatRoute);

module.exports = router;