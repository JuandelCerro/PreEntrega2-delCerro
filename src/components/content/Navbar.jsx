import React from "react";
import { Link } from "react-router-dom";
import Form from "../layouts/Form";
import Secciones from "../layouts/Secciones";
import Logo from "../layouts/logoCope.png";
import Dropdown from "../layouts/Dropdown";
import CartWidget from "../layouts/CartWidget";


// AGREGAR ICONO DE CARRITO AL NAVBAR

const Navbar = () => {
  const listProductos = ["Burgers Clasicas", "Burgers Especiales", "Burgers Veggies", "Para picar"]

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary barraNavegacion">
        <div className="container-fluid">
          <Link to={"/"}> <img src={Logo} alt="Logo"/> </Link>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown lista={listProductos}/>
            </ul>
              <Form busqueda={"Buscar Producto"}/>
            <ul className="navbar-nav">
              <Link className="nav-link" to={"/Carrito"}><CartWidget/></Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
