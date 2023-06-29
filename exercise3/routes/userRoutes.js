const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get('/', (req, res)=>{
    controllers.userController.getUser(res);
})

router.post('/create', (req, res)=>{
    controllers.userController.createUser(req.body, res);
})

router.put('/:id', (req, res) => {
    controllers.userController.updateUser(req.body, res);
})

router.delete('/:id', (req, res) => {
    controllers.userController.deleteUser(req, res);
})

module.exports = router;