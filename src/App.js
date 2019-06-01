const Parks = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.city),
    React.createElement("h2", {}, props.state)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
