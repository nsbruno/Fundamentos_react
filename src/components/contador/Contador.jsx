import "./Contador.css"
import React, { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  }

  inc = () => {
      this.setState({
          numero: this.state.numero + this.state.passo
      })
  }

  dec = () => {
      this.setState({
          numero: this.state.numero -this.state.passo
      })
  }

  setPasso = (novoPasso) => {
      this.setState({
         passo: novoPasso
      })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        {/* <h3>{this.state.numero}</h3> */}
        <Display numero={this.state.numero}/>
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
        {/* <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" 
            value={ this.state.passo} onChange={this.setPasso}/>
        </div> */}
        {/* <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>           */}
            <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
      </div>
    );
  }
}

export default Contador;
