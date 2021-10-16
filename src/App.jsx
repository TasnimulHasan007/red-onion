import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SignUp from "./Pages/SignUp/SignUp"
import Home from "./Pages/Home/Home"
import LogIn from "./Pages/LogIn/LogIn"
import { styled } from "@mui/system"
import { Badge, Button } from "@mui/material"

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    background: "#F91944",
    color: "#fff",
  },
}))

export const TextButton = styled(Button)(() => ({
  color: "#F91944",
  "&:hover": {
    backgroundColor: "#f9194415",
  },
}))
export const ContainedButton = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: "#F91944",
  "&:hover": {
    backgroundColor: "#db0630",
  },
}))

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
