import React,{ useState } from 'react';
import '../hojas-de-estilo/Header.css';

function Categories({fetchPersonajes}) {

    const onClick = async (e) =>{
        e.preventDefault();
        switch (e.target.value) {
            // case "films":
            //     await fetchPeliculas();
            //     break;
            case "people":
                await fetchPersonajes();
                break;
            // case "planets":
            //     await fetchPlanetas();
            //     break;
            // case "species":
            //     await fetchEspecies();
            //     break;
            // case "starships":
            //     await fetchNaves();
            //     break;
            // case "vehicles":
            //     await fetchVehiculos();
            //     break;
            default:
                console.log("HOLA MUNDO");
                break;
        }
    }

    return(
        <div className='categories-container'>
            <button onClick={onClick} value="films">Películas</button>  
            <button onClick={onClick} value="people">Personajes</button> 
            <button onClick={onClick} value="planets">Planetas</button> 
            <button onClick={onClick} value="species">Especies</button> 
            <button onClick={onClick} value="starships">Naves</button> 
            <button onClick={onClick} value="vehicles">vehículos</button>   
        </div>
    )
}

export default Categories;