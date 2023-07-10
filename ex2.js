//Implemente uma versão simplificada de uma lista de compras usando arrays. A lista deve permitir adicionar novos itens, remover itens e listar todos os itens. Ao adicionar um novo item, o usuário deve inserir o nome do produto e a quantidade desejada. Ao remover um item, o usuário deve especificar o nome do produto. Por fim, ao listar todos os itens, a lista deve exibir o nome do produto e a quantidade em um formato legível.
const readlineSync = require('readline-sync');

const ListaDeCompras = class {
    constructor(itens = [], quantidades = [], produto, quantidade, lista, produtoExcluido, novaLista) {
        this.itens = Array.isArray(itens) ? itens : [itens]
        this.quantidades = Array.isArray(quantidades) ? quantidades : [quantidades]
        this.produto = produto
        this.quantidade = quantidade
        this.lista = lista
        this.produtoExcluido = produtoExcluido
        this.novaLista = novaLista
    }
    
   adicionarItem() {
        while(true) {
            this.produto = readlineSync.question('Que item deseja adicionar à lista? (aperte x para sair) ')

            if(this.produto.toLowerCase() === 'x') {
                break
            }

            this.quantidade = readlineSync.question(`Quantas unidades de ${this.produto} deseja adicionar? `)

            this.itens.push(this.produto)
            this.quantidades.push(this.quantidade)

            this.lista = this.itens.map((item, index) => {
                return [item, this.quantidades[index]]
            })
        }        
        console.log(this.lista)
    }

    removerItem() {
        if (readlineSync.keyInYN('Aperte y se deseja excluir algum item da lista.')) {
            this.produtoExcluido = readlineSync.question("Que item deseja excluir? ")
            
            this.novaLista = this.lista.filter(([item, quantidade]) => item !== this.produtoExcluido)
            console.log("Item excluído. Segue a sua nova lista: " + this.novaLista)
        } 
        else {
            console.log("Ok, você não deseja excluir nada.")
        }
    }
}

const listadecompras = new ListaDeCompras()
listadecompras.adicionarItem()
listadecompras.removerItem()