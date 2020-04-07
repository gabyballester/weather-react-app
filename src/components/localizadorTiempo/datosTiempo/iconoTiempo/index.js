//Importaciones básicas
import React, { Component } from 'react'; //Importamos react
import WeatherIcons from 'react-weathericons';

const EstadoTiempo = estadoTiempo => {
    //accedemos a posición 0 del array y mostramos main
    switch (estadoTiempo[0].main) {
        case "Clouds": return "cloud";
        case "Clear": return "day-sunny";
        case "Lluvioso": return "rain";
        default: return "day-sunny";
    }
}

class IconoTiempo extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,*/
    constructor(props) { //le pasamos el array de los properties
        super(props); //hacemos un super y le pasamos directamente el array
        //Esto nos permite pasar tantas properties como queramos
    }

    render() {
        let { icono } = this.props; //guardo la propiedad icono que envía el padre  
        let estado = "cloud"; 
        return (
            // El componente recibe la constante estado y le pasamos estado para mostrar
            <div><WeatherIcons name={
                icono.weather ? EstadoTiempo(icono.weather) : estado
            }
                size="2x"></WeatherIcons></div>
        )
    }
}

export default IconoTiempo;