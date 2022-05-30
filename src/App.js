import './App.css';
import Header from './componentes/Header';
import Personaje from './componentes/Personaje';
import { useState,useEffect } from 'react';
import { getPersonajes, searchPersonaje, getData } from "./api";

function App() {

  const [personajes,setPersonajes] = useState([]);
  const [data,setData] = useState([]);
  const [planetas,setPlanetas] = useState([]);
  const [activo,setActivo] = useState(1);
  const [pagina,setPagina] = useState(1);
  const [total,setTotal] = useState(0);
  const [buscando,setBuscando] = useState(false);
  const [verImagenesAbajo,setVerImagenesAbajo] = useState(true);

  const fetchPersonajes = async () =>{
    try {
      setVerImagenesAbajo(true);
      const data = await getPersonajes(pagina);
      setPersonajes(data.results);
      setTotal(Math.ceil(data.count / 10));
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if(!buscando){
      fetchPersonajes();
    } 
    }, [pagina]);

  const onSearch = async (personaje) => {
    if(!personaje){
      return fetchPersonajes(personaje);
    }
    setBuscando(true);
    const result = await searchPersonaje(personaje);
    if(!result){
      console.log("NO ME DEVUELVE NADA LA BUSQUEDA")
      return;
    }

    setPersonajes(result.results);
    setPagina(1);
    setTotal(1);
    setVerImagenesAbajo(false);
    setBuscando(false);
  }

  return (
    <div className="App">
      <Header onSearch={onSearch} fetchPersonajes={fetchPersonajes} pagina={pagina} setPagina={setPagina} total={total}/>

      <main>
        {personajes.map((personaje) => {
            return(
                <Personaje key={personaje.name} personaje={personaje} />
            )
        })}
        <div className={verImagenesAbajo ? 'img-izq' : 'd-none'}><img src={require("./imagenes/bottom-left.webp")} alt='Imagen de Sebulba'/></div>
        <div className={verImagenesAbajo ? 'img-der' : 'd-none'}><img src={require("./imagenes/bottom-right.webp")} alt='Imagen de Darth Maul'/></div>
      </main>
    </div>
  );
}

export default App;
