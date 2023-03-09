const express = require('express');
const router = express.Router();
 const {getUsers,createUser,editUser,deletedUser} = require('../controllers');


router.route('/')
.get(getUsers)
.post(createUser)
.put(editUser)
.delete(deletedUser);



module.exports = router

//MVC = model view controller