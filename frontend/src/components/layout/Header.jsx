import React, { lazy, Suspense, useState } from 'react'
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Notifications as NotiIcon,
  Logout as LogoutIcon,
  AccountCircle as ProfileIcon
  } from "@mui/icons-material"
import {
   AppBar, 
   Backdrop, 
   Box, 
   IconButton, 
   Toolbar, 
   Tooltip, 
   Typography } from '@mui/material'
import {  useNavigate } from 'react-router-dom'

const Search=lazy(()=>import("../specific/Search"))
const Notification=lazy(()=>import("../specific/Notification"))
const NewGroup=lazy(()=>import("../specific/NewGroup"))


const Header = ({ toggleProfile }) => {

  const [isMobile,setIsMobile]=useState(false)
  const [isSearch,setIsSearch]=useState(false)
  const [isNewgroup,setIsNewGroup]=useState(false)
  const [isNotification,setIsNotification]=useState(false)


  const navigate=useNavigate()

  const handleMobile=()=>{
    setIsMobile((prev) =>!prev)
  }

  const OpenSearchDialog=()=>{
    setIsSearch((prev) =>!prev)
  }

  const openNewgroup=()=>{
    setIsNewGroup((prev) =>!prev)
  }
  
  const navigateToGroup=()=>{
    navigate("/groups")

  }
  const openNotification=()=>{
    setIsNotification((prev) =>!prev)
  }
  const logoutHandler=()=>{
    console.log("logout succesfully")  
  }
  // const openProfileSection=()=>{
  //   console.log("open profile section")
  // }
  

  
  return (
    
    <>
    <Box sx={{flexGrow:1}} height={"4rem"}>
      <AppBar position='static'sx={{
        bgcolor:"black"//red
      }}>
        <Toolbar>
          <Typography variant='h5'
          sx={{ 
            display: { xs: "none", sm: "block" },
            color: "ffffff"  // Set font color to black
          }}>
            blindConnect
          </Typography>
          <Box sx={{display:{xs:"block",sm:"none"}}}
          >
          <IconButton color='inherit' onClick={handleMobile}>
            <MenuIcon/>
          </IconButton>
          </Box>
          <Box sx={{
            flexGrow:1
          }}/>
          <Box>
         <Tooltip title="Search">
         <IconButton color='inherit' size='large' onClick={OpenSearchDialog}>
            <SearchIcon/>
          </IconButton>
         </Tooltip>

          <Tooltip title="New Group">
            <IconButton color='inherit' size='large' onClick={openNewgroup}>
            <AddIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Manage Group">
            <IconButton color='inherit' size='large' onClick={navigateToGroup}>
            <GroupIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton color='inherit' size='large' onClick={openNotification}>
            <NotiIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton color='inherit' size='large' onClick={logoutHandler}>
            <LogoutIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton color='inherit' size='large' onClick={ toggleProfile }>
            <ProfileIcon/>
            </IconButton>
          </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {
      isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <Search/>
        </Suspense>

      )
    }
      {
      isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <Notification/>
        </Suspense>

      )
    }
    {
      isNewgroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroup/>
        </Suspense>

      )
    }
    </>
  )
}

export default Header