'use strict'

Array.prototype.esplais = function( index, numDelete, ...itemsForAdd) {
    var primerA = new Array();
    var segundoA = new Array();
    if(isNaN(numDelete) ) {
        return `Sintax Error en ${numDelete} is not a Number`;
    }
    if(numDelete > 0 && numDelete<this.length ) {
        primerA =  this.slice(0, index);   
            if(itemsForAdd.length>0) {
                return segundoA = [primerA, ...itemsForAdd];
            }
            else{
                return primerA;
            }
    }

}




/*  Segundo Codigo 
        for(var i = 1; i<=numDelete;  i++ ){
               this.pop();
            }
      */