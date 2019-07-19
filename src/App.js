import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

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
    const userList = this.state.users.map((user) => {
      return <li key={user.id}>Username: {user.name}</li>
    })
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
        <div>
          <img className='App-logo' alt="logo" src={ logo } />
          <h2>Welcome to critterSitter</h2>
          <ul>{userList}</ul>
        </div>
      </Router>
    );
  }
}

export default App;
