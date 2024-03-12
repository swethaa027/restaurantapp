import React from 'react'
import { Button, TextField, Typography, } from '@mui/material'
// import axios from 'axios';
const Signup = () => {
//     var[data,setData]=useState();
//     const inputHandler =(e)=>{
//         setData({...data,[e.target.name]:e.target.value})
//             console.log(data);
//     } 
//     const submit=()=>{
//       axios.post("http://localhost:3000/Signup",{
//         Firstname:data.Firstname,
//         Lastname:data.Lastname,
//         Email:data.Email,
//         Mobileno:data.Mobileno,
//         Password:data.Password,
//         Confirmpassword:data.Confirmpassword

//       })
//       .then(()=>{
    //     alert("new entry created successfully");
    //   })
    //   .catch(()=>{
    //     alert("error saving data");
      
    //   });
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography fontFamily='fantasy' variant='h3'  >Signup</Typography>
        <br /><br />
        <TextField variant='outlined' color='success' label='Firstname' name='Firstname' />&nbsp;&nbsp;
        <TextField variant='outlined' color='success' label='Lastname' name='Lastname' />
        <br /><br />
        <TextField variant='outlined' color='success' label='Email' name='Email' />&nbsp;
        <TextField variant='outlined' color='success' label='Mobile no' name='Mobileno' />
        <br /><br />
        <TextField variant='outlined' color='success' label='Password' name='Password' />&nbsp;
        <TextField variant='outlined' color='success' label='Confirm password' name='Confirmpassword' />
        <br /><br />
        <Button variant='contained' color='inherit' >Submit</Button>&nbsp;
        <Button variant='contained' color='inherit'>Reset</Button>
    </div>
  )
//   }
}

export default Signup