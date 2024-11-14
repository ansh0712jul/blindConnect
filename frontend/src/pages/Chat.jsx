import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, {
  useRef
} from "react";
import AppLayout from "../components/layout/AppLayout";
import { InputBox } from "../components/styles/StyledComponent";
import { sampleMessage } from "../constants/sample";
import Message from "../components/shared/Message";

const user={
  _id:"sdfsdfsdf",
  "name":"anonymous"
}
const Chat = () => {
  const Contref=useRef(null)
  return (
    <>
    <Stack ref={Contref}boxSizing={"border-box"}
    padding={"1rem"}
    spacing={"1rem"}
    bgcolor={"#E8E8E8"}
    height={"90%"}
    sx={{
      overflowX: "hidden",
      overflowY: "auto",
    }}
    >
      {
        sampleMessage.map((i) =>(
          <Message message={i} user={user} />
        ))
      }
    </Stack>
    <form style={{height:"10%"}}>
      <Stack  direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}>
      <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
            // onClick={handleFileOpen}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox
            placeholder="Type Message Here..."
            // value={message}
            // onChange={messageOnChange}
          />

          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              bgcolor: "black",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
    </form>
    {/* <FileMenu/> */}
    </>
  )
  
}

export default AppLayout()(Chat)