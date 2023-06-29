'use strict';
let Models = require("../models");

const getLikes = (res) => {
    Models.Like.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(error=>{
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const createLike = (data, res) => {
    console.log(data);
    new Models.Like(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const updateLike = (req, res) => {
    console.log(req.body);
    Models.Like.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error.message})
    })
}

const deleteLike = (req, res) => {
    Models.Like.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false
    })
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
}

module.exports = {
    getLikes, createLike, updateLike, deleteLike
}