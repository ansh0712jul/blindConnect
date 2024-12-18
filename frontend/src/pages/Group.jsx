import { Add, Delete, Done, Edit, KeyboardBackspace, Menu } from '@mui/icons-material'
import { Backdrop, Box, Button, Drawer, Grid, IconButton,  Stack,  TextField,  Tooltip, Typography } from '@mui/material'
import React, { useState,memo, useEffect, Suspense, lazy } from 'react'
import {  useNavigate,useSearchParams } from 'react-router-dom'
import {Link} from "../components/styles/StyledComponent"
import AvtarCard from '../components/shared/AvtarCard'
import { sampleChats, sampleUsers } from '../constants/sample'
import ConfirmDeleteDialog from '../components/dialog/ConfirmDeleteDialog'
import AddMemberDialog from '../components/dialog/AddMemberDialog'
import UserItem from '../components/shared/UserItem'

const isAddMember=false;
const Group = () => {
 
  const [isMobileMenuOpen,setMobileMenuOpen]=useState(false)

  const navigate=useNavigate()
  const navigateBack= () => { navigate("/") }
  const chatId=useSearchParams()[0].get("group")
  console.log(chatId)

  const handleMoblie = () => { setMobileMenuOpen((prev) => !prev) } 
  const handleMobileClose = () =>  setMobileMenuOpen(false) 
 const [isEdit,setIsetEdit]=useState(false)
 const [confirmDeleteDialog,setConfirmDeleteDialog]=useState(false)

 const [groupName,setGroupName]=useState("")
 const [groupNameUpdatedValue,setGroupNameUpdatedValue]=useState("")

 const openAddMemberHandler=()=>{
   console.log("add member")
 }
 const openConfirmDeleteHandler=()=>{
  setConfirmDeleteDialog(true)
   console.log("delete group")
   
 }

const closeConfirmDeleteHandler=()=>{
  setConfirmDeleteDialog(false)
}
  const updateGroupName=()=>{
    setIsetEdit(false)
    console.log(groupNameUpdatedValue)
  }  

  const deleteHandler=()=>{
    console.log("delete handler")
  }

  const removeMemberHandler=(id)=>{
    console.log(`remove member : ${id}`)
  }

  useEffect(() => {
    if(chatId){
      setGroupName(`Group Name ${chatId}`)
      setGroupNameUpdatedValue(`Group Name ${chatId}`)
    }
//  reseting the values
    return () => {
      setGroupName("")
      setGroupNameUpdatedValue("")
      setIsetEdit(false)
    }

  },[chatId])
  

  const GroupName = <Stack direction={"row"}
  alignItems={"center"}
  justifyContent={"center"}
  spacing={"1rem"}
  padding={"3rem"}>
    {
      isEdit? <> <TextField value={groupNameUpdatedValue} onChange={(e)=>setGroupNameUpdatedValue(e.target.value)}/>
      <IconButton onClick={updateGroupName}> <Done/>
      </IconButton>
      </> :
      <>
      <Typography variant="h3">{groupName}</Typography>
      <IconButton onClick={() => setIsetEdit(true)}><Edit/></IconButton>
        </>
    }

  </Stack>

  return <Grid container height={"100vh"}>
    <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        
        
      >
       <GroupList myGroups={sampleChats} chatId={chatId}/>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      > 
      {/* // backspace button  */}
      <Tooltip title="back">
        <IconButton  sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "black",
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}>
          <KeyboardBackspace/>
        </IconButton >
      </Tooltip>
     {/* // menu button   */}
      <Box sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}>
          <IconButton onClick={handleMoblie} >
          <Menu/>
        </IconButton>
        </Box>
        {
          groupName && (
            <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
             {
               sampleUsers.map(i => (
                <UserItem user={i} key={i._id} isAdded styling={{
                  boxShadow: "0 0 0.5rem  rgba(0,0,0,0.2)",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                }}
                handler={removeMemberHandler}
                />))
             }
            </Stack>
            {/*  button  */}
            <Stack direction={{
                xs: "column-reverse",
                sm: "row",
              }}
              spacing={"1rem"}
              p={{
                xs: "0",
                sm: "1rem",
                md: "1rem 4rem",
              }}>
              <Button variant='outlined' color='error' startIcon={<Delete/>} onClick={openConfirmDeleteHandler}> Delete Group</Button>
              <Button variant='contained' startIcon={<Add/>} onClick={openAddMemberHandler}>Add Member</Button>
            </Stack>
            </>
          )}

        </Grid>
        {
          isAddMember && <Suspense fallback={<Backdrop open />}>
            <AddMemberDialog/>
          </Suspense>
        }
        {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}


        <Drawer sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          
        }} open={isMobileMenuOpen} onClose={handleMobileClose}> 
            <GroupList  w={"50vw"} myGroups={sampleChats} chatId={chatId}/>
          </Drawer>

  </Grid>
  

}

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack
    width={w}
    sx={{
     bgcolor:"#FFE4C4", 
      height: "100vh",
      overflow: "auto",
      
      
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem  group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} color="white" padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack 
           direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvtarCard avatar={avatar} />
        <Typography color="black">{name} </Typography>
      </Stack>
    </Link>
  );
});
export default Group