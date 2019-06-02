import React from "react";
import { render } from "react-dom";
import { Parks } from "./Parks";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "National Parks of Washington"
      ),
      React.createElement(Parks, {
        name: "Olympic National Park",
        city: "Port Angeles",
        state: "Washington"
      }),
      React.createElement(Parks, {
        name: "North Cascades National Park",
        city: "Marblemount",
        state: "Washington"
      }),
      React.createElement(Parks, {
        name: "Mount Rainier",
        city: "Seattle",
        state: "Washington"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
