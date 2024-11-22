import React from 'react'
import {Container, Paper, Typography, TextField, Button, Stack} from "@mui/material"

const AdminLogin = () => {
    const admin="Ansh Agrawal"


    // handleSubmit
    const  SubmitHandler = (e) => {
        e.PreventDefault()
    }

  return <div 
  style={{
    background: "#E8E8E8",
  }}
>
  <Container component={"main"}
    maxWidth="xs"
    sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Paper
      elevation={12}
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {
          (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={SubmitHandler}
            >
              <TextField
                required
                fullWidth
                label="Admin"
                margin="normal"
                variant="outlined"
                
                value={admin}
                // onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Secret key"
                type="password"
                margin="normal"
                variant="outlined"
                // value={password.value}
                // onChange={password.changeHandler}
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </form>
          </>            
        ) 
      }
    </Paper>
  </Container>
</div>
}

export default AdminLogin