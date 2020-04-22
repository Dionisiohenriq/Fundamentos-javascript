const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo : 'V40',
    velMax : 200 
}
console.log(ferrari.__proto__) // para acessar um protótipo de um objeto usa-se o '__proto__"
console.log(ferrari.__proto__ === Object.prototype) // para acessar o protótipo de uma função usa-se '.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)