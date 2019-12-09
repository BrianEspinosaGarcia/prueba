var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];




function createPhoneNumber(numbers){
    const arrP = numbers.slice(0, 3).join('');
    const arrS = numbers.slice(3, 6).join('');
    const arrT = numbers.slice(5).join('');
    
    return `(${arrP}) ${arrS}-${arrT} `;
    
}
console.log(createPhoneNumber(numbers));