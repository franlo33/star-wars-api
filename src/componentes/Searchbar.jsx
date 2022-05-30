import React,{ useState } from 'react';
import '../hojas-de-estilo/Header.css';

function Searchbar({ onSearch }) {

    const [search, setSearch] = useState('');

    const onChange = (e) =>{
        setSearch(e.target.value.trim().toLowerCase());
        if(e.target.value.length === 0){
            onSearch(null);
        }
    }

    const onClick = async (e) =>{
        e.preventDefault();
        onSearch(search);
    }

    return(
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input 
                    placeholder='Buscar personaje'
                    type="text" 
                    onChange={onChange}
                />
            </div>
            <div className='searchbar-boton'>
                <button onClick={onClick}>🔎</button>
            </div>     
        </div>
    )
}

export default Searchbar;