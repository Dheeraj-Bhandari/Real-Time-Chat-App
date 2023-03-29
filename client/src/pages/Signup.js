import React from 'react'
import {TextField, Box, Button} from "@mui/material"
import { useState } from 'react';
import axios from "axios";
import { addUser } from '../url';
function Signup () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const HandleSignup=(e)=>{
   
    e.preventDefault();
    
    try {
      
      const data = {name, email, password};

      axios.post(addUser, data).then((res)=>console.log(res.data)).catch((res)=>console.log(res));
    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <>
    <Box>
      <h1>Signup</h1>
      <TextField id="outlined-basic" label="Email" value={name} onChange={(e)=>setName(e.target.value)} type="name" required variant="outlined" /> <br/><br/>
      <TextField id="outlined-basic" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required variant="outlined" /> <br/><br/>
      <TextField id="outlined-basic" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  required variant="outlined" /><br /><br />
      <Button variant="contained" onClick={HandleSignup}>Signup</Button>

    
    </Box>
    </>
  )
}

export default Signup;