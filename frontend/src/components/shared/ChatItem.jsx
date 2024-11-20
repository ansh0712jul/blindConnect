import React from 'react'
import { Link } from '../styles/StyledComponent'
import { Stack,Typography,Box } from '@mui/material'
import AvtarCard from './AvtarCard'


const ChatItem = (
    {
        avatar=[],
        name,
        _id,
        groupChat=false,
        sameSender,
        isOnline=false,
        newMessageAlert,
        index=0,
        handleDeleteChat


    }) => {
  return <Link to={`/chat/${_id}`} 
  sx={{
    padding: "0",
  }}
  onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)} >
    <div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "#ea7070" : "#0E1526",
          color:"white",
          position: "relative",
          padding: "1rem",
          borderRadius: "0.rem",
          marginBottom: "0.2rem",
          border: "2px solid white ",
          
       
          
        }}
      >
        <AvtarCard avatar={avatar} />

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#A5F2D9",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
              

            }}
          />
        )}
      </div>
  </Link>
}

export default ChatItem