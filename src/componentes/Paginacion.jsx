import React from 'react';
import '../hojas-de-estilo/Header.css';

function Paginacion({ pagina, setPagina, total }) {

    const adelante = (e) =>{
        e.preventDefault();
        if(pagina<total){
            setPagina(pagina+1);
        }
    }

    const atras = (e) =>{
        e.preventDefault();
        if(pagina>1){
            setPagina(pagina-1);
        }
    }

    return(
        <div className='paginacion-container'>
            <button onClick={atras}>Anterior</button>
            <button onClick={adelante}>Siguiente</button>
            <span>{pagina} de {total}</span>
        </div>
    )
}

export default Paginacion;