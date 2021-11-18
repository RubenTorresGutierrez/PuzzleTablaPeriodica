'use strict'


class Elementos{

    constructor(){

        this.indice = 1;
        this.nombre = 2;
        this.cargarDatos();
        console.log(this);
        console.log(this.nombre);

    }

    cargarDatos(){

        fetch('./json/puzzle.json')
        .then(response => response.json())
        .then(data => {
            this.posicion = data[this.indice].posicion;
            this.simbolo = data[this.indice].simbolo;
            this.nombre = data[this.indice].nombre;
            this.color = data[this.indice].color;
            console.log(this);
        });
        console.log(this);

    }

}

class Element{

    constructor(data){

        this.index = Math.floor(Math.random() * 89);
        this.position;
        this.symbol;
        this.name;
        this.color;
    }

    loadData(data){

        this.position = data.posicion;
        this.symbol = data.simbolo;
        this.name = data.nombre;
        this.color = data.color;
        console.log(this.symbol);
    }
}

const res = await fetch('./json/puzzle.json');
const data = await res.json();


const elements = [];
elements.push(new Element())
console.log(elements[0].index);
elements[0].loadData(data[elements[0].index])
// data.forEach(singleData => {
//     const singleElement = new Element();
//     singleElement.loadData(singleData);
//     elements.push(singleElement)
// });

// console.log(elements);