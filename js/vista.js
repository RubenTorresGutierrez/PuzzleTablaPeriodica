/**
 *  @file Vista | Puzzle Tabla Periódica
 *  @description Clase vista que sirve para manejar el diseño de la web
 *  @version 1.0.0
 *  @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 *  @author Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
 *  @author Alejandro Moreno Camacho <amorenocamacho.guadalupe@alumnado.fundacionloyola.net>
 *  @author Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license LGPL-3.0-or-later
 */

 'use strict'

 // IMPORTACIONES
 import {Sprite} from './sprite.js';

 /**
  * Clase vista que sirve para manejar el diseño de la web
  */
export class Vista{

    constructor(){

        this.contenedorElementos = null;
        this.imagen = [];
        this.sprites = []

    }

    /**
     * Crea un objeto de la clase Sprite() dentro del array sprites[]
     */
    crearElementos(){

        this.sprites.push(new Sprite(this.contenedorElementos))

    }

    /**
     * Llama al método mover() de todos los objetos de la clase Sprite existentes
     */
    movimiento(){

        // Llamar a la función para mover el muñeco
        for(let i = 0; i<this.sprites.length;i++)
            this.sprites[i].mover();

    }

}
