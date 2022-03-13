const express       = require('express');
const router        = express.Router();

const getInfo       = require('../middleware/brands');

router.post('/', getInfo.getBrands);

module.exports = router;