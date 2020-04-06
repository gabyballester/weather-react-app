//Importaciones básicas
import React, { Component } from 'react'; //Importamos react

class DatosTiempo extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,*/
    constructor(...props) { //le pasamos el array de los properties
        super(...props); //hacemos un super y le pasamos directamente el array
        //Esto nos permite pasar tantas properties como queramos
    }
    render() {
        const { ciudad } = this.props; //almacenará la propiedad cuyo nombre sea ciudad
        return (
            <div id="datosTiepmo">
                <h1>Datos tiempo</h1>
            </div> //para mostrar la ciudad la bindeo
        )
    }
}

export default DatosTiempo;