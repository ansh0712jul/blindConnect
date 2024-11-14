import React, { useState } from 'react'
import {Container, Paper, Typography, TextField, Button, Stack} from "@mui/material"
import {useInputValidation} from "6pp"
import {usernameValidator, emialValidator} from "../utils/validators"

const Login = () => {
  const [isLogin, setIslogin] = useState(true)
  const toggleLogin = () => setIslogin((prev) => !prev)

  const Email = useInputValidation("", emialValidator)
  const username = useInputValidation("", usernameValidator)
  const password = useInputValidation("")
  const bio = useInputValidation("")

  const handleLogin = (e) => {
    e.preventDefault()
  }
  
  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <div 
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
            isLogin ? (
              <>
                <Typography variant="h5">Login</Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onSubmit={handleLogin}
                >
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                  />

                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
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

                  <Typography textAlign={"center"} m={"1rem"}>
                    OR
                  </Typography>

                  <Button
                    fullWidth
                    variant="text"
                    onClick={toggleLogin}
                  >
                    Sign Up Instead
                  </Button>
                </form>
              </>            
            ) : (
              <>
                <Typography variant="h5">Sign up</Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                  onSubmit={handleSignUp}
                >
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    placeholder='xyz@gla.ac.in'
                    value={Email.value}
                    onChange={Email.changeHandler}
                  />
                  {Email.error && (
                    <Typography color='error' variant='caption'>
                      {Email.error}
                    </Typography>
                  )}
                  <TextField
                    required
                    fullWidth
                    label="About"
                    margin="normal"
                    variant="outlined"
                    placeholder="About yourself"
                    value={bio.value}
                    onChange={bio.changeHandler}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    placeholder='tom&jerry'
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  {username.error && (
                    <Typography color='error' variant='caption'>
                      {username.error}
                    </Typography>
                  )}
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
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
                    Sign Up
                  </Button>

                  <Typography textAlign={"center"} m={"1rem"}>
                    OR
                  </Typography>

                  <Button
                    fullWidth
                    variant="text"
                    onClick={toggleLogin}
                  >
                    Login Instead
                  </Button>
                </form>
              </>
            )
          }
        </Paper>
      </Container>
    </div>
  )
}

export default Login
