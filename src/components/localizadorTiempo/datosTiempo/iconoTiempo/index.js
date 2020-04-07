//Importaciones básicas
import React, { Component } from 'react'; //Importamos react
import WeatherIcons from 'react-weathericons';

const EstadoTiempo = estadoTiempo => {
    switch (estadoTiempo) {
        case "nublado": return "cloud";
        case "soleado": return "day-sunny";
        case "lluvioso": return "rain";
        default: return "day";
    }
}

class IconoTiempo extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,*/
    constructor(...props) { //le pasamos el array de los properties
        super(...props); //hacemos un super y le pasamos directamente el array
        //Esto nos permite pasar tantas properties como queramos
    }

    render() {
        let { icono } = this.props; //guardo la propiedad icono que envía el padre    
        let estado = "soleado";

        return (
            // El componente recibe la constante estado y le pasamos estado para mostrar
            <div><WeatherIcons name={EstadoTiempo(estado)}
                size="2x"></WeatherIcons></div>
        )
    }
}

export default IconoTiempo;