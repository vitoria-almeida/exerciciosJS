//Dado um array arr = [3, 3, 4, 7, 8], calcule a soma de cada combinação de 3 possível, e retorne apenas a quantidade de elementos que forem divisíveis por 5.

const array = [3, 3, 4, 7, 8]
const d = 5

function getTripletCount() {
    const triplets = []
    const sumTriplets = []
    const resultDivisible = []

    //i -> find first element, j - > find second element, k -> find third element 
    //combination results triplets
    //sum results the sum of the three indexes
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {                   
            for (let k = j + 1; k < array.length; k++) {  
                const combination = [array[i], array[j], array[k]]                
                const sum = array[i] + array[j] + array[k]
                
                //adding elements to transform them in elements of an unique array
                sumTriplets.push(sum);

                //finding out which elements are divisible by 5
                if (sum % d === 0) {
                    resultDivisible.push(sum)
                }
            }
        }
    } 
    //result
    console.log(resultDivisible)
    console.log(resultDivisible.length + " elements.")
}

getTripletCount()