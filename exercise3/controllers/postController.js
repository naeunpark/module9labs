"use strict";
const Models = require("../models");

const getPost = (res) => {
    Models.Post.findAll({})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createPost = (data, res) => {
    Models.Post.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updatePost = (data, res) => {
    console.log(data);
    Models.Post.update(data,{where: {id:data.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deletePost = (data, res) => {
    Models.Post.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

module.exports = {
    getPost, createPost, updatePost, deletePost
}