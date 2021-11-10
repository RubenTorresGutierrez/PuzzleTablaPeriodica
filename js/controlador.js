/** controlador.js
 *  Puzzle Tabla Periódica | V1.0.0
 *  @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 *  @author Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
 *  @author Alejandro Moreno Camacho <amorenocamacho.guadalupe@alumnado.fundacionloyola.net>
 *  @author Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
 *  @license GNU GPLv3
 */

'use strict'

// IMPORTACIONES
import {Vista} from './vista.js';
import {Modelo} from './modelo.js';

class Controlador{

    constructor(){

        this.vista = new Vista();
        this.modelo = new Modelo();
        this.main = null;
        window.onload = this.iniciar.bind(this);

    }

    iniciar(){

        this.main = document.getElementsByTagName('main');
        this.vista.crearElementos();

    }

}

let app = new Controlador();