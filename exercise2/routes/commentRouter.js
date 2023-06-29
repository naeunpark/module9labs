let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res)=>{
    Controllers.commnetController.getComments(res);
})

router.post('/create', (req,res)=>{
    Controllers.commnetController.createComment(req.body, res)
})

router.put('/:id', (req, res)=>{
    Controllers.commnetController.updateComment(req, res)
})

router.delete('/:id', (req, res)=>{
    Controllers.commnetController.deleteComment(req, res)
})

module.exports = router;