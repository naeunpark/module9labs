"use strict";

const getFruits = (req, res) => {
    let limitNum = 10;
    let pageNum = req.query.page;

    fetch('https://fruityvice.com/api/fruit/all')
    .then((response)=> response.json())
    .then((json) => {
        if(pageNum == null){
            res.send({result: 200, data: json})
        }else{
            let startNum = limitNum * (pageNum-1);
            let endNum = limitNum * pageNum;
            res.send({result: 200, data: json.slice(startNum,endNum)})
        }
    })
    .catch(error => {throw error})
}
const getFruitsFamily = (req, res) => {
    let family = req.params.family;

    fetch(`https://fruityvice.com/api/fruit/family/${family}`)
    .then((response)=> response.json())
    .then((json) => {
        res.send({result: 200, data: json})
    })
}

module.exports = {
    getFruits, getFruitsFamily
}