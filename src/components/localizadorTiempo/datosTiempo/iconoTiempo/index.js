//Importaciones básicas
import React, { Component } from 'react'; //Importamos react

class IconoTiempo extends Component {
    /** Para poder pasar properties, hay que hacerlo por el constructor,*/
    constructor(...props) { //le pasamos el array de los properties
        super(...props); //hacemos un super y le pasamos directamente el array
        //Esto nos permite pasar tantas properties como queramos
    }
    render() {
        // console.log("props-> " + JSON.stringify(this.props));
        let icono = this.props; //guardo la propiedad icono     
        console.log(icono);
        
        return (
            <div id="iconoTiepmo">
                <h1>Icono del tiempo</h1>
            </div>
        )
    }
}

export default IconoTiempo;