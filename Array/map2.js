const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

// map recebe como parâmetro uma função que modifica todos elementos de um array, retorna um novo array
// não modifica o primeiro array
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

