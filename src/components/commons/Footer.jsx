import React, { Component } from 'react'; //importaciones básicas
import '../../App.css'; //Importamos el css que tenemos de base

//Creamos la clase que extiende de Compooent
class Footer extends Component {
    render() {
        return (
            //Creamos elemento header
            //Las clases de estilos se definen con className
            <header className="App-header">
                <h1 className="App-title"> Mi Footer</h1>
            </header>
        );
    }
}

export default Footer;