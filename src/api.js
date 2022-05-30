export const searchPersonaje = async (personaje) =>{
    try{
        const url = `https://swapi.dev/api/people/?search=${personaje}`;
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){

    }
}

export const getPersonajes = async (numero=1) =>{
    try{
        const url = `https://swapi.dev/api/people/?page=${numero}`;
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){

    }
}

export const getPersonajesConFiltro = async () =>{
    try{
        const url = `https://swapi.dev/api/people`;
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){

    }
}