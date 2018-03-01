var express = require('express');
var router = express.Router();
var Controller = require('../controllers/Todo')
var Verify = require('../middleware/verify')

/* GET users listing. */

router.post('/create', Verify.isLogin, Controller.createTodo)
router.get('/', Verify.isLogin, Controller.findAllTodo)
router.delete('/delete/:id', Verify.isLogin, Controller.deleteTodo)
router.put('/update/:id', Verify.isLogin, Controller.updateTodo)
router.get('/:id', Verify.isLogin, Controller.findTodo)

module.exports = router;