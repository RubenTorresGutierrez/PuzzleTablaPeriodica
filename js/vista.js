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
 import {VistaElemento} from './vistaElemento.js';

 /**
  * Clase vista que sirve para manejar el diseño de la web
  */
export class Vista{


    constructor(controlador){

        // Controlador
        this.controlador = controlador;

	// Tabla donde se encajan los elementos
	this.tabla = null;
        // Contenedor donde se almacenan y se mueven los muñecos
        this.contenedorElementos = null;  //HTMLDiv

        // Array de objetos de la clase Sprite
        this.sprites = [];
        // Array de objetos de la clase VistaElemento
        this.elementos = [];


        this.elementoAgarrado = null;

    }

    /**
     * Crea un objeto de la clase Sprite() dentro del array sprites[]
     */
    crearElementos(elementoModelo){

        this.elementos.push(new VistaElemento(this, this.contenedorElementos, 5, elementoModelo));
        this.sprites.push(new Sprite(this.contenedorElementos, 5));

    }

    registraDrag(vistaElemento){

      this.elementoAgarrado = vistaElemento
      //this.elementoAgarrado.elemento.style.display = 'none'

    }

    comprobarElemento(e){

	     console.log('Elemento: '+this.elementoAgarrado.posicion);
       console.log('Div: '+e.target.getAttribute('data-value'));
       if(this.elementoAgarrado.posicion == e.target.getAttribute('data-value')){
         console.log('Bien')
       }

    }

    /**
     * Llama al método mover() de todos los objetos de la clase Sprite existentes
     */
    movimiento(){

        // Llamar a la función para mover los muñecos
        for(let i = 0; i<this.sprites.length;i++){
            this.sprites[i].mover();
            this.elementos[i].mover();
        }
    }

    eliminarElemento(elemento){

        this.controlador.modelo.eliminarElemento(elemento.elementoModelo);
        elemento.elemento.remove();

    }z
}
