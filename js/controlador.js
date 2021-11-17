/**
 *  @file Controlador | Puzzle Tabla Periódica
 *  @description Controlador principal del juego
 *  @version 1.0.0
 *  @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 *  @author Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
 *  @author Alejandro Moreno Camacho <amorenocamacho.guadalupe@alumnado.fundacionloyola.net>
 *  @author Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license LGPL-3.0-or-later
 */

'use strict'

// IMPORTACIONES
import {Vista} from './vista.js';
import {Modelo} from './modelo.js';

/**
 * Controlado principal del juego
 */
class Controlador{

    constructor(){

        // OBJETOS
        this.vista = new Vista();
        this.modelo = new Modelo();

        // HTML
        this.main = null;

        // INICIAR
        window.onload = this.iniciar.bind(this);

    }

    /**
     * Realiza la ejecución principal del programa
     */
    iniciar(){
      // ATRIBUTOS
      // Atributos controlador
      this.main = document.getElementsByTagName('main')[0];

      // Atributos vista
      this.vista.contenedorElementos = document.getElementById('elementos');

      // COMIENZO DEL JUEGO
      // Creación de elementos
      window.setInterval(this.vista.crearElementos.bind(this.vista), 2000);
      window.setInterval(this.vista.movimiento.bind(this.vista), 100);

      //PRUEBA___________________
      window.onload = prueba();
      function prueba(){
        document.getElementsByClassName('tabla')[0].addEventListener('click', function(e){
          let child_element  = document.getElementsByTagName('div')[0];
          let parent_element = child_element.parentNode;
          let i = Array.prototype.indexOf.call(parent_element.children, child_element);
            GetGridElementsPosition(i);
        });
      };

      function GetGridElementsPosition(index){
        console.log(index)
        const colCount = document.getElementsByClassName('tabla').style.cssText= 'grid-template-columns'.split(' ').length;

        const row = Math.floor(index / colCount);
        const col = index % colCount;

        console.log(row);
        console.log(col);

        return { row: row, column: col } ;
      }
    }
}

let app = new Controlador();
