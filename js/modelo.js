/**
 *  @file Modelo | Puzzle Tabla Periódica
 *  @description Clase que sirve para manejar los diferentes datos que vaya a tener la web
 *  @version 1.0.0
 *  @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 *  @author Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
 *  @author Alejandro Moreno Camacho <amorenocamacho.guadalupe@alumnado.fundacionloyola.net>
 *  @author Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license LGPL-3.0-or-later
 */

 'use strict'

 import {Elemento} from './elemento.js';

/**
 * Clase modelo que sirve para manejar los diferentes datos que vaya a tener la web
 */
export class Modelo{

    constructor(){

        this.contenedorElementos = null;
        this.elementos = [];

    }

    cargarDatos(){

        // Cargar el objeto JSON
        fetch('./json/puzzle.json')
        .then(respuesta => respuesta.json())
        .then(datos => {

            // Índice del objeto JSON que se va a cargar
            let indice = Math.floor(Math.random() * 89) + 1;

            // Crear un objeto Elemento en el array de elementos
            this.elementos.push(new Elemento(
                this.contenedorElementos,
                datos[indice].posicion,
                datos[indice].simbolo,
                datos[indice].nombre,
                datos[indice].color
            ));

        });

    }

    asignarId(){

        let divs = document.querySelectorAll('.tabla div')
        let contador = 0
        for (let div of divs)
          if(!div.classList.contains('vacio'))
            div.setAttribute('data-value', contador++)

    }

}
