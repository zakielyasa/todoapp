const jwt = require('jsonwebtoken')

function isLogin(req, res, next){
    let secretKey = '98h8ad'
    jwt.verify(req.headers.token, secretKey, function(err, decode){
        if(!err){
            req._id = decode._id
            next()
        } else {
            res.send(err)
        }
    })

}

module.exports = {
    isLogin
}