const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o último elemento do índice do array
console.log(pilotos)

pilotos.push("Verstapen") // adiciona um elemento no array na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do índice do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no primeiro índice do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // primeiro parâmetro = posição do array,
                                // 2 = qtd de elementos a excluir, 3 e 4 = novos elementos para o array
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir de um índice de outro array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)