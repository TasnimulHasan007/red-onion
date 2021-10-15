import { Container, Grid, Stack } from "@mui/material"
import TrainIcon from "@mui/icons-material/Train"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import React from "react"
import "./Features.css"
import feature1 from "../../images/feature-1.png"
import feature2 from "../../images/feature-2.png"
import feature3 from "../../images/feature-3.png"

const Features = () => {
  return (
    <Container maxWidth="lg">
      <div className="intro">
        <h2>Why you choose us</h2>
        <p>
          Barton waited twenty always repaire in within we do. An delighted
          offending curiously my is dashwoods at. Boy prosperous increasing
          surrounded.
        </p>
      </div>
      <Grid container spacing={3} className="features-container">
        <Grid item lg={4} md={6} s={12} className="feature">
          <img src={feature1} alt="" />
          <Stack direction="row" alignItems="center" className="feature-title">
            <span className="feature-icon">
              <TrainIcon></TrainIcon>
            </span>
            <p>Fast Delivery</p>
          </Stack>
          <p>
            Keep your systems in sync with automated web hook based
            notifications each time link is paid and how we dream about our
            future
          </p>
          <button>
            See more <DoubleArrowIcon></DoubleArrowIcon>
          </button>
        </Grid>
        <Grid item lg={4} md={6} s={12} className="feature">
          <img src={feature2} alt="" />
          <Stack direction="row" alignItems="center" className="feature-title">
            <span className="feature-icon">
              <NotificationsNoneIcon></NotificationsNoneIcon>
            </span>
            <p>A good auto responder</p>
          </Stack>
          <p>
            Keep your systems in sync with automated web hook based
            notifications each time link is paid and how we dream about our
            future
          </p>
          <button>
            See more <DoubleArrowIcon></DoubleArrowIcon>
          </button>
        </Grid>
        <Grid item lg={4} md={6} s={12} className="feature">
          <img src={feature3} alt="" />
          <Stack direction="row" alignItems="center" className="feature-title">
            <span className="feature-icon">
              <LocalShippingIcon></LocalShippingIcon>
            </span>
            <p>Home delivery</p>
          </Stack>
          <p>
            Keep your systems in sync with automated web hook based
            notifications each time link is paid and how we dream about our
            future
          </p>
          <button>
            See more <DoubleArrowIcon></DoubleArrowIcon>
          </button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Features
