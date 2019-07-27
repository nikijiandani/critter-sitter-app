import React, { Component } from 'react';
import Map from './Map'
import ProfileList from './ProfileList'
import './styles/search.css'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      distance: 100,
      city: "Toronto",
      profiles: [],
      role: 1
    }
  }

  handleChange = event => {
    this.setState({
      distance: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let distance;
    if (this.state.distance !== 0) {
      distance = this.state.distance * 1000;
    }
    let query = "";
    if(localStorage.getItem('loggedInUsersId')){
      query = `&dist_from_id=${localStorage.getItem('loggedInUsersId')}&dist_metres=${distance}`
    }
    fetch(`http://localhost:8080/api/users?role=${this.state.role}${query}`)
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          profiles: res
        });
      })
    })
  }

  componentDidMount() {
    const role = this.props.match.params.role === "sitter" ?  2 : 1

  // "http://localhost:8080/api/users?role=2"    // Fetch sitters
  // "http://localhost:8080/api/users?role=1"    // Fetch customers

    fetch('http://localhost:8080/api/users?role=' + role)
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          profiles: res,
          role: role
        });
      })
    })
  }

  render() {
    return (
      <div className="search">
        { localStorage.getItem('loggedInUsersId') !== null ?
          <form onSubmit={this.handleSubmit}>
            <label>
              { this.props.match.params.role === "sitter" ?
              <strong>Critter sitters within</strong>
              :
              <strong>Critter owners within</strong>
              }
              <select style={{width: '23%'}} type="text"
                      onChange={this.handleChange} value={this.state.distance}>
                <option value="100">All</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="10">10</option>
              </select>
              <strong>KM</strong>
            </label>
            <input style={{ backgroundColor: '#5bc0de', borderRadius: '10px' }}
                  type="submit" value="Show me" />
          </form>
          :
          " "
        }
        <div className="user-title">
          { this.props.match.params.role === "sitter" ?
            <h3>Sitters</h3>
            :
            <h3>Owners</h3>
          }
        </div>
        <div className="search-container">
          <Map profiles={this.state.profiles} className="map-component" zoom={11}/>
          <ProfileList profiles={this.state.profiles}/>
        </div>
      </div>
    )
  }
}

export default Search;