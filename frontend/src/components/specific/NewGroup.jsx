import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { sampleUsers } from '../../constants/sample';
import UserItem from '../shared/UserItem';

const NewGroup = () => {

  const groupName=useInputValidation("")
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

  const submitHandler=()=>{}
  const closeHandler=()=>{}

  return <Dialog open onClose={closeHandler} >
  <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
    <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>
    <TextField  label="group Name" value={groupName.value} onChange={groupName.changeHandler}/>
    <Typography variant='body1'>Members</Typography>
    <Stack>
    {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
    </Stack>
    <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            variant="outlined"
            color="error"
            size="large"
            // onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={submitHandler}
            // disabled={isLoadingNewGroup}
          >
            Create
          </Button>
        </Stack>
  </Stack>
</Dialog>
}

export default NewGroup