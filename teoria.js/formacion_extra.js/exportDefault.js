function saludar(name) {
    console.log(`Hola ${name}`);
}

// exporta por defecto (nombre función)
/* export default saludar; */
// TODOS LOS MÓDULOS DEBEN TENER UN EXPORT DEFAULT no pueden tener dos
// export es similar a un return, solo devuelve una cosa, si queremos que devuelva MAS DE UNA FUNCIÓN tenemos que crear un OBJETO
export default {
    saludar,
    getClient,
    setName,
}
// IMPORTANTE DEVOLVER CON OBJETOS Y NO CON ARRAYS!!!!!!! HAY QUE TENER RESPETO A LA MUERTE Y NO COMPLICARLE LA VIDA AL PRINGADO QUE VENGA DETRÁS DE NOSOTROS 

// ----------------------------

const client = {
    name: 'Ivan',
    surname: 'Ceballos'
};

function getClient() {
    return `${client.name} ${client.surname}`;
}

function setName(name) {
    client.name = name;
}



