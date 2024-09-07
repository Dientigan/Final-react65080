import React from "react";
import {Header} from "./Componentes/Header"
import { ProductosLista } from "./Componentes/Productos/index";
import 'boxicons';


/*Renderizado de objetos*/

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <ProductosLista />

    </div>
  );
}

/*Llamado a de funciones*/

export default App;
