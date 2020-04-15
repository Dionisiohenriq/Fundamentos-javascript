let dobro = function (a) {return 2 * a}

dobro = (a) => { return 2 * a }

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola1 = function() {return 'Olá'}

let ola2 = () => 'Olá'
let ola3 = _ => 'Olá'

console.log(ola3())
