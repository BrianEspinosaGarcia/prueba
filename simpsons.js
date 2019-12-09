// Preparado con pruebas unitarias

// ----------- Variables Globales -------------
/* POSIBLES ESCENARIOS */
const empty = [];
// empty
const single = [{name: 'Bart'}];
// Solo el nombre
const several = [{name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'} ];
// Una pareja y un elemento solo
const severalOdd = [{name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Ned Flanders'}, {name: 'MilHouse'} ];
// Se espera la respuesta de un array de objectos impar, con tres nombres solos y dos unidos
const severalEven = [{name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Ned Flanders'}, {name: 'MilHouse'}, {name: 'Bart'} ];
// Se espera la respuesta de un array de objectos impar, con cuatro nombres solos y dos unidos
const notObject = ['bart'];
//Checar si no me mandan un Objeto
// ----------- Propuesta 1 -------------
function list(names) {
    if (names[0] === undefined){
        return '';
    }
    for(let i = 0; i<names.length; i++){
        var prob = names[i];
        if((typeof(prob)) !== 'object'){
            return 'No estas introduciendo un Objeto con la forma correcta';
        }
    }
    //console.log(typeof(names[i]));
    const totalNames = [];

    if (names.length === 0) return '';
    if (names.length === 1) return names[0].name;
    if (names.length === 2) return `${names[0].name} & ${names[1].name}`;

    names.forEach(currentObject => totalNames.push(currentObject.name));

    let initialNames = totalNames.slice(0, totalNames.length - 2).join(', ');
    const lastTwoNames = totalNames.slice(totalNames.length - 2).join(' & ');

    return `${initialNames}, ${lastTwoNames}`;
}

console.log(list(empty));
console.log(list(notObject));
console.log(list(single));
console.log(list(several));
console.log(list(severalOdd));
console.log(list(severalEven));
