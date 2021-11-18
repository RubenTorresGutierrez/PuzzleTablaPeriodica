/** 
 *  @file Sprite | Puzzle Tabla Periódica
 *  @description Clase que sirve para crear y mover los muñecos
 *  @version 1.0.0
 *  @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 *  @author Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
 *  @author Alejandro Moreno Camacho <amorenocamacho.guadalupe@alumnado.fundacionloyola.net>
 *  @author Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license LGPL-3.0-or-later
 */

/**
 * Clase que sirve para crear y mover los muñecos
 * @param div {HTMLElement} Contenedor donde se almacenan y se mueven los muñecos
 * @param velocidad {int} Pixeles que se moverá hacia la derecha el elemento
 */
export class Sprite{

    constructor(div, velocidad){

        // Contenedor donde se almacenan y se mueven los muñecos
        this.div = div;
        // Muñeco
        this.img = null;
        // URLs de imagenes del muñeco
        this.imagen = [
            'img/personajes/isaac1.png',
            'img/personajes/isaac2.png',
            'img/personajes/isaac3.png'
        ];
        // Índice que indica que imagen está utilizando el muñeco
        this.indice = 0;
        // Posición left del muñeco
        this.x = 0;
        // Velocidad a la que avanza el muñeco
        this.vX = velocidad;
        // Llamar a la función para crear el muñeco
        this.crear();

    }

    /**
     * Crea un nuevo muñeco y le asigna unas propiedades
     */
    crear(){

        // Crear una imagen
        this.img = document.createElement('img');
        // Asignarle la url de la posicion 0 de las imagenes
        this.img.src = this.imagen[0];
        // Añadirle la clase a la imagen
        this.img.classList.add('personaje');
        // CSS
        this.img.style.position = 'absolute';
        this.img.classList.add('personaje');
        this.img.style.left = `${this.x}px`;
        // Añadir la imagen al contenedor
        this.div.appendChild(this.img);

    }

    /**
     * Mueve el muñeco y cambia la url de la imagen para dar un efecto de movimiento real
     */
    mover(){

        // Si la siguiente posición del índice en el que está se sale del array, vuelve al principio, sino, suma 1
        if (this.indice + 1 >= this.imagen.length)
            this.indice = 0;
        else{
            this.img.src = this.imagen[this.indice++];
        }
        // Comprueba que el muñeco no pase los límites de la pantalla (restandole el ancho del muñeco)
        if(this.x < this.div.clientWidth - 30){
            // Se avanzan vX píxeles hacia la derecha
            this.x += this.vX;
            this.img.style.left = `${this.x}px`;
        }else this.borrar();

    }

    /**
     * Borra el muñeco
     */
    borrar(){

        this.img.remove();

    }
}