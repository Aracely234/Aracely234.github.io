import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Componente4.css';

function Componente4(){
    return(
        <div className="Componente4">
            <Button onClick={()=>console.log('Ya le diste click')}>No dar click</Button>
        </div>
    )
}

export default Componente4;