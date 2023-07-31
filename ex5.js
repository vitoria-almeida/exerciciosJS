//Retorne os valores da variável n (número aleatório de 1 a 50) e explicite os números que são múltiplos de 3 ou 5 e de 3 e 5

const n = Math.floor(Math.random() * 50) 

const func = () => {
    console.log(`O número é: ${n}:`)

    for (let i = 1; i <= n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log(i + ' Múltiplo de 3 e 5')
        } 
        else if (i%3 === 0 && i%5 !== 0) {
            console.log(i + ' Múltiplo de 3')
        } 
        else if (i%3 !== 0 && i%5 === 0) {
            console.log(i + ' Múltiplo de 5')
        } 
        else console.log(i)
    }
}
func()