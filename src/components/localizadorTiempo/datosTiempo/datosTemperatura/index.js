//Importaciones básicas
import React, { Component } from 'react'; //Importamos react

class DatosTemperatura extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,*/
    constructor(...props) { //le pasamos el array de los properties
        super(...props); //hacemos un super y le pasamos directamente el array
        //Esto nos permite pasar tantas properties como queramos
    }

    render() {
        const { temperatura } = this.props; //guardo propiedad temperatura que envía el padre

        return (
            <div>
                {/* como recibe por las props la temperatura directamente, la muestra */}
                <h1>{`${temperatura} ºC`}</h1>
            </div>
        )
    }
}

export default DatosTemperatura;