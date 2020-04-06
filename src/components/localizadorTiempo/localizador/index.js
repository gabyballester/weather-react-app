import React, { Component } from 'react'; //importaciones básicas
import './localizador.css'; //importamos archivo css

//Cremaos clase que extiende de Component
class Localizador extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,
  * por lo que lo implementamos aquí en el padre*/
    constructor(...props) { //le pasamos el array de los properties
        super(...props); //hacemos un super y le pasamos directamente el array
        //Esto nos permite pasar tantas properties como queramos
    }
    render() {
        const { ciudad } = this.props; //almacenará la propiedad cuyo nombre sea ciudad
        return (
            <div id="localizador"><h1>Ciudad: {ciudad}</h1></div> //para mostrar la ciudad la bindeo
        )
    }
}

export default Localizador;