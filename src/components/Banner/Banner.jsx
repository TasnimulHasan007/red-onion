import { Button, Container } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"
import "./Banner.css"

const SearchButton = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: "#F91944",
  "&:hover": {
    backgroundColor: "#db0630",
  },
}))

const Banner = () => {
  return (
    <div className="banner">
      <Container maxWidth="lg">
        <h2>Best food wating for your belly</h2>
        <div className="search-container">
          <input type="text" placeholder="Search food items" />
          <SearchButton className="main-btn">Search</SearchButton>
        </div>
      </Container>
    </div>
  )
}

export default Banner
