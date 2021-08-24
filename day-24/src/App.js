import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import LoginContext from "./context/LoginContext";

function App() {
  return (
    <div className="App">
      <Router>
        <LoginContext>
          <Nav />

          <Switch>
            <Route
              exact
              path="/Frontend_THA/day-24/build/"
              component={Home}
            ></Route>
            <Route
              exact
              path="/Frontend_THA/day-24/build/about"
              component={About}
            ></Route>
            <Route
              exact
              path="/Frontend_THA/day-24/build/profile"
              component={Profile}
            ></Route>
            <Route
              exact
              path="/Frontend_THA/day-24/build/dashboard"
              component={Dashboard}
            ></Route>
          </Switch>
        </LoginContext>
      </Router>
    </div>
  );
}

export default App;
