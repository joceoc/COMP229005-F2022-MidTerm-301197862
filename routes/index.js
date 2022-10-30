var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

// router.get('/add_edit', controlerIndex.addEdit);
module.exports = router;
