function prod(nome, preco, desc = 30/100){

    return {
        nome,
        preco,
        desc: preco - preco * desc
    }

}

console.log(prod('Notebook', 2500))