var express = require('express');
var router = express.Router();
var Controller = require('../controllers/User')
var Verify = require('../middleware/verify')

router.get('/', Verify.isLogin, Controller.findAllUser)
router.post('/create', Controller.createUser)
router.delete('/delete/:id', Verify.isLogin, Controller.deleteUser)
router.put('/edit/:id', Verify.isLogin, Controller.editUser)
router.get('/:id', Verify.isLogin, Controller.findOneUser)
router.post('/login', Controller.login)


module.exports = router;
