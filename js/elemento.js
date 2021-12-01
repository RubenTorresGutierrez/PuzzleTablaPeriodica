/**
 *  @file Elemento | Puzzle Tabla Periódica
 *  @description Clase que sirve para crear los elementos de la tabla periódica
 *  @version 1.0.0
 *  @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 *  @author Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
 *  @author Alejandro Moreno Camacho <amorenocamacho.guadalupe@alumnado.fundacionloyola.net>
 *  @author Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license LGPL-3.0-or-later
 */

'use strict'

/**
 * Clase que sirve para crear y mover los elementos
 * @param div {HTMLElement} Contenedor donde se almacenan y se mueven los elementos
 * @param posicion {Int} Posicion donde se coloca el elemento en el grid
 * @param simbolo {String} Simbolo del elemento
 * @param nombre {String} Nombre del elemento
 * @param color {String} Color que tiene el elemento
 */
export class Elemento{

    constructor(div, posicion, simbolo, nombre, color){

        // Contenedor donde se almacenan los muñecos
        this.div = div;

        // Elemento
        this.elemento = null;
        // Posicion
        this.posicion = posicion;
        // Símbolo del elemento
        this.simbolo = simbolo;
        //Nombre del elemento
        this.nombre = nombre;
        // Color del elemento
        this.color = color;
        
        // Posición left del muñeco
        this.x = 30;

        // Llamar al método para crear el elemento
        this.crear();

    }

    crear(){

        // Crear el div
        this.elemento = document.createElement('div');
        // CSS
        this.elemento.classList.add('elemento-neon');
        this.elemento.style.left = `0px`;
        this.elemento.style.color = `var(--${this.color})`;
        this.elemento.style.boxShadow = `inset 0 0 0.5em 0 var(--${this.color}), 0 0 0.5em 0 var(--${this.color})`;

        // Crear simbolo
        let pSimbolo = document.createElement('p');
        let textopSimbolo = document.createTextNode(this.simbolo);
        pSimbolo.appendChild(textopSimbolo);
        this.elemento.appendChild(pSimbolo);

        // Crear nombre
        let pNombre = document.createElement('p');
        let textopNombre = document.createTextNode(this.nombre);
        pNombre.appendChild(textopNombre);
        this.elemento.appendChild(pNombre);

        // Añadir el elemento al contenedor
        this.div.appendChild(this.elemento);

    }
    borrar(){
      this.elemento.remove();
    }

}
