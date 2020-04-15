function Pessoa () {
    this.idade = 0

    const self = this
    setInterval( function (){
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}


new Pessoa

//esse exercício mostra como vincular uma chamada this ao objeto alvo, quando há uma função dentro de uma função.