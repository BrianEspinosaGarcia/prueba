
/*Este ya esta con PRUEBAS UNITARIAS  */

// Casos para las pruebas 

var cadenaUser = ["b","c","d","f"]; //Falta la primera del arreglo
var cadenaUser2 = ['a', 'c', 'd', 'e', 'f'];// Falta  la segunda del arreglo
var cadenaUser3 = ['a', 'b', 'c', 'e', 'f'];// Falta uno de  en medio
var cadenaUser4 = ['a', 'b', 'c', 'd', 'f'];// Falta el ultimo
var cadenaUser5 = ['a', 'b', 'c', 'd', 'e'];// No falta ninguno, El arreglo esta completo
var cadenaUser6 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];// Un arreglo mas largo
var cadenaUser7 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'x'];
// Con un  una letra repetida, pero es la ultima, Es el tamaño del abcdario
// Posibles errores 
var cadenaUser8 = ['as', 'b', 'c', 'd', 'f']; // Si un caracter  tiene mas de un elemento- NO HACER NADA/ ALERTA
// regresar  /Las letras deben ser separadas/
var completo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Regresar esta completo
var cadenaNumero = [9, 'b', 'c', 'd', 'e'];
var cadenaNumeroDos = ['a', 'b', 'c', 'd', 8];
// Regresar / al menos un numero esta siendo introducido en el abecedario /






    function findMissingLetter(array) {

        /*  Write the minimum required code  PRUEBAS UNITARIAS    */
        // Cuando al menos un elemento del arreglo tiene mas de un caracter
        for ( let i = 0; i<array.length; i++){
            if(array[i].length >1)
                return 'Estas introduciendo letras de mas';
                else if(!isNaN(array[i]))
                return 'Alguno no  pertenece al "abecedario"';
        }
        //Fin de exclusion de un caracter 
        //Cuando el abecedario esta completo
        if( array.length >=26){
            return('El abecedario esta completo');
        }
        var mayus = false;
        var min = '';
        if(array[0].charCodeAt(0) >=65 && array[0].charCodeAt(0) <= 90  ){
            mayus = true;
            let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
            let first = abc.indexOf(array[0]);
            //console.log( abc.indexOf(first));

            let tamUser = array.length;

            let comp = abc.splice(first, (tamUser));
            /*hasta aqui ya tenemos el pedazo de abcdario correcto */
            // coomparar con el arreglo del usuario si es igual al correcto

            let letra = comp.filter((item, index)=> {
                if(item === array[index]){
                    return false;
                }else{
                return true;
                }
            });
        
        return   letra[0]  ;
            
        }
        
        /*var min = array.join('').toLowerCase();
        return min;*/
        var abc = "abcdefghijklmnopqrstuvwxyz".split('');
        var first = abc.indexOf(array[0]);
        //console.log( abc.indexOf(first));

        var tamUser = array.length;

        var comp = abc.splice(first, (tamUser));
        /*hasta aqui ya tenemos el pedazo de abcdario correcto */
        // coomparar con el arreglo del usuario si es igual al correcto

        var letra = comp.filter((item, index)=> {
            if(item === array[index]){
                return false;
            }else{
            return true;
            }
        });
        
        return   letra[0]  ;
        
    }
console.log(findMissingLetter(cadenaNumeroDos));