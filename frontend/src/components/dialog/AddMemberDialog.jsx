import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sample'
import UserItem from '../shared/UserItem'

const AddMemberDialog = ({addMember,isLoadingAddMember,chatId}) => {
    
    const[members,setmembers]=useState(sampleUsers)
    const[selectedMembers,setSelectedMembers]=useState([])
    const selectMemberHandler = (id) => {
    
        setSelectedMembers((prev) =>
        prev.includes(id)
            ? prev.filter((currElement) => currElement !== id)
            : [...prev, id]
        );
    };
  console.log(selectedMembers)

    const addMemberSumbithandler=()=>{
        closeHandler()
    }
    const closeHandler=()=>{
        selectMemberHandler([])
        setmembers([])
    }
    
  return <Dialog open onClose={closeHandler} >
    <Stack spacing={"1rem"} width={"25rem"} p={"2rem"}>
        <DialogTitle variant='h4' textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}  >
        {
           members.length > 0 ? ( members.map( i => (
                <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}/>
            ))
           ):(
            <Typography textAlign={"center"} >No friend</Typography>
            )
        
        }
    </Stack >
    <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Button variant='contained' disabled={isLoadingAddMember} onClick={addMemberSumbithandler}>Submit CHanges</Button>
        <Button  color='error' onClick={closeHandler}>Cancel</Button>
    </Stack>
    
    </Stack>
   
  </Dialog>
}

export default AddMemberDialog