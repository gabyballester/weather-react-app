import React, { Component } from 'react'; //Importamos react
import Localizador from './localizador';
import DatosTiempo from './datosTiempo';
/** Si no es un componente podemos escribirlo en camelCase
 * importamos el servicio */
import serviceApi from '../../services/serviceApi';

const location = "Valencia, es";

//Creamos la clase que extiende de Component
class LocalizadorTiempo extends Component {

    constructor(...props){ //creamos constructor paramos props
        super(...props) //paramos las props a super
        this.state = {datos:{}} //seteamos el estado de datos a vacío
    }

    async componentDidMount() { //cuando se crea el componente
        //Creamos variable con lo que traiga el servicio
        let data =  await serviceApi.getData();
        this.setState({datos:data}); //guardamos data en el estado datos
    }

    render() {
         //constante datos con valor de this.state
        const {datos} = this.state;
        return (
            <div>
                <h2>Componente localizador tiempo</h2>
                {/* De este modo paso por propery ciudad la location */}
                <Localizador ciudad={location} />
                <DatosTiempo datos={datos}/> {/* //paso datos como props */}
            </div>
        )
    }
}

export default LocalizadorTiempo;