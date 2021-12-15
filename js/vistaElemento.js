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

    constructor(vista, contenedorElementos, velocidad, elementoModelo){

        // Vista
        this.vista = vista

        // Contenedor donde se almacenan y se mueven los muñecos
        this.contenedorElementos = contenedorElementos;

        // Datos del elemento del modelo
        this.elementoModelo = elementoModelo;

        // Div que se forma con los datos del elemento
        this.elemento = null;   //HTMLDiv
        // Posicion
        this.posicion = elementoModelo.posicion;
        // Símbolo del elemento
        this.simbolo = elementoModelo.simbolo;
        //Nombre del elemento
        this.nombre = elementoModelo.nombre;
        // Color del elemento
        this.color = elementoModelo.color;

        // Posición left del muñeco
        this.x = 30;
        // Velocidad a la que avanza el muñeco
        this.vX = velocidad;

        // Llamar al método para crear el elemento
        this.crear();
    }

    /**
     * Crea el elemento
     */
    crear(){

        // Crear el div
        this.elemento = document.createElement('div');
        // CSS
        this.elemento.classList.add('elemento-neon');
        this.elemento.style.left = `0px`;
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
        this.contenedorElementos.appendChild(this.elemento);

        // Añadir drag and drop
        this.dragAndDrop();

    }

    /**
     * Mueve el elemento
     */
    mover(){

        // Comprueba que el muñeco no pase los límites de la pantalla (restandole el ancho del elemento)
        if(this.x < this.contenedorElementos.clientWidth - 30){
            // Se avanzan vX píxeles hacia la derecha
            this.x += this.vX;
            this.elemento.style.left = `${this.x}px`;
        }else this.borrar();

    }

    /**
     * Borra el elemento
     */
    borrar(){

        this.vista.eliminarElemento(this);

    }

    /**
     * Drag and Drop de los elementos
     */
    dragAndDrop(){

        this.elemento.setAttribute("draggable", "true");
        this.elemento.ondragstart = this.vista.registraDrag.bind(this.vista, this);

    }

 }
