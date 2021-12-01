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
 * @param posicion {Number} Posicion donde se coloca el elemento en el grid
 * @param simbolo {String} Simbolo del elemento
 * @param nombre {String} Nombre del elemento
 * @param color {String} Color que tiene el elemento
 */
export class Elemento{

    constructor(posicion, simbolo, nombre, color){

        // Posicion
        this.posicion = posicion;
        // Símbolo del elemento
        this.simbolo = simbolo;
        //Nombre del elemento
        this.nombre = nombre;
        // Color del elemento
        this.color = color;

    }

}
