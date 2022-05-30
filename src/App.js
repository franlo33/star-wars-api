import './App.css';
import Header from './componentes/Header';
import Personaje from './componentes/Personaje';
import { useState,useEffect } from 'react';
import { getPersonajes, searchPersonaje, getData, getPersonajesConFiltro } from "./api";

function App() {

  const [personajes,setPersonajes] = useState([]);
  const [data,setData] = useState([]);
  const [planetas,setPlanetas] = useState([]);
  const [activo,setActivo] = useState(1);
  const [pagina,setPagina] = useState(1);
  const [total,setTotal] = useState(0);
  const [filtro,setFiltro] = useState("");
  const [buscando,setBuscando] = useState(false);
  const [verImagenesAbajo,setVerImagenesAbajo] = useState(true);

  const fetchPersonajes = async () =>{
    try {
      setBuscando(false);
      setVerImagenesAbajo(true);
      const data = await getPersonajes(pagina);
      setPersonajes(data.results);
      setTotal(Math.ceil(data.count / 10));
    } catch (error) {
      
    }
  }

  const fetchPersonajesConFiltro = async () =>{
    try {
      setBuscando(true);
      setVerImagenesAbajo(false);
      const data = await getPersonajesConFiltro();

      const filtrado = data.results.filter(personaje => personaje.hair_color.includes(filtro));

      setPersonajes(filtrado);

      setPagina(0);
      setTotal(1);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if(!buscando){
      fetchPersonajes();
    } 
    }, [pagina]);

    useEffect(() => {
            fetchPersonajesConFiltro();
        }, [filtro]);

  const onSearch = async (personaje) => {
    if(!personaje){
      setBuscando(false);
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
  }

  return (
    <div className="App">
      <Header onSearch={onSearch} fetchPersonajes={fetchPersonajes} pagina={pagina} setPagina={setPagina} total={total} filtro={filtro} setFiltro={setFiltro} fetchPersonajesConFiltro={fetchPersonajesConFiltro} />

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
