import React, { Component } from 'react';
import Map from './Map'
import ProfileList from './ProfileList'
import './styles/search.css'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      distance: '',
      city: "Toronto",
      profiles: []
    }
  }

  handleChange = event => {
    this.setState({distance: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/users?dist_from_id=1&dist_metres=${this.state.distance}`)
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
            <input style={{width: '25%'}} type="text"
                   value={this.state.distance} onChange={this.handleChange} />
            <strong>meters of me</strong>
          </label>
          <input style={{backgroundColor: '#5bc0de'}}
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