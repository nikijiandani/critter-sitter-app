import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import './styles.css';
import Navbar from './Navbar.js'
import Home from './components/Home.js'
import Search from './components/Search.js'
import Profile from './components/Profile.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Contact from './components/Contact.js'
import Messages from './components/Messages.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      users: []
    }
  }
  

  componentDidMount() {
    fetch('http://localhost:8080/api/users')
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          users: res
        });
      })
    })
  }

  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/search/" component={Search} />
          <Route path="/profile/:id/contact" component={Contact} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/messages" component={Messages} />
        </div>
      </Router>
    );
  }
}

export default App;
