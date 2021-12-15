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
        this.vista = new Vista(this);
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
	this.vista.tabla = document.getElementById('tabla');
	this.vista.contenedorElementos = document.getElementById('elementos');

	// Atributos modelo
	this.modelo.contenedorElementos = this.vista.contenedorElementos;
	// Llamar a crear elementos
	this.modelo.cargarDatos.call(this.modelo);
	// Asignar id a los divs del grid
	this.modelo.asignarId();

	// COMIENZO DEL JUEGO
	// Creación de elementos
	window.setInterval(this.crear.bind(this), 2000);
	window.setInterval(this.vista.movimiento.bind(this.vista), 80);

	// Aplicar ondrop a todos los divs del grid
	for(const div of this.vista.tabla.children)
	    if(div.classList != 'vacio')
		div.ondrop = this.vista.comprobarElemento.bind(this.vista);

	// Quitar comportamiento por defecto para que se pueda hacer drop
	document.ondragover = function(event) {
	    event.preventDefault();
	};
    }

    /**
     * Crea los elementos (clase modelo y clase vista) y los muñecos
     */
    crear(){

      // Obtener el elemento
      let elementoModelo = this.modelo.obtenerElemento();

      // Llamar a crear muñecos
      this.vista.crearElementos.call(this.vista, elementoModelo);

    }

}

function algo(){
    console.log('hola')
}
let app = new Controlador();
