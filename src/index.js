import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {

  constructor(props) {
    super(props);

    //initalizing the lat null
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {

    return <div>Latitude: { this.state.lat } </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
