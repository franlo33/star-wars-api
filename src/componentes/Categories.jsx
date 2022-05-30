import React,{ useState, useEffect } from 'react';
import '../hojas-de-estilo/Header.css';

function Categories({fetchPersonajesConFiltro,filtro,setFiltro }) {

    const onClick = (e) =>{
        e.preventDefault();
        setFiltro(e.target.value);
    }

    

    return(
        <div className='categories-container'>
            <button onClick={onClick} value="blond">Rubio</button>  
            <button onClick={onClick} value="n/a">N/A</button> 
            <button onClick={onClick} value="none">Sin pelo</button> 
            <button onClick={onClick} value="black">Moreno</button> 
            <button onClick={onClick} value="brown">Castaño</button> 
            <button onClick={onClick} value="white">Blanco</button>   
        </div>
    )
}

export default Categories;