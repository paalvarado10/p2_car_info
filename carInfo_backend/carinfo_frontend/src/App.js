import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  state ={carros:[]}

  componentDidMount(){
    fetch('/carros')
      .then(res => res.json())
      .then(carros=> this.setState({ carros}));
  }
    render() {
    return (
       <Container>
        <h1>CarInfo</h1>
        {this.state.carros.map(carro =>
        <Row>
          <Col sm="6" lg="4">
            <Container>
            <br/>
            <h2>Marca : {carro.marca}</h2>
            <h2>Modelo: {carro.marca+" "+carro.modelo}</h2>
            <h2>Linea: {carro.linea}</h2>
            <h2>traccion: {carro.traccion}</h2>
            <h2>Numero Puertas: {carro.puertas}</h2>
            <h2>Motor: {carro.motor}</h2>
            <h2>cilindros: {carro.cilindros}</h2>
            <h2>Transmicion: {carro.transmicion}</h2>
            <br/>
            <hr/>
            </Container>
          </Col>
          <Col sm="6" lg="8">
            <Container>
            <img src={carro.imagen} alt={carro.id+ " imagen carro"} />
            </Container>
          </Col>
        </Row>
        )}
      </Container>
    );
  }
}

export default App;
