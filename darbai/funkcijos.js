function add(a,b) {
    return console.log(a+b)
}
add(5,5)


 //ar yra lyginis
function even(number) {
    return  console.log(number % 2 === 0)  
}
even(7)

//atvaizduoja sakini
function greeting(name) {
    console.log(`Labas ${name}` )
}
greeting("Rasa")


function squereValues(array) {
    return array.map(item => item*item)
}
let array =[5,6,10]

console.log(array);

let newasd =squereValues(array);
console.log(newasd)

//suranda nurodytus skaicius
function sliceArray(array, start, end) {
    return array.slice(start, end)
}
console.log(sliceArray([1,5,74,12,100],2,4))

//skaiciu padidina dvigubai
function name(number) {
    return (number*2)
}
console.log(name(9))

//grazina didziausia skaiciu
function number(arr) {
    return Math.max(...arr)
}
console.log(number([9,10,50]))

//skaiciuoja simbolius tekste
function simbols(text) {
   return console.log(text.length) 
}
simbols('zuikis baltas')

//grazina pirma didziaja raide
function findBigLetter(raide) {

   return  raide.split('').filter(raide => raide === raide.toUpperCase()).join('')
   
}
console.log(findBigLetter ('namasKeliasmonitorius'))

//patikrina ar duotas skaicius yra teigimas
function number(a) {
    if(a >= 0){
        return'teigiamas'
    }else{
       return 'neigiamas'
    }
}
console.log(`Sis skaicius yra ${number(-5)}`);
console.log(`Sis skaicius yra ${number(5)}`);
console.log(`Sis skaicius yra ${number(0)}`);


//grazina masyvo pirma elementa
function getFirstElement(masyvas) {
    return masyvas[0]
}
console.log(getFirstElement([3,4,2,1,3]))

//skaiciuoja masyvo skaiciu suma
function sum(masyvas) {
    let suma =0;
    for(let i=0; i<masyvas.length; i++) {
        suma += masyvas[i];    
    }
    return suma;
}
console.log(sum([1,2,3,4,5]))