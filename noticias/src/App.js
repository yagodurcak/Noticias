import React, {useEffect, useState} from 'react';

import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {


  const [seleccion, setSeleccion] = useState("");

  useEffect( () => {

    if (seleccion === " ") return;
    console.log(seleccion);

     const ConsultarApi = async () => {
       
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${seleccion}&apiKey=714d95f8155d47088c77327ccbe51772`;
      const rtdo = await fetch(url);

      const rtdoApi = await rtdo.json()

      console.log(rtdoApi);
     };

     ConsultarApi()
  }, [seleccion])

  return (
    <div>
      <Header/>
      <h1 className="text-center font-extrabold text-5xl mt-20">ENCUENTRA NOTICIAS POR CATEGORIA</h1>
      <Formulario setSeleccion={setSeleccion} seleccion={seleccion}/>      
    </div>
  );
}

export default App;
