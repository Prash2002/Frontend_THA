import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import LoginContext from './context/LoginContext';

function App() {
  return (
    <div className="App">
      <Router>
        
          <LoginContext>
        <Nav />
        
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
        </Switch>
          </LoginContext>          
      </Router>
    </div>
  );
}

export default App;
