import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Park from "./Park";

const nps = process.env.API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?stateCode=wa&fields=images&api_key=" +
          `${nps}`
      )

      // https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
      .then(res =>
        res.data.data.map(park => ({
          description: `${park.description}`,
          fullname: `${park.fullName}`,
          states: `${park.states}`,
          parkcode: `${park.parkCode}`,
          image: `${park.images[0] ? park.images[0].url : "No Image"}`
        }))
      )
      .then(parks => {
        this.setState({
          parks
        });
        console.log(parks);
      });
  }

  render() {
    return (
      <div>
        <h1>National Parks</h1>
        <div>
          { this.state.parks.map(park => {
            return (
              <Park 
                key={park.parkcode}
                name={park.fullname}
                state={park.states}
                description={park.description}
                image={park.image}
              />
            )
          }) }
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
