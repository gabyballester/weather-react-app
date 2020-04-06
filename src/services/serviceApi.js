const location = "Valencia, es"; //Le damos la location
const appID = "f77e16ce3e2db538fd7addd545dc6ea8"
//creamos constante con la url de previsión del tiempo
//Le pasamos la constante location
//ponemos magic quiotes para que ejecute el código javascript
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appID}`;

class serviceApi { //creamos la clase

    //creamos método estático y síncrono para que haga el fetch
    static async getData() {
        /** Metemos en result lo que devuelva la petición síncrona de
         * fetch de api_weather  */
        let result = await fetch(api_weather)
            //si el resultado es ok retorna data.json()
            .then(data => data.json())
            //si el resultado es ok retorna esto
            .then(weather_data => weather_data);
        return result; //retornamos result
    }
}

export default serviceApi;