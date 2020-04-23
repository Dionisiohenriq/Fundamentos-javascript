// Cadeia de prototipos (prototype chain)
Object.prototype.atrr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'b', attr3: 'c'}
const filho = {__proto__: pai, attr3: '2'}
console.log(filho.atrr0, filho.attr3, filho.attr1, filho.attr2)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
ferrari.acelerarMais(100)
console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())
console.log(volvo)