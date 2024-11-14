import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'


const Home = () => {
  return <Box bgcolor={"#E8E8E8"} height={"100%"}>
    <Typography variant='h5 textAlign="center' p={"2rem"}>
      Select a friend to chat
      </Typography>
  </Box>
}

export default AppLayout()(Home)