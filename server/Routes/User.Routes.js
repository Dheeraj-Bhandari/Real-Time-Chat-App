const express = require("express");
const {addUser} = require("../Controllers/User.controller")
const UserRoutes = express.Router();

UserRoutes.post("/adduser",addUser );


module.exports = UserRoutes;
