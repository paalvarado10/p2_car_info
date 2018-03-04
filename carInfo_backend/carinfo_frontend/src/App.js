import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={carros:[]}

  componentDidMount(){
    fetch('/carros')
      .then(res => res.json())
      .then(carros=> this.setState({ carros}));
  }



    render() {
    return (
      <div className="App">
        <h1>CarInfo</h1>
        {this.state.carros.map(carro =>
          <div key={carro.id}>
          <h2>Modelo Carro: {carro.modelo}</h2>
          <div key={carro.id+"contenedor"} className="img-responsive">
          <img src={carro.imagen} alt="imagen carro" />

          </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
