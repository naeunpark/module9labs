const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get('/', (req, res)=>{
    controllers.commentController.getComment(res);
})

router.post('/create', (req, res)=>{
    controllers.commentController.createComment(req.body, res);
})

router.put('/:id', (req, res) => {
    controllers.commentController.updateComment(req.body, res);
})

router.delete('/:id', (req, res) => {
    controllers.commentController.deleteComment(req, res);
})

module.exports = router;