import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

const Navbar = () => {
  return (
    <div>
        <Box sx={{flexGrow:1}}>
            <AppBar component={"nav"} sx={{bgcolor:"black"}}>
                <Toolbar>
                    <Typography sx={{flexGrow:1}} align='left'  fontFamily='fantasy' variant='h6'>
                      <RestaurantRoundedIcon/>
                      &nbsp;kapilavastu</Typography>
                    <Button><Link to='Login' style={{color:'white'}}>Login</Link></Button>
                    <Button><Link to='Signup' style={{color:'white'}}>Sign-Up</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>

  )
}

export default Navbar