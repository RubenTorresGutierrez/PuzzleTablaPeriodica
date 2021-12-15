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
// import {Marcador} from './marcador';

/**
 * Clase modelo que sirve para manejar los diferentes datos que vaya a tener la web
 */
export class Modelo{

    constructor(){

        // Array de objetos de la clase Elemento
        this.elementos = [];
        // Array de índices de los elementos ya creados
        this.indices = [];
	// Marcador que gestiona la puntuación
	// this.marcador = new Marcador();

    }

    /**
     * Carga los datos del JSON en un array de objetos de la clase Elemento
     */
    cargarDatos(){

        // Cargar el objeto JSON
        fetch('./json/puzzle.json')
        .then(respuesta => respuesta.json())
        .then(datos => {

            // Crear un objeto Elemento en el array de elementos
            for(let elemento of datos)
                this.elementos.push(new Elemento(
                    elemento.posicion,
                    elemento.simbolo,
                    elemento.nombre,
                    elemento.color
                ));

        });

    }

    /**
     * Obtiene un elemento de manera aleatoria pero no repetido
     */
    obtenerElemento(){

        // Comprobar si el array de índices está lleno
        //if(this.indices.length == 90)
            //this.indices = [];

        // Crear índice aleatorio del elemento que se va a crear
        // y comprobar si ya está creado
        let indice;
        do{

            // Índice del objeto JSON que se va a cargar
            indice = Math.floor(Math.random() * 89) + 1;

        }while(this.indices.includes(indice))

        // Añadir el índice al array de índices
        this.indices.push(indice);

        return this.elementos[indice];

    }

    /**
     * Elimina el objeto que recibe de controlador, que a su vez este recibe de vista
     * @param {Object} elemento
     */
    eliminarElemento(elemento){

        for(let i = 0; i < this.elementos.length; i++)
            if(this.elementos[i] == elemento)
                this.indices.splice(i, 1);

    }

    asignarId(){

        let divs = document.querySelectorAll('.tabla div')
        let contador = 0
        for (let div of divs)
          if(!div.classList.contains('vacio'))
            div.setAttribute('data-value', contador++)

    }

}
