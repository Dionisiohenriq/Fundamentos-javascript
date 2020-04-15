function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// funções arrow tem a vantagem de apontar corretamente para o objeto correto sem a necessidade de nenhum ajuste
