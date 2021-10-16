import {
  ClickAwayListener,
  Container,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React, { useEffect, useRef, useState } from "react"
import logo from "../../images/logo-dark.png"
import "./Header.css"
import { Link } from "react-router-dom"
import { ContainedButton, StyledBadge, TextButton } from "../../App"
import useFirebase from "../../hooks/useFirebase"

const Header = () => {
  const { user, logOut } = useFirebase()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === "Escape") {
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const handleLogOut = () => {
    logOut()
    handleClose()
  }

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
            {user.email ? (
              <>
                <button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <img
                    src={user.photoURL}
                    alt={user.displayName.slice(0, 1)}
                    className="profile"
                  />
                </button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </>
            ) : (
              <>
                <Link to="/login">
                  <TextButton className="main-btn">Login</TextButton>
                </Link>
                <Link to="/register">
                  <ContainedButton className="main-btn">
                    Sign Up
                  </ContainedButton>
                </Link>
              </>
            )}
          </div>
        </Stack>
      </Container>
    </header>
  )
}

export default Header
