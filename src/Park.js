import React from "react";
import { Link } from "@reach/router";

class Park extends React.Component {
  render() {
    const { name, state, description, image, designation, id } = this.props;

    return (
      <Link to={`/details/${id}`} className="parks">
        <div className="image-container">
          <img className="park-image" src={image} />
        </div>
        <div className="info">
          <h3>
            {name} - {state}
          </h3>
          <h4>
            {designation}
          </h4>
          <p>{description}</p>
        </div>
      </Link>
    );
  }
}

export default Park;
