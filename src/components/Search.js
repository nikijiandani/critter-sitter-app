import React, { Component } from 'react';
import Map from './Map'
import ProfileList from './ProfileList'
import './styles/search.css'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      distance: 'select',
      city: "Toronto",
      profiles: []
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
    } else {
      distance = this.state.distance;
    }
    fetch(`http://localhost:8080/api/users?dist_from_id=1&dist_metres=${distance}`)
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
    console.log(this.props.match.params.role)

    const role = this.props.match.params.role === "sitter" ?  2 : 1 

  // "http://localhost:8080/api/users?role=2"    // Fetch sitters 
  // "http://localhost:8080/api/users?role=1"    // Fetch customers

    fetch('http://localhost:8080/api/users?role=' + role)
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          profiles: res
        });
      })
    }) 
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <label>
            { this.props.match.params.role === "sitter" ?
            <strong>Show me critter sitters within</strong>
            :
            <strong>Show me critter owners within</strong>      
            } 
            <select style={{width: '31%'}} type="text"
                    onChange={this.handleChange} value={this.state.distance}>
              <option value="select">Any Distance</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <strong>KM</strong>
          </label>
          <input style={{ backgroundColor: '#5bc0de', borderRadius: '10px' }}
                 type="submit" value="Submit" />
        </form>
        { this.props.match.params.role === "sitter" ?
          <h3>Critter Sitters in {this.state.city}</h3>
          :
          <h3>Critter Owners in {this.state.city}</h3>      
        }     
        <div className="search-container">
          <Map profiles={this.state.profiles} className="map-component" zoom={11}/>
          <ProfileList profiles={this.state.profiles}/>
        </div>
      </div>
    )
  }
}

export default Search;