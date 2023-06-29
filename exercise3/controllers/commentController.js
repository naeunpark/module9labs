"use strict";
const Models = require("../models");

const getComment = (res) => {
    Models.Comment.findAll({})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createComment = (data, res) => {
    Models.Comment.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateComment = (data, res) => {
    console.log(data);
    Models.Comment.update(data,{where: {id:data.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteComment = (data, res) => {
    Models.Comment.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

module.exports = {
    getComment, createComment, updateComment, deleteComment
}