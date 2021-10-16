import { Container } from "@mui/material"
import React from "react"
import { ContainedButton } from "../../App"
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner">
      <Container maxWidth="lg">
        <h2>Best food wating for your belly</h2>
        <div className="search-container">
          <input type="text" placeholder="Search food items" />
          <ContainedButton className="main-btn">Search</ContainedButton>
        </div>
      </Container>
    </div>
  )
}

export default Banner
