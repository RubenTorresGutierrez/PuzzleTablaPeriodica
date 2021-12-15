/**
 *  @file Marcador | Puzzle Tabla Periódica
 *  @description Marcador que gestiona la puntuación del juego
 *  @version 1.0.0
 *  @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 *  @author Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
 *  @author Alejandro Moreno Camacho <amorenocamacho.guadalupe@alumnado.fundacionloyola.net>
 *  @author Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license LGPL-3.0-or-later
 */

'use strict'

export class Marcador{

    constructor(){

	this.puntuacion = 0;

    }

    acertarElemento(){

	this.puntuacion++;

    }

    fallarElemento(){

	this.puntuacion--;

    }

}
