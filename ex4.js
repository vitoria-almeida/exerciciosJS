//Crie um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não. Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo. Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados.
// O programa deverá imprimir, por exemplo:
// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho

const readlineSync = require('readline-sync');

function listaDeCompras() {
    let adicionarItem = 'sim'
    let frutas = []
    let doces = []
    let congelados = []
    let laticinios = []   

    while(adicionarItem === 'sim') {
        adicionarItem = readlineSync.question('Digite "sim" se deseja adicionar um item na lista: ')

            if(adicionarItem !== 'sim') {
                console.log('programa finalizado')
                break;
            }

        let addComida = readlineSync.question('Qual produto deseja adicionar? ')
        let addCategoria = readlineSync.question('Este produto se encaixa em qual das categorias a seguir: frutas, doces, congelados, laticinios? ')

        if(addCategoria === 'frutas') {
            frutas.push(addComida)
        } else if(addCategoria === 'doces') {
            doces.push(addComida)
        } else if(addCategoria === 'congelados') {
            congelados.push(addComida)
        } else if(addCategoria === 'laticinios') {
            laticinios.push(addComida)
        } else {
            console.log('categoria não encontrada.')
        }           
      }  
      
    console.log('Lista de Compras: ')
      
    const listaFrutas = frutas.join(', ')
    console.log('  Frutas: ' + listaFrutas)

    const listaDoces = doces.join(', ')
    console.log('  Doces: ' + listaDoces)
    
    const listaCongelados = congelados.join(', ')
    console.log('  Congelados: ' + listaCongelados)
    
    const listaLaticinios = laticinios.join(', ')
    console.log('  Laticinios: ' + listaLaticinios)
      
}

listaDeCompras()