const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get('/', (req, res)=>{
    controllers.postController.getPost(res);
})

router.post('/create', (req, res)=>{
    controllers.postController.createPost(req.body, res);
})

router.put('/:id', (req, res) => {
    controllers.postController.updatePost(req.body, res);
})

router.delete('/:id', (req, res) => {
    controllers.postController.deletePost(req, res);
})

module.exports = router;