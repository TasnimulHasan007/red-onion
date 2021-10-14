import { Container, Stack } from "@mui/material"
import React from "react"
import "./Features.css"
import feature1 from "../../images/feature-1.png"
// import feature2 from "../../images/feature-2.png"
// import feature3 from "../../images/feature-3.png"

const Features = () => {
  return (
    <Container maxWidth="lg">
      <Stack direction="row">
        <div className="feature">
          <div
            className="feature-img"
            style={{
              background: `url(${feature1})`,
            }}
          ></div>
        </div>
      </Stack>
    </Container>
  )
}

export default Features
