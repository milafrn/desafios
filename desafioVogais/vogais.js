let frase = 'co que ota frase';

// Desafio 02
// MOSTRAR AS VOGAIS INVERTIDAS(DE TRAS PARA FRENTE). E QUANTAS CONSOANTES TEM.


let contadorConsoante = 0;
const array = [];
for (let index = 0; index < frase.length; index++) {
    const posicaoLetra = [frase.length - index - 1]
    // console.log('Meu index2: ', frase.length - index - 1);
    // console.log('Meu index: ', index)
    if(frase[posicaoLetra] == 'a'){
        array.push('a');
    }else if(frase[posicaoLetra] == 'e'){
        array.push('e');
    }else if(frase[posicaoLetra] == 'i'){
        array.push('i');
    }else if(frase[posicaoLetra] == 'o'){
        array.push('o');
    }else if(frase[posicaoLetra] == 'u'){
        array.push('u');
    }else if(frase[posicaoLetra] == ' '){
       
    }else{
        contadorConsoante++;
        // console.log(contadorConsoante)
    }
}


console.log(`${array} Tem ${contadorConsoante} Consoantes`);
console.log('array normal: ', array.reverse());
// console.log('finalizou!')







// Desafio 01

// let contador = 0
// let vogais = [];
// for(vogal of frase){
//     if(vogal == 'a'){
//         contador++
//         vogais.push('a');
//     }
//     if(vogal == 'e'){
//         contador++
//         vogais.push('e');
//     }
//     if(vogal == 'i'){
//         contador++
//         vogais.push('i');
//     }
//     if(vogal == 'o'){
//         contador++
//         vogais.push('o');
//     }
//     if(vogal == 'u'){
//         contador++
//         vogais.push('u');
//     }
// }

// console.log(contador,vogais);

