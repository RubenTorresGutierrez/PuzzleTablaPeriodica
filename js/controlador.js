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

      // Atributos modelo
      this.modelo.contenedorElementos = this.vista.contenedorElementos;

      // COMIENZO DEL JUEGO
      // Creación de elementos
      window.setInterval(this.crear.bind(this), 2000);
      window.setInterval(this.vista.movimiento.bind(this.vista), 100);


      //PRUEBA___________________
      ponerId();

      function ponerId(){
        let divs = document.querySelectorAll('.tabla div')
        let contador = 0
        for (let div of divs)
          if(!div.classList.contains('vacio'))
            div.setAttribute('data-value', contador++)
      }

      function prueba(){
        document.getElementsByClassName('tabla')[0].addEventListener('click', function(e){
            /*console.log(document.querySelectorAll('.tabla div'))*/
        })
      }
    }

    crear(){

      this.vista.crearElementos.call(this.vista);
      this.modelo.cargarDatos.call(this.modelo);

    }
}

let app = new Controlador();
