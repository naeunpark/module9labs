const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get('/', (req, res)=>{
    controllers.likeController.getLike(res);
})

router.post('/create', (req, res)=>{
    controllers.likeController.createLike(req.body, res);
})

router.put('/:id', (req, res) => {
    controllers.likeController.updateLike(req.body, res);
})

router.delete('/:id', (req, res) => {
    controllers.likeController.deleteLike(req, res);
})

module.exports = router;