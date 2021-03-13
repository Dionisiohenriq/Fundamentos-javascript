Array.prototype.forEach2 = function(callBack) {
    
    for(let i = 0; i < this.length; i++){

        callBack(this[i], i, this)

    }

}

const aprovados = ['Agatha', 'Algo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) { // função forEach recebe: nome, indice e o array
    console.log(`${indice + 1}) ${nome}`)
    // console.log(array)
})
