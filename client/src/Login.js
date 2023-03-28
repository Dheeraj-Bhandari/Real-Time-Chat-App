import React from 'react'
import {TextField, Box, Button} from "@mui/material"
import { useState } from 'react'
function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const HandleLogin=(e)=>{
   
    e.preventDefault();
    console.log(email);
    console.log(password)
  }

  return (
    <>
    <Box>
      <h1>Login</h1>
    
      <TextField id="outlined-basic" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required variant="outlined" /> <br/><br/>
      <TextField id="outlined-basic" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  required variant="outlined" /><br /><br />
      <Button variant="contained" onClick={HandleLogin}>LOGIN</Button>

    
    </Box>
    </>
  )
}

export default Login