const Todo = require('../models/Todo')

let createTodo = (req, res) => {
    let objNewTodo = Todo ({
        userId: req._id,
        name: req.body.name,
        complete: false
    })
    Todo.create(objNewTodo)
    .then(data => {
        res.send({
            message: 'Todo created',
            data
        })
    })
    .catch(error => {
        res.status(403).send(error)
    })
}

let findAllTodo = (req, res) => {
    Todo.find({userId: req._id})
    .then(data => {
        res.send({
            message: 'All your todo list',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let findTodo = (req, res) => {
    Todo.findById(req.params.id)
    .then(data => {
        res.send({
            message: 'Todo found',
            data
        })
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

let deleteTodo = (req, res) => {
    Todo.remove({
        _id: req.params.id,
        userId: req._id
    })
    .then(data => {
        res.send({
            message: 'Todo deleted',
            data
        })
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

let updateTodo = (req, res) => {
    let boolean=false
    if(req.body.complete=='Done'){
        boolean=true
    }
    let objUpdateTodo = {
        name: req.body.name,
        complete: boolean 
    }
    Todo.findByIdAndUpdate(req.params.id, objUpdateTodo)
    .then(data => {
        res.send({
            message: 'Todo updated',
            data
        })
    })
    .catch(err => {
        res.send(err)
    })

let myTodo = (req, res) => {
    
    }
}

module.exports ={
    createTodo,
    findAllTodo,
    findTodo,
    updateTodo,
    deleteTodo,
    
}