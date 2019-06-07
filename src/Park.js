import React from "react";

class Park extends React.Component {
  render() {
    const { name, state, description, image } = this.props;
    console.log(name);

    return (
      <div className="pet">
        <div className="image-container">
          <img className="park-image" src={image} />
        </div>
        <div className="info">
          <h3>{name} - {state}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default Park;
