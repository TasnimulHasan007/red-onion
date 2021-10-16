import { Container, Stack } from "@mui/material"
import logo from "../../images/logo-dark.png"
import React from "react"
import { Link } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"
import useFirebase from "../../hooks/useFirebase"
import { ContainedButton } from "../../App"

const LogIn = () => {
  const handleLogin = (e) => {
    e.preventDefault()
  }

  const { googleSignIn } = useFirebase()

  return (
    <div className="form">
      <Container maxWidth="lg">
        <form onSubmit={handleLogin}>
          <img src={logo} alt="" />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <ContainedButton type="submit">Log In</ContainedButton>
          <Link to="/register">Create Account</Link>
          <hr />
          <Stack direction="row" justifyContent="space-around">
            <FacebookIcon />
            <GoogleIcon onClick={googleSignIn} />
            <GitHubIcon />
          </Stack>
        </form>
      </Container>
    </div>
  )
}

export default LogIn
