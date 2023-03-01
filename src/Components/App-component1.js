import React, { Component } from "react";
import './App-component1.css';

class Component1 extends Component{
    funcion1(){
        const mensaje = "Semana 5";
        return mensaje;
    }
    render(){
        return(
            <div className="App-component1">
                <h1>Semana 5</h1>
                <h6>Soy un componente tipo funcion que despliega una constante que dice "{this.funcion1()}" </h6>
            </div>
        );
    }
}

export default Component1;