//Importaciones básicas
import React, { Component } from 'react'; //Importamos react
import IconoTiempo from './iconoTiempo/index';
import DatosTemperatura from './datosTemperatura/index';
import Conversor from 'convert-units';

class DatosTiempo extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,*/
    constructor(props) { //Le pasamos el array de los props sin descomponer
        super(props); //Hademos lo mismo aquí
        //Esto nos permite pasar tantas properties como queramos
    }

    calcularTemperatura(temperatura) {
         // Esto retornará temperatura cuando sea llamado
        return Conversor(temperatura)
        .from('K') //origin de datos en unidades Kelvin
        .to('C') //Unidades destino
        .toString() //Lo paso a string
        .substring(0,5); //Recorto dicho string
    }

    render() {
        const { datos } = this.props; //recojo array de objetos de la prop
        const TempBase = 24;
        return (
            <div id="datosTiepmo">
                <h1>Datos tiempo</h1>
                {/* Le paso del array datos, el objeto weather */}
                <IconoTiempo icono={datos} />
                <DatosTemperatura temperatura={
                    datos.main ? this.calcularTemperatura(datos.main.temp) : TempBase
                    // El método retorna temperatura
                } />
            </div>
        )
    }
}

export default DatosTiempo;