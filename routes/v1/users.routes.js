const express = require('express');
const usersController = require("../../controllers/users.controller");
const router = express.Router();


router.route('/')

.get(
    
    usersController.getAllUsers

)
.post(

    usersController.saveAUser

)
.patch(

    usersController.updateAllUser
    
)

router

.route('/:id')

.patch(usersController.updateUser)

.delete(usersController.deleteUser)

router

.route('/:name')

.get(usersController.getUserDetail)

module.exports = router;
