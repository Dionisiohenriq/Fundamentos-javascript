//Novo recurso do ECSC a partir de 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Quinze',
        numero: 39
    }
}

const{nome, idade} = pessoa
console.log(nome, idade)

const{nome: n, idade: i} = pessoa
console.log(n, i)

const{sobrenome = 'penha', bemHumorada = true} = pessoa // criando atributos no objeto
console.log(sobrenome, bemHumorada)

const{endereco: {logradouro, numero, cep}} = pessoa // acessando atributos e atributos que não existem em um obj
console.log(logradouro, numero, cep)

const{conta: {ag, num}} = pessoa
console.log(ag, num)


