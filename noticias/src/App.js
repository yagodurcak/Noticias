import React, {useEffect, useState} from 'react';

import Formulario from './components/Formulario';
import Header from './components/Header';
import Noticias from './components/Noticias';

function App() {


  const [seleccion, setSeleccion] = useState("");
  const [noticeGrid, setNoticeGrid] = useState([]);

  useEffect( () => {

    if (seleccion === " ") return;
    // console.log(seleccion);

     const ConsultarApi = async () => {
       
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${seleccion}&apiKey=714d95f8155d47088c77327ccbe51772`;
      const rtdo = await fetch(url);

      const rtdoApi = await rtdo.json()

      setNoticeGrid(rtdoApi.articles)
    };
    
    ConsultarApi()
    // console.log(noticeGrid);
    
  }, [seleccion])

  return (
    <div>
      <Header/>
      <h1 className="text-center font-extrabold text-5xl mt-20">ENCUENTRA NOTICIAS POR CATEGORIA</h1>
      <Formulario setSeleccion={setSeleccion} seleccion={seleccion}/> 

      <Noticias noticeGrid={noticeGrid}/>
      
    </div>
  );
}

export default App;
