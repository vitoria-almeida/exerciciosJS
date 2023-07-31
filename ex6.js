//Dado um array de produtos, retorne os itens que possuem as 3 primeiras letras iguais ao item da searchString

const products = ['casa', 'carro', 'camera', 'casaco', 'corrimao', 'carma', 'carvao', 'carmed', 'carpete'];
let searchString = 'carpete';

function searchSimilarItems() {
  //Filtra os itens do array que possuem as primeiras três letras iguais à string de busca
  const filteredItems = products.filter(item => item.slice(0, 3).toLowerCase() === searchString.slice(0, 3).toLowerCase())

  //Itens em ordem alfabética
  const sortedItems = filteredItems.sort()

  console.log(`Itens do array com as primeiras três letras iguais a "${searchString}":`)
  console.log(sortedItems)
}

searchSimilarItems()