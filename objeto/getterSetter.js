const sequencia = {
    _valor: 1, // convenção
    get valor() {return this._valor++},
    set valor(valor){
        valor > this._valor ? this._valor = valor : console.log('Valor abaixo do valor atual')
    } 
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)