/**
 *  @file VistaElemento | Puzzle Tabla Periódica
 *  @description Clase que sirve para interactuar con los elementos de la tabla periódica
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
 * @param velocidad {int} Pixeles que se moverá hacia la derecha el elemento
 */
 export class VistaElemento{

    constructor(div, velocidad){

        // Contenedor donde se almacenan y se mueven los muñecos
        this.div = div;
        // Velocidad a la que avanza el muñeco
        this.vX = velocidad;

    }

    mover(){



    }

 }