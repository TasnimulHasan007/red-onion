import React from "react"
import { Button, Container, Stack } from "@mui/material"
import logo from "../../images/logo-dark.png"
import { Link } from "react-router-dom"
import { styled } from "@mui/system"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"

const SignUp = () => {
  const SignUp = styled(Button)(() => ({
    color: "#fff",
    backgroundColor: "#F91944",
    "&:hover": {
      backgroundColor: "#db0630",
    },
  }))

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <div className="form">
      <Container maxWidth="lg">
        <form onSubmit={handleSignUp}>
          <img src={logo} alt="" />
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <SignUp type="submit">Sign Up</SignUp>
          <Link to="/login">Already have an account?</Link>
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

export default SignUp
