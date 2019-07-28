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
    event.preventDefault();
    console.log(event.target.value)
    let distance;
    if (event.target.value !== 0) {
      distance = event.target.value * 1000;
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
          <form>
            <div className="form-group">
              <label>
                { this.props.match.params.role === "sitter" ?
                <span>Show me sitters within</span>
                :
                <span>Show me owners within</span>
                }
              </label>
              <select type="text" onChange={this.handleChange}>
                <option value="100">100 km</option>
                <option value="2">2 km</option>
                <option value="5">5 km</option>
                <option value="7">7 km</option>
                <option value="10">10 km</option>
              </select>
            </div>
          </form>
          :
          " "
        }
        <div className="user-title">
          { this.props.match.params.role === "sitter" ?
            <h3>Critter Sitters</h3>
            :
            <h3>Critter Owners</h3>
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