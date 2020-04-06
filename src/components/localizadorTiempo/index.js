import React, { Component } from 'react'; //Importamos react
import Localizador from './localizador';
import DatosTiempo from './datosTiempo';
/** Si no es un componente podemos escribirlo en camelCase
 * importamos el servicio */
import serviceApi from '../../services/serviceApi';

const location = "Valencia, es";

//Creamos la clase que extiende de Component
class LocalizadorTiempo extends Component {

    componentDidMount() { //cuando se crea el componente
        //Creamos variable con lo que traiga el servicio
        let data =  serviceApi.getData();
        console.log('consoleamos data');
        console.log(data);
    }

    render() {
        return (
            <div>
                <h2>Componente localizador tiempo</h2>
                {/* De este modo paso por propery ciudad la location */}
                <Localizador ciudad={location} />
                <DatosTiempo/>
            </div>
        )
    }
}

export default LocalizadorTiempo;