import React from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import Carousel from "./Carousel";

const nps = process.env.API_KEY;

class Details extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const id = this.props.id;
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?parkCode=" + id + "&stateCode=wa&fields=images&api_key=" +
          `${nps}`
          
      ).then(res => {
        const parks = res.data.data.map(park => ({
          fullname: park.fullName,
          description: park.description,
          states: park.states,
          parkcode: park.parkCode,
          media: park.images.map(image => ({
            id: image.id,
            url: image.url
          })),
          image: `${park.images[0] ? park.images[0].url : "No Image"}`,
          designation: park.designation
        }));
        console.log(parks); 

        this.setState({
          name: parks[0].fullname,
          description: parks[0].description,
          state: parks[0].states,
          media: parks[0].media,
          image: parks[0].image,
          loading: false
        })
      }).catch(err => {
        this.setState({error: err});
      })
  }
  
  render() {
    
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }

    const { name, description, image, state, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name} - { state }</h1>
        {/* <img className="park-detail-image" src={image} /> */}
        <p>{description}</p>
      </div>
    )
  }
}

export default Details