import React, { Component } from 'react'; //importaciones básicas
import '../../App.css'; //Importamos el css que tenemos de base

//Creamos la clase que extiende de Compooent
class Header extends Component {
    render() {
        return (
            //Creamos elemento header
            //Las clases de estilos se definen con className
            <header className="App-header">
                <h1 className="App-title"> Mi aplicación del tiempo</h1>
            </header>
        );
    }
}

export default Header;