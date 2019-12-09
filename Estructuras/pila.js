function pila ( tamaño = 0 ){
    var pilaMejorada = null;
    if( tamaño<0 ){
        alert('Sintax Error ');
    }
    if (tamaño === 0){
        pilaMejorada = [];
    }
    else {
        pilaMejorada = new Array(tamaño);
        for (const iterator of pilaMejorada) {
                iterator = '';
        }
    }
    return pilaMejorada;
}

function add (pila, element) {
    var agregado = [...pila, element];
    
}

function extract ( pila ){
    var tam = pila.length;
    if(tam === 0 ){
        return 'Sintax Error';
    }
    pila.splice((tam-1),1 );
}
var prob = pila();
add(prob, 'ade');
add(prob, 'a');
add(prob, 'a');
extract(prob);
console.log(prob);