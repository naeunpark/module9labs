'use strict';
let Models= require("../models");

const getPosts = (res) => {
    Models.Post.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const createPost = (data, res) => {
    console.log(data)
    new Models.Post(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const updatePost = (req, res) => {
    console.log(req.body);
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const deletePost = (req, res) => {
    Models.Post.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false
    })
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
}

module.exports = {
    getPosts, createPost, updatePost, deletePost
}