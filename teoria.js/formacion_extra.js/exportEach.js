// La diferencia entre exportEach y exportDefault es que en exportDefault temenos que crear un objeto de export default con las funciones si queremos exportar MAS DE UN ELEMENTO y exportar ese objeto al js principal.
// aquí no hace falta, podemos poner export a las funciones que deseemos exportar y invocarlas directamente al js principal.


export function getClient () {
    return `${client.name} ${client.surname}`;
}

const client = {
    name: 'Ivan',
    surname: 'Ceballos'
};

function getClient() {
    return `${client.name} ${client.surname}`;
}

export function setName(name) {
    client.name = name;
}
