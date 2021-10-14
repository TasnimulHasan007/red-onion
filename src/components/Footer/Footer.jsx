import React from "react"
import "./Footer.css"
import { Container, Grid, Stack } from "@mui/material"
import logo from "../../images/logo-light.png"

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <img src={logo} alt="" />
          </Grid>
          <Grid item md={3} xs={6}>
            <p className="footer-link">About online food</p>
            <p className="footer-link">Read our blog</p>
            <p className="footer-link">Sign up to deliver</p>
            <p className="footer-link">Add your restaurant</p>
          </Grid>
          <Grid item md={3} xs={6}>
            <p className="footer-link">Get help</p>
            <p className="footer-link">Read FAQs</p>
            <p className="footer-link">View all cities</p>
            <p className="footer-link">Reastaurants near me</p>
          </Grid>
          <Grid item md={8} sm={6} xs={12}>
            <p className="copyright">Copyrigt &copy; 2020 Online food</p>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <p className="footer-link">Privacy Policy</p>
              <p className="footer-link">Terms of Use</p>
              <p className="footer-link">Pricing</p>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
