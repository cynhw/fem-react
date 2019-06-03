import React from "react";

export const Park = props => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, props.name),
  //   React.createElement("h2", {}, props.city),
  //   React.createElement("h2", {}, props.state)
  // ]);

  return (
    <div>
      <h1>{ props.name }</h1>
      <h2>{ props.city }</h2>
      <h2>{ props.state }</h2>
    </div>
  );
};

export default Park;