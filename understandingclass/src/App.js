import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner'
class App extends React.Component {
  state = {lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude}),
      (error) => this.setState({ errorMessage: error.message})
    );
  }
  componentDidUpdate() {
    console.log('My component was just updated - it rerendered')
  }
  render() {
    

      if(this.state.errorMessage && !this.state.lat){
        return <div>Error:{this.state.errorMessage}</div>;
      }
      if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
      }
      return <Spinner message="Please accept location request"/>;
  }
}

export default App;
