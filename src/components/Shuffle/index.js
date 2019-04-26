import React, { Component } from 'react';
import cars from "../../cars.json";

class Shuffle extends Component {

state= {
    cars: cars
}
componentDidMount() {
    console.log(this.state.cars)
  }
//shuffle here

}

export default Shuffle;