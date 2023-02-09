const express = require('express');
const router = express.Router();
const {getData} = require('../controler')

router.get('/', async(req,res)=>{
    let data = await getData();
    res.send(data)
})

module.exports = router