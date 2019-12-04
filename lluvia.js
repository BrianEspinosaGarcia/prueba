'use strict'
var introUser = new Array();
var introUserPlus = new Array();

//introUser = ["lluvioso", "nublado", "soleado"];
introUser = ["lluvioso", "nublado", "soleado", "lluvioso"];

var umbrellas = 0;

function countUmbrella (introUser, introUserPlus){
    var prob1 =[];
    var prob2 =[];
    var probM = 0;
    var probA =0;
    // Checar si es impar o par
    if((introUser.length %2) > 0){
        introUserPlus = [...introUser, "sunny"];
        
    }else{
        introUserPlus = [...introUser];
        
    }
    // Aqui la variable que debo considerar es introUserPlus con esa trabajare
    prob1 = introUserPlus.map((iterador, index)=>{
        var moor = 0;
        var aft = 0;
        if(index%2 === 0){
            // Si es un mañana (impar)
            if(iterador === "lluvioso" || iterador === "tormentoso"){
                // si el termino impar usa paraguas
                moor = '1m';
            }else{
                // Si no es 
                moor = '0m';
            }
            return moor;
        }else {
            if(iterador === "lluvioso" || iterador === "tormentoso"){
                // si el termino impar usa paraguas
                aft = '1t';
            }else{
                // Si no es 
                aft = '0t';
            }
            return  aft;
        }
    
    }); // Fin del map 

    for (var i= 0; i<(prob1.length/2); i++){
        if((i+1)===prob1.length || (i+1)>prob1.length){

        }else {
            prob2[i] = {
                moorning: prob1[i],
                affter: prob1[i+1]
            }
        }
    }
    console.log(prob2);
    for(var i=0; i<prob2.length; i++){
        if(prob2[i].moorning === '1m'){
            probM += 1;
        }else if( prob2[i].affter === '1t' ){
            probA += 1;
        }
    }
    // Definicion de sombrillas
    if(probA > probM){
        umbrellas = probA - probM;
    }else if( probM > probA){
        umbrellas = probM - probA;
    }
    else if( probA === probM){
        umbrellas = 1;
    }
    console.log(umbrellas);


}
countUmbrella(introUser, introUserPlus);
