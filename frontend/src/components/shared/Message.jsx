import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
// import {motion} from "framer-motion"
import moment from 'moment';
import { fileformat } from '../../lib/features';
import Attatchment from './Attatchment';

    
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
        backgroundColor:sameSender? "#ea7070":"#B2BACC",
        color: sameSender?"white":"black",
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
       {
        attachments.length > 0 && attachments.map((attachment,index) => {
          const url=attachment.url
          const file= fileformat(url)
          return <Box key={index}>
            <a href={url} target='_blank' download={true} style={{
              color: "white",
            }}>
               {Attatchment(file, url)}
            </a>
          </Box>

        } )
       }
       <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  )
}

export default memo(Message)