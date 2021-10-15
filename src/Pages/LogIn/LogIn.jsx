import { Button, Container, Stack } from "@mui/material"
import logo from "../../images/logo-dark.png"
import React from "react"
import { Link } from "react-router-dom"
import { styled } from "@mui/system"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"

const LogIn = () => {
  const LogIn = styled(Button)(() => ({
    color: "#fff",
    backgroundColor: "#F91944",
    "&:hover": {
      backgroundColor: "#db0630",
    },
  }))

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className="form">
      <Container maxWidth="lg">
        <form onSubmit={handleLogin}>
          <img src={logo} alt="" />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <LogIn type="submit">Log In</LogIn>
          <Link to="/register">Create Account</Link>
          <hr />
          <Stack direction="row" justifyContent="space-around">
            <FacebookIcon />
            <GoogleIcon />
            <GitHubIcon />
          </Stack>
        </form>
      </Container>
    </div>
  )
}

export default LogIn
