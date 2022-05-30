import React,{ useState } from 'react';
import Modal from './Modal'
import '../hojas-de-estilo/Personaje.css';

function Personaje({ personaje }) {

    const [modal,setModal] = useState(false);

    const onClick = (e) =>{
        e.preventDefault();

        // modal = !modal
        setModal(!modal);

        if(modal === true){
            console.log("a");
        }else{
            console.log("b");
        }
        
    }

    return(
        <div className='personaje-container'>
            <div className="personaje-imagen"><img src={require(`../imagenes/${personaje.name}.jpeg`)} alt={personaje.name} /></div>
            <h3>Nombre: {personaje.name}</h3>
            <h3>Altura: {personaje.height}cm</h3>
            <button onClick={onClick}>ver más</button>
            <Modal personaje={personaje} modal={modal} setModal={setModal} />
        </div>
    )
}

export default Personaje;