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
    if (this.state.distance != 0) {
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
    fetch('http://localhost:8080/api/users')
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
            <strong>Show me people within</strong>
            <select style={{width: '39%'}} type="text"
                    onChange={this.handleChange} value={this.state.distance}>
              <option value="select">Select Distance</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <strong>KM</strong>
          </label>
          <input style={{ backgroundColor: '#5bc0de', borderRadius: '10px' }}
                 type="submit" value="Submit" />
        </form>        
        <h3>Sitters in {this.state.city}</h3>
        <div className="search-container">
          <Map profiles={this.state.profiles} className="map-component" zoom={11}/>
          <ProfileList profiles={this.state.profiles}/>
        </div>
      </div>
    )
  }
}

export default Search;