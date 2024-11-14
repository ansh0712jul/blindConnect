import { Typography } from '@mui/material';
import React, { memo } from 'react'
// import {motion} from "framer-motion"
import moment from 'moment';

    
const Message = ({message,user}) => {
    const {sender, content,attachments=[],createdAt}=message
    const sameSender = sender?._id === user?._id;
    const timeAgo = moment(createdAt).fromNow() 
  return (
    <div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
        {!sameSender && (
        <Typography color="#2694ab" fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
       {content && <Typography>{content}</Typography>}


       <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  )
}

export default memo(Message)