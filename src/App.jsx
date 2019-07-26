import React, { Component } from 'react';
import './App.css';
import Lista from './Lista';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "Denilson",
            email: 'e-mail@email'
    }
        this.mudarEstado = this.mudarEstado.bind(this)
        this.mudarInput = this.mudarInput.bind(this)
    }

mudarEstado() {
    this.setState({
        nome: "Denilson Castro"
    })
}

mudarInput(event){
    console.log(event.target)
    let target = event.target
    let index = target.name
    this.setState({
        [index]: target.value
    })
}

render() {
    return (
        <div className="App">
            <div>
                <form action="">
                    <label>Nome
                        <input 
                        type="text" 
                        name="nome"
                        value={this.state.nome}
                        onChange = {this.mudarInput}/>
                    </label>
                    <label>E-email
                        <input 
                        type="text"
                        name="email"
                        value = {this.state.email}
                        onChange = {this.mudarInput}/>
                    </label>
                    <span>{this.state.nome}: {this.state.email}</span>

                    <span></span>

                </form>
            </div>
            <button onClick={this.mudarEstado}>Mudar estado</button>
            <Lista></Lista>
        </div>

    );
}
}

export default App;