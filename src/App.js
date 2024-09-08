import React from "react";
import {Header} from "./Componentes/Header"
import { ProductosLista } from "./Componentes/Productos/index";
import 'boxicons';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Paginas} from "./Componentes/Paginas";
import { ElementProvided } from "./context/ElementProvided";


/*Renderizado de objetos*/

function App() {
  return (

    <ElementProvided>
      <div className="App">
        <router>
        
          <Header />
          <Paginas />
         
        </router>
      </div>
    </ElementProvided>
  );
}

/*Llamado de funciones*/

export default App;
