import React,{ useState } from 'react';
import '../hojas-de-estilo/Modal.css';

function Modal({ personaje,modal,setModal }) {

    const onClick = (e) =>{
        e.preventDefault();
        setModal(false);
    }

    return(
        <div className={modal ? 'modal-container' : 'd-none'} >
            <div className='modal-info'>
                <div className="modal-imagen"><img src={require(`../imagenes/${personaje.name}.jpeg`)} alt={personaje.name} /></div>
                <h3>Nombre: {personaje.name}</h3>
                <h4>Altura: {personaje.height}</h4>
                <h4>Peso: {personaje.mass}</h4>
                <h4>Sexo: {personaje.gender}</h4>
                <h4>Color del pelo: {personaje.hair_color}</h4>
                <h4>Color de piel: {personaje.skin_color}</h4> 
                <button onClick={onClick}>cerrar</button>
            </div>
        </div>
        
    )
}


export default Modal;