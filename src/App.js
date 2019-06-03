import React from "react";
import { render } from "react-dom";
import axios from "axios";
import { Park } from "./Park";

const nationalpark = {key: process.env.API_KEY};
console.log(nationalpark);

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>National Parks</h1>
        <Park name="Olympic National Park" city="Port Angeles" state="Washington" />
        <Park name="North Cacades National Park" city="Marblemount" state="Washington" />
        <Park name="Mount Rainier National Park" city="Seattle" state="Washington" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
