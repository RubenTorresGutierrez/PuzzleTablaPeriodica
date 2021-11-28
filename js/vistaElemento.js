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

    constructor(div, velocidad, indice){
        // Contenedor donde se almacenan y se mueven los muñecos
        this.div = div;
        this.sw = 1;
        this.indice = indice;
        this.x = 28;
        // Velocidad a la que avanza el muñeco
        this.vX = velocidad;
    }

    mover(){
      this.element = document.getElementsByClassName('elemento-neon')[this.indice];
      // Comprueba que el muñeco no pase los límites de la pantalla (restandole el ancho del muñeco)
        if(this.x < (this.div.clientWidth - 95)){
            // Se avanzan vX píxeles hacia la derecha
            this.x += this.vX;
            if(this.sw==0)
              this.element.style.left = `${this.x}px`;
            this.sw=0;
        }else {this.borrar()};

    }

    /**
     * Borra el muñeco
     */
    borrar(){

          this.element.remove();
    }

 }
