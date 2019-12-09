class Pila {
    

    constructor (){
        this.arr = [];
    }
     agregaDato (element) {
        this = [...this, element];
    }
     extraerPila (){
        var fin = this.length;

        var outElement = this[fin-1];
        this.splice((fin-2),(fin-1));
    }
}

const pila = new Pila();
//pila.agregarDato ('Hola');
console.log(pila);