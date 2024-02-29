// Export se utiliza tambien para modularizar funcionalidad y ocultarla en el archivo principal


const client ={                  //tambien podemos teber variables
    name: 'Ivan',               //esta variable solo existe en este archivo y desde el otro archivo no podemos acceder a ella
    surname: 'ceballos'
};



function getClient(){           //este getClient lo que hará sera devolverme el cliente Y LO EXPORTA
    return `${name}` ${surname};    
}


/**************************** */


function saludar (name) {
    console.log(`Hola ${name}`);
}

export default saludar;       // esta funcion se exporta en el archivo que tenemos de import:export.js


/**************************** */


function setName (name) {    //este setName como no está exportado solo existe en este archivo
    client.name = name;
}

setName = 'Carlos';