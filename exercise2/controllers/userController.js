'use strict';
let Models= require("../models");

const getUsers = (res) => {
    Models.User.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const createUser = (data, res) => {
    console.log(data)
    new Models.User(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const updateUser = (req, res) => {
    console.log(req.params.id)
    console.log(req.body);
    Models.User.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const deleteUser = (req, res) => {
    Models.User.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false
    })
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser
}