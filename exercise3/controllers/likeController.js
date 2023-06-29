"use strict";
const Models = require("../models");

const getLike = (res) => {
    Models.Like.findAll({})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createLike = (data, res) => {
    Models.Like.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateLike = (data, res) => {
    console.log(data);
    Models.Like.update(data,{where: {id:data.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteLike = (data, res) => {
    Models.Like.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

module.exports = {
    getLike, createLike, updateLike, deleteLike
}