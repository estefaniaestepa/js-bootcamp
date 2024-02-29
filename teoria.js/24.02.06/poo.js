/**
 * PROGRAMACIÓN ORIENTADA A OBJETOS (POO)
 * OBJECT ORIENTED PROGRAMMING (OOP)
 * 
 * Es un paradigma de programación, una forma de pensar.
 * Hay que pensar en la programación como una representación de la realidad, representación de objetos.
 */

/**
 * Pongamos que tenemos un coche, ¿cómo es un coche?
 * 
 * Un coche es un objeto:
 * - Tiene 4 ruedas
 * - Un motor
 * - Es capaz de moverse (es auto-móvil)
 * 
 * Ahora, eso sería la clase, la representación abstracta de lo que es un coche.
 * Porque hay coches de colores, con más o menos puertas, más o menos altos, pero
 * todos tienen en común las cosas que hemos indicado.
 * 
 * Un ford fiesta blanco del 2012 sería un objeto concreto de coche (que es la clase).
 * 
 * En javascript podemos dibujar una clase Coche. Esta clase Coche representará al molde
 * de los coches en una fábrica.
 * 
 * Carácterística que distinguen a los coches:
 * - Color
 * - Marca
 * - Modelo
 * 
 * Estos serán atributos del coche
 * 
 * Acciones que realizarán los coches:
 * - Moverse
 * - Parar
 * - Girar
 * 
 * Estos serán métodos
 */

class Coche {
    color;
    marca;
    modelo;

    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    moverse() {}
    parar() {}
    girar() {}
}

const fordFiestaBlanco = new Coche('blanco', 'Ford', 'Fiesta');
fordFiestaBlanco.moverse();

const fiatPandaRojo = new Coche('rojo', 'Fiat', 'Panda');