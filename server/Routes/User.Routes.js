const express = require("express");
const {addUser,loginUser} = require("../Controllers/User.controller")
const UserRoutes = express.Router();

UserRoutes.post("/adduser",addUser );
UserRoutes.post("/loginuser",loginUser );

module.exports = UserRoutes;
