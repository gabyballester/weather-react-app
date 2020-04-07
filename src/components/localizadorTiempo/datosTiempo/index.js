//Importaciones básicas
import React, { Component } from 'react'; //Importamos react
import IconoTiempo from './iconoTiempo/index';


class DatosTiempo extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,*/
    constructor(...props) { //le pasamos el array de los properties
        super(...props); //hacemos un super y le pasamos directamente el array
        //Esto nos permite pasar tantas properties como queramos
    }
    render() {
        const { datos } = this.props; //recojo datos de la prop
        return (
            <div id="datosTiepmo">
                <h1>Datos tiempo</h1>
                {/* Le paso del array datos, el objeto weather */}
                <IconoTiempo icono={datos.weather} />
            </div>
        )
    }
}

export default DatosTiempo;