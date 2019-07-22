import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles.css';
import Mynavbar from './Mynavbar.js'
import Home from './components/Home.js'
import Search from './components/Search.js'
import Profile from './components/Profile.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Contact from './components/Contact.js'
import Messages from './components/Messages.js'
import Error from './components/Error.js'

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
        <Mynavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/" component={Search} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="/profile/:id/contact" component={Contact} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/messages" component={Messages} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
