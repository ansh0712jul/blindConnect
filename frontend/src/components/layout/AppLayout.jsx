import React, { useState } from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from "@mui/material";

import ChatList from '../specific/ChatList';
import { sampleChats } from '../../constants/sample';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

const AppLayout = () => WrappedComponent => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const [isProfileVisible, setIsProfileVisible] = useState(false);

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete chat", _id);
    };

    const toggleProfile = () => {
      setIsProfileVisible(prev => !prev);
    };

    return (
      <>
        <Title />
        <Header toggleProfile={toggleProfile} />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid item sm={4} md={3} 
              sx={{
                display: { xs: "none", sm: "block" },
              }} height={"100%"} >
            <ChatList chats={sampleChats} chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={6}>
            <WrappedComponent {...props} />
          </Grid>

          {/* Profile Section */}
          {isProfileVisible && (
            <Grid  
              item
              md={4}
              lg={3}
              height={"100%"}
              sx={{
                display: { xs: "none", md: "block" },
                padding: "2rem",
                bgcolor: "#1F2937",
              }} 
            >
              <Profile />
            </Grid>
          )}
        </Grid>
        
        <div>footer</div>
      </>
    );
  };
};

export default AppLayout;
