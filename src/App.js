import React from 'react';
import './App.css';
import Component1 from './Components/App-component1';
import Component2 from './Components/App-component2';
import Component3 from './Components/App-component3';
import Componente4 from "./Components/Componente4";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  
    return(
      <div className='App'>
        <Component1/>
        <Component2/>
        <Component3/>
        <Componente4></Componente4>
      </div>
    );
}

export default App;
