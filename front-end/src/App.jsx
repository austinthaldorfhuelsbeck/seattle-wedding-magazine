import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./home/Home"
import Submissions from "./submissions/Submissions"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="background-image"></div>
      <div className="main-wrapper">
        <NavBar />
        <section className="fullscreen d-flex flex-column">
          <div className="container py-5 px-4 px-lg-5 my-auto">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/submissions">
                <Submissions />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </section>
      </div>
    </Router>
  )
}
