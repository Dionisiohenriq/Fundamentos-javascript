const aprovados = ['Agatha', 'Algo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array) { // função foreach recebe: nome, indice e o array
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

const exibirAprovados = aprovado => console.log(`${aprovado}`)
aprovados.forEach(exibirAprovados)

