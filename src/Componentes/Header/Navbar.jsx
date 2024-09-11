import React, {useContext} from "react";
import Descarga from "../../images/Descarga.png";
import { DataConstext } from "../../context/ElementProvided";

export const Header  = () => {

    const value = useContext(DataConstext)
    const [menu, setmenu] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setmenu(!menu)
    }

    return (
       <header>

            <a href="#">
                <div className="logo">
                    <img source={Descarga} alt="logo" width="150" />
                </div>
            </a>

            <ul>
                <li>
                    <a href="#">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#">
                        Productos
                    </a>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item-total"> {carrito.lenght} </span>
            </div>
       </header>
    )
}