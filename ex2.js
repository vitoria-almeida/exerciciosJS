//Implemente uma versão simplificada de uma lista de compras usando arrays. A lista deve permitir adicionar novos itens, remover itens e listar todos os itens. Ao adicionar um novo item, o usuário deve inserir o nome do produto e a quantidade desejada. Ao remover um item, o usuário deve especificar o nome do produto. Por fim, ao listar todos os itens, a lista deve exibir o nome do produto e a quantidade em um formato legível.
var readlineSync = require('readline-sync');

function ListaDeCompras() {
    let itens = []
    let quantidades = []

    let produto = ''
    var quantidade = ''

    this.adicionarItem = adicionarItem
    this.removerItem = removerItem

    function adicionarItem() {
        while(true) {
            produto = readlineSync.question('Que item deseja adicionar à lista? (aperte x para sair) ')

            if(produto.toLowerCase() === 'x') {
                break
            }

            quantidade = readlineSync.question(`Quantas unidades de ${produto} deseja adicionar? `)

            itens.push(produto)
            quantidades.push(quantidade)

            lista = itens.map((item, index) => {
                return [item, quantidades[index]]
            })
        }        
        console.log(lista)
    }

    function removerItem() {
        if (readlineSync.keyInYN('Aperte y se deseja excluir algum item da lista.')) {
            excluirItem = readlineSync.question("Que item deseja excluir? ")
            
            novaLista = lista.filter(([item, quantidade]) => item !== excluirItem)
            console.log("Item excluído. Segue a sua nova lista: " + novaLista)
        } 
        else {
            console.log("Ok, você não deseja excluir nada.")
        }
    }
}

const listadecompras = new ListaDeCompras()
listadecompras.adicionarItem()
listadecompras.removerItem()