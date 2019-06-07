import React from "react";
import { render } from "react-dom";
import Results from './Results';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>National Parks</h1>
        <Results />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));