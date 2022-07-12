
import './App.css';
import Header from './components/navbar';
import PLIST from './components/plist';
import { Footer } from './components/footer';
import Home from './components/Home';
import Detail from './components/Details';
// import Avatar from './components/Display/Avatar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Avatar from './components/Display/Avatar';
import CaptainAmerica from './components/Display/CaptainAmerica';
import Logout from './components/auth/Logout';
import Admin from './components/auth/Admin';
import Login1 from './components/auth/Login1';







function App() {

//    const movlist=[
//    {
//       name : "Avatar",
//       rating: 8,
//       duration: 160,


//    },
//    {
//     name : "Titanic",
//     rating: 9,
//     duration: 180,


//  }

//    ]




  return (
    <div className="App">
      
    
    <Router>
    <Switch>
          <Route path="/home">
          <Header/>
            <Home/>
          </Route>
          <Route path="/login1">
            <Login1/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/detail">
          <Header/>
            <Detail />
            </Route>
          <Route path="/login">
          <Header/>
            <Login />
          </Route>
          <Route path="/avatar">
          <Header/>
            <Avatar />
            </Route>
          <Route path="/captainAmerica">
          <Header/>
            <CaptainAmerica />
          </Route>
          <Route path="/">
          <Header/>
            <Home />
          
          </Route>
        </Switch>
    </Router>
    
    </div>
  );
}

export default App;
