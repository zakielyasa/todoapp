let mongoose = require('mongoose')
let Schema = mongoose.Schema

let todoSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    complete: Boolean
})

let Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo