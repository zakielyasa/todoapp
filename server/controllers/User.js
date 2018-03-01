const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let createUser = (req, res) => {
    let objNewUser = User ({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    })
    objNewUser.save()
    .then(data => {
        res.status(200).json({
            message: 'Welcome',
            data
        })
    })
    .catch(error => {
        res.status(404).send({
            message: `Error ${error}`
        })
    })
}

let findAllUser = (req, res) => {
    User.find()
    .then(data => {
        res.send({
            message: 'All users',
            data
        })
    })
    .catch(error => {
        res.status(401).send(error)
    })
}

let findOneUser = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(data => {
        res.send({
            message: 'Found',
            data
        })
    })
    .catch(error => {
        res.status(500).send(error)
    })
}

let editUser = (req, res) => {
    let objEditUser = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username
    }
    User.findOneAndUpdate({_id:req.params.id}, objEditUser)
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        res.status(500).send(error)
    })
}

let deleteUser = (req, res) => {
    User.remove({_id:req.params.id})
    .then(data => {
        res.send({
            message: 'User deleted',
            data
        })
        .catch(err => {
            res.status(401).send(err)
        })
    })
}

let login = (req, res) => {
    let secretKey = '98h8ad'
    User.findOne({
        username: req.body.username,
    })
    .then(data => {
        //console.log(data)
        let payload = {
            _id: data.id,
            username: data.username,
        }
        let token = jwt.sign(payload, secretKey)
        bcrypt.compare(req.body.password, data.password)
        .then(result => {
            if(result === true){
                console.log('ini result',result)
                res.send({
                    token: token,
                    message: 'Got token'
                })
            } else {
                res.send({
                    message: 'Password/username invalid'
                })
            }
        })
        .catch(err => {
            res.status(404).send(err)
        })
    })
    .catch(err => {
        res.status(401).send(err)
    })
}

module.exports = {
    createUser,
    findAllUser,
    findOneUser,
    editUser,
    deleteUser,
    login
}