import React from "react"
import { Container, Stack } from "@mui/material"
import logo from "../../images/logo-dark.png"
import { Link } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"
import { ContainedButton } from "../../App"
import useFirebase from "../../hooks/useFirebase"

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault()
  }
  const { googleSignIn } = useFirebase()

  return (
    <div className="form">
      <Container maxWidth="lg">
        <form onSubmit={handleSignUp}>
          <img src={logo} alt="" />
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <ContainedButton type="submit">Sign Up</ContainedButton>
          <Link to="/login">Already have an account?</Link>
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

export default SignUp
