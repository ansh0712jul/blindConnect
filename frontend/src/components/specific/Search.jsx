import React, { useState } from 'react';
import { Dialog, Stack, DialogTitle, TextField, List, ListItem } from '@mui/material';
import { useInputValidation } from '6pp';
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sample';
import InputAdornment from '@mui/material/InputAdornment';

const Search = () => {
  const search = useInputValidation("");
  const addFriendHandler = (id) => {
    console.log(id);
  };

  const isLoadingSendFriendRequest = false;
  const [users, setUsers] = useState(sampleUsers);

  return (
    <Dialog open sx={{
      '& .MuiDialog-paper': {
        backgroundImage: "linear-gradient(rgb(110 104 204),rgb(226 208 203),rgb(158 134 175))", // Change this to your desired color

      },
    }}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle  textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label="Search"
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
