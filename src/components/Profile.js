import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Map from './Map';
import Reviews from './Reviews';
import './styles/profile.css';
import { Form, Button, Carousel } from 'react-bootstrap';


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      profiles: {},
      reviews: [
          {
            first_name: "Marc",
            content: "This is an awesome review",
          },
          {
            first_name: "Reid",
            content: "This is also an awesome review",
          },
        ]
    }
  }

  componentDidMount() {

    const lookup_id = this.props.match.params.id ? this.props.match.params.id : 0;

    fetch('http://localhost:8080/api/users?id=' + lookup_id)
    .then(results => {
      results.json().then((res) => {
        console.log(res, res[0].images[0].image, res[0].reviews[0]) //debug
        this.setState({
          profiles: res[0] // individual profile is first result
        });
      })
    })

  }

  handleSubmit = (e) => {
    
    let newReview = {
      from_id: 10,
      to_id: 1,
      rating: 5,
      content: e.target.elements[0].value
    };

    e.preventDefault();
    e.target.elements[0].value = ""
    fetch('http://localhost:8080/api/reviews', {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then((response) => console.log("Success:", JSON.stringify(response)))
    .catch(error => console.log('Error:', error))
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-header">

            <div className="profile-avatar">
                <img src={this.state.profiles.avatar} alt="avatar" />
            </div>

            <div className="profile-text">
              <div className="profile-name">
                  <h3>{this.state.profiles.first_name} {this.state.profiles.last_name}</h3>
                  <Link to="/profile/:id/contact" className="btn btn-info">Contact</Link>
              </div>
              <div className="profile-info">
                  <h6>{this.state.profiles.location}</h6>
                  <p>Average Rating: {this.state.profiles.avg_rating ? this.state.profiles.avg_rating : 'Not Rated Yet'} </p>
              </div>
            </div>
          </div>

          <Carousel className="profile-images">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://hsmo.zurihosting.com/wp-content/uploads/2016/06/Pebbles2-A608071a.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.condorferries.co.uk/media/2455/taking-your-pet-5.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.inquirer.com/resizer/iI306f5uOeqNIdt9yTnwaQE583I=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/KRGVV5DRABH3BPHJWDFSICAEVA.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          <Form className="review-form" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Add a Review:</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            <Button variant="primary" type="submit" >Submit</Button>
          </Form>

          <Reviews reviews={this.state.reviews}/>
        </div>

        <div className="profile-map">
          <h4>{this.state.profiles.first_name}'s Neighbourhood</h4>
          <Map profiles={[this.state.profiles]} />
        </div>
      </div>
    )
  }
}

export default Profile;