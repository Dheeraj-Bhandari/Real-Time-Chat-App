const express = require("express");
const cors = require("cors");
const UserRoutes = require("./Routes/User.Routes");
const { connection } = require("./database/db");
require('dotenv').config()
const app = express();

connection();
app.use(cors());
app.use(express.json({extended : true}));
app.use(express.urlencoded({extended:true}));

app.use("/", (req, res )=>{
    res.send("Chat backend Server is Running")
})
app.use("/User", UserRoutes);



const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=>{
    console.log(`backend server listing at http://localhost:${PORT}` )
});

