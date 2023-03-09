const express = require('express');
const router = express.Router();
 const {getUsers} = require('../controllers');


router.route('/').get();

router.post('/',(req,res)=>{
    res.status(200).json({
        success:true,
        data:'hereglech nemegdlee'
    })
});

module.exports = router

//MVC = model view controller