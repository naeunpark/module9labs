const express = require("express");
const router = express.Router();
const fruitControllers = require('../controllers/fruitController');

router.get("/", (req, res)=>{
    fruitControllers.getFruits(req, res);
});

router.get("/:family",(req, res)=>{
    fruitControllers.getFruitsFamily(req, res);
});

module.exports = router;