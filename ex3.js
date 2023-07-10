//Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo). Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas. No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

const readlineSync = require('readline-sync');

function qualEONumero() {
    let numero = Math.floor(Math.random() * 10) 
    let chances = 3
    
    while (chances !== 0) {
        let tentativa = readlineSync.question(`Qual e o numero? Voce so tem ${chances} chance(s) `)

        if(tentativa == numero) {
            console.log(`Parabens! O numero era ${numero}`)
            break
        }

        chances--
    }

    if (chances === 0) {
        console.log(`Chances esgotadas, o número era ${numero}`)
    }
}

qualEONumero()