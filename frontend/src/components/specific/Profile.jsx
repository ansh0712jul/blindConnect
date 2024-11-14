import React from 'react'

import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
// import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        // src={transformImage(user?.avatar?.url)}
        src='https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png'
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          // border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"full stack developer"} />
      <ProfileCard
        heading={"Username"}
        text={"tom&jerry"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Anonymous"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2023-11-04T18:30:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"#ffffff"}
    textAlign={"center"}
    fontSize={"1.2rem"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} fontSize={"1rem"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;