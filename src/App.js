import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Home';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./cars.json";
import CarTiles from './components/CarTiles';
import shuffle from './components/Shuffle';


class App extends Component {
  state = {
    cars: cars
  }
 

  render() {
    return (

     <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.cars.map(car => (
          <CarTiles
            id={car.id}
            key={car.id}
            name={car.name}
            image={car.image}
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
