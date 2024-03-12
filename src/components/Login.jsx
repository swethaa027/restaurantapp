import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {

  return (
    <div>
        <br/><br /><br /><br /><br />
        <Typography fontFamily='fantasy' variant='h3' >Login</Typography>
        <br /><br />
        <TextField variant='outlined'  color='success' label="username"/>
        <br /><br />
        <TextField variant='outlined' color='success' label="password"/>
        <br /><br /><br />
        <Button variant='contained' color='inherit'>Submit</Button>&nbsp;
        <Button variant='contained' color='inherit'>Reset</Button>
    </div>
  )
}

export default Login