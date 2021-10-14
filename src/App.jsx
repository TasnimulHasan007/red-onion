import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SignUp from "./Pages/SignUp/SignUp"
import Home from "./Pages/Home/Home"
import LogIn from "./Pages/LogIn/LogIn"

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
