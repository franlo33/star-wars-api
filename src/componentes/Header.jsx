import React from 'react';
import '../hojas-de-estilo/Header.css';
import Searchbar from './Searchbar';
import Categories from './Categories';
import Paginacion from './Paginacion';

function Header({ onSearch, fetchPersonajes, pagina, setPagina, total, filtro, setFiltro, fetchPersonajesConFiltro }) {

    return(
        <header id='header' className='container'>
            <div className='header-logo'><img 
                src={require("../imagenes/logo.png")} 
                alt="Logo de Star Wars API" 
            /></div>
            <div className='header-searchbar'>
                <Searchbar onSearch={onSearch}/>
            </div>
            <Categories fetchPersonajes={fetchPersonajes} filtro={filtro} setFiltro={setFiltro} fetchPersonajesConFiltro={fetchPersonajesConFiltro} />
            <Paginacion pagina={pagina} setPagina={setPagina} total={total} />
        </header>
    )
}

export default Header;