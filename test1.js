let tamanho;
let cabeceira;

let tamanho1;
let tamanho2;

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function calculaCA(length1, length2){
    let bigger = compareHigherLength(length1, length2) - 40;
    let smaller = compareSmallerLength(length1, length2);
    console.log(`As medidas para o canto alemão são de ${bigger} e ${smaller}`);
}

function compareHigherLength(value1, value2){
    if(value1 > value2){
        return value1;
    } else {
        return value2;
    }
}

function compareSmallerLength(value1, value2){
    if(value1 < value2){
        return value1;
    } else {
        return value2;
    }
}

calculaCA(tamanho1, tamanho2);


// function defineService(){
//     //console.log('Defina o serviço:\n1.Canto Alemão\n2.Medida de Tecido');
//     readline.question('Defina o serviço:\n1.Canto Alemão\n2.Medida de Tecido', service => {
//         ser
//     });
// }

// function switchService(){
//     switch (service) {
//         case 1:
//             calculaCA;
//             break;
        
//         case 2:
//             calculaTec;
//             break;

//         default:
//             break;
//     }
// }

 

// function calculaTec(){
//     readline.question('Para qual tamanho de cama será o trabalho ?', tamanho =>{
//         this.tamanho = tamanho;
//         readline.close;
//     })
    
// }


//const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });