var express = require('express') ;
var router = express.Router() ;
var controller = require('./controllers/userController');

router.get('/', controller.home);
router.get('/user', controller.user);

module.exports = router ;