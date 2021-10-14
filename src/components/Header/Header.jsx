import { Button, Container, IconButton, Stack } from "@mui/material"
import Badge from "@mui/material/Badge"
import { styled } from "@mui/material/styles"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React from "react"
import logo from "../../images/logo-dark.png"
import "./Header.css"
import { Link } from "react-router-dom"

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    background: "#F91944",
    color: "#fff",
  },
}))

const LoginButton = styled(Button)(() => ({
  color: "#F91944",
  "&:hover": {
    backgroundColor: "#f9194415",
  },
}))
const SignUpButton = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: "#F91944",
  "&:hover": {
    backgroundColor: "#db0630",
  },
}))

const Header = () => {
  return (
    <header>
      <Container maxWidth="lg" className="header">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <div className="brand">
            <Link to="/">
              <img src={logo} alt="Red Onion" />
            </Link>
          </div>
          <div className="nav">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={1}>
                <ShoppingCartIcon style={{ color: "#000" }} />
              </StyledBadge>
            </IconButton>
            <Link to="/login">
              <LoginButton className="main-btn">Login</LoginButton>
            </Link>
            <Link to="/register">
              <SignUpButton className="main-btn">Sign Up</SignUpButton>
            </Link>
          </div>
        </Stack>
      </Container>
    </header>
  )
}

export default Header
