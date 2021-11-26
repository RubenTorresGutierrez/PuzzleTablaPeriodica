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

    
    constructor(){
        
        this.contenedorElementos = null;
        this.imagen = [];
        this.sprites = [];
        this.elementos = [];

    }

    /**
     * Crea un objeto de la clase Sprite() dentro del array sprites[]
     */
    crearElementos(){

        this.sprites.push(new Sprite(this.contenedorElementos, 5));
        this.elementos.push(new VistaElemento(this.contenedorElementos, 5));
        
    }

    /**
     * Llama al método mover() de todos los objetos de la clase Sprite existentes
     */
    movimiento(){

        // Llamar a la función para mover los muñecos
        for(let i = 0; i<this.sprites.length;i++){
            this.sprites[i].mover();
            //this.elementos[i].mover();
        }

    }

}


// FALTA INTEGRARLO
// let img=document.getElementsByTagName("img")[0];
// img.onmousedown = draganddrop;

function draganddrop(){

    /*  Para arrastar el elemento sin errores. */
    img.ondragstart = function(){
        return false;
    }

    img.style.position = "absolute";
    img.style.zIndex = "200";

    /*Posicion respecto al body.*/
    document.body.append(img);

    /*Mover la imagen.*/
    mover(event.pageX, event.pageY);
    function mover(x, y){
        img.style.left = `${x-img.offsetWidth/2}px`;
        img.style.top = `${y-img.offsetHeight/2}px`;
    }

    function movimiento(e){
        mover(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', movimiento);

    /*Eliminamos el evento.*/
    img.onmouseup=function(){
        document.removeEventListener('mousemove', movimiento);
        img.onmouseup=null;
    }
}
