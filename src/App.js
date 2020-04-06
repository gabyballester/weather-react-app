import React from 'react';
import Header from './components/commons/Header'; //importamos header
import Footer from './components/commons/Footer'; //importamos footer
import LocalizadorTiempo from './components/localizadorTiempo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LocalizadorTiempo />
      <Footer />
    </div>
  );
}

export default App;
