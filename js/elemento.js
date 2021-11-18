/**
 *  @file Elemento | Puzzle Tabla Periódica
 *  @description Clase que sirve para crear y mover los elementos de la tabla periódica
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
export class Elemento{

    constructor(div, velocidad){

        // Contenedor donde se almacenan y se mueven los muñecos
        this.div = div;

        // Índice del objeto JSON que se va a cargar
        this.indice = Math.floor(Math.random() * 89);
        // Elemento
        this.elemento = null;
        // Posicion
        this.posicion = null;        
        // Símbolo del elemento
        this.simbolo = null;
        //Nombre del elemento
        this.nombre = null;
        // Color del elemento
        this.color = null;
        // Posición left del muñeco
        this.x = 0;
        // Velocidad a la que avanza el muñeco
        this.vX = velocidad;
        
        // Llamar al método cargar los datos del JSON
        this.cargarDatos();
        // Llamar al método para crear el elemento
        this.crear();

    }

    cargarDatos(){

        // Cargar el objeto JSON
        fetch('./json/puzzle.json')
        .then(response => response.json())
        .then(data => {
            this.posicion = data[this.indice].posicion;
            this.simbolo = data[this.indice].simbolo;
            this.nombre = data[this.indice].nombre;
            this.color = data[this.indice].color;
        });

    }

    crear(){

        console.log(this);
        // Crear el div
        this.elemento = document.createElement('div');
        // CSS
        this.elemento.classList.add('elemento-neon');
        this.elemento.style.left = `${this.x}px`;
        this.elemento.style.color = `var(--${this.color})`;
        this.elemento.style.boxShadow = `inset 0 0 0.5em 0 var(--${this.color}), 0 0 0.5em 0 var(--${this.color})`;

        // Crear simbolo
        let pSimbolo = document.createElement('p');
        let textopSimbolo = document.createTextNode(this.simbolo);
        pSimbolo.appendChild(textopSimbolo);
        this.elemento.appendChild(pSimbolo);

        // Crear nombre
        let pNombre = document.createElement('p');
        let textopNombre = document.createTextNode(this.nombre);
        pNombre.appendChild(textopNombre);
        this.elemento.appendChild(pNombre);

        // Añadir el elemento al contenedor
        this.div.appendChild(this.elemento);

    }

}