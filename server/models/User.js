let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new Schema ({
    name: String,
    email: String,
    username: String,
    password: String
})

let User = mongoose.model('User', userSchema)
module.exports = User;