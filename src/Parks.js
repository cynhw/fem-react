import React from "react";
export const Parks = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.city),
    React.createElement("h2", {}, props.state)
  ]);
};
