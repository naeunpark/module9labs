"use strict";
const Models = require("../models");

const getUser = (res) => {
    Models.User.findAll({})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const createUser = (data, res) => {
    Models.User.create(data)
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const updateUser = (data, res) => {
    console.log(data);
    Models.User.update(data,{where: {id:data.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteUser = (data, res) => {
    Models.User.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

module.exports = {
    getUser, createUser, updateUser, deleteUser
}