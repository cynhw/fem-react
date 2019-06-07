import React from "react";
import axios from "axios";
import Park from "./Park";

const nps = process.env.API_KEY;


class Results extends React.Component {
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
          image: `${park.images[0] ? park.images[0].url : "No Image"}`,
          designation: `${park.designation}`
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
      <div className="search">
        {this.state.parks.map(park => {
          return (
            <Park
              key={park.parkcode}
              name={park.fullname}
              state={park.states}
              description={park.description}
              image={park.image}
              designation={park.designation}
              id={park.parkcode}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
