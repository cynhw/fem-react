import React from "react";
import { render } from "react-dom";
import axios from "axios";
import { Park } from "./Park";

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
        "https://developer.nps.gov/api/v1/parks?stateCode=WA&fields=name&fields=&api_key=" +
          `${nps}`
      )

      // https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
      .then(res =>
        res.data.data.map(park => ({
          description: `${park.description}`,
          fullname: `${park.fullName}`,
          states: `${park.states}`
        }))
      )
      .then(parks => {
        this.setState({
          parks
        });
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
                name={park.fullname}
                state={park.states}
                description={park.description}
              />
            )
          }) }
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
