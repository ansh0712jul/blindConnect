import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import {dashboardData} from "../../constants/sample"
import AvtarCard from "../../components/shared/AvtarCard"

import { Avatar, Stack } from '@mui/material'


const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "table-header",
      width: 200,
    },
    {
        field: "avatar",
        headerName: "Avatar",
        headerClassName: "table-header",
        width: 150,
        renderCell: (params) => (
          <Avatar alt={params.row.name} src={params.row.avatar} />
        ),
      },
  
    {
      field: "email",
      headerName: "Email",
      headerClassName: "table-header",
      width: 300,
    },
  
    {
      field: "groupChat",
      headerName: "Group",
      headerClassName: "table-header",
      width: 100,
    },
    {
      field: "totalMembers",
      headerName: "Total Members",
      headerClassName: "table-header",
      width: 120,
    },
    
    {
      field: "totalMessages",
      headerName: "Total Messages",
      headerClassName: "table-header",
      width: 120,
    },
    {
      field: "creator",
      headerName: "Created By",
      headerClassName: "table-header",
      width: 250,
      renderCell: (params) => (
        <Stack direction="row" alignItems="center" spacing={"1rem"}>
          <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
          <span>{params.row.email}</span>
        </Stack>
      ),
    },
  ];
const ChatManagement = () => {
    const [rows, setRows]=useState([])
    useEffect(()=>{
        setRows(dashboardData.chats.map((i) =>({...i,id:i._id,avatar:i.avatar})))
       
    },[])
  return <AdminLayout>
    <Table heading={"all users"} columns={columns} rows={rows}/>
  </AdminLayout>
}


export default ChatManagement