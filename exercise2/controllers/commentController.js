'use strict';
let Models = require("../models");

const getComments = (res) => {
    Models.Comment.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(error=>{
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const createComment = (data, res) => {
    console.log(data);
    new Models.Comment(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const updateComment = (req, res) => {
    console.log(req.body);
    Models.Comment.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const deleteComment = (req, res) => {
    Models.Comment.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false
    })
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
}

module.exports = {
    getComments, createComment, updateComment, deleteComment
}