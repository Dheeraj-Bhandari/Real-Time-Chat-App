import React from 'react'
import {TextField, Box, Button} from "@mui/material"
import { useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import { loginUser } from '../url';

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const HandleLogin=(e)=>{
    e.preventDefault();
    
   const data =  {email, password};
   console.log(data)
   try {
    axios.post(loginUser, data).then((res)=>console.log(res.data)).catch((err)=>console.log(err.response.data));
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <>
    <Box>
      <h1>Login</h1>
    
      <TextField id="outlined-basic" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required variant="outlined" /> <br/><br/>
      <TextField id="outlined-basic" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  required variant="outlined" /><br /><br />
      <Box sx={{mx  :10}}>
      <Button variant="contained" onClick={HandleLogin}>LOGIN</Button>
      <Link to="/signup">
      <Button variant="contained" >Singup</Button>

      </Link>
      </Box>
    </Box>
    </>
  )
}

export default Login;