const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3))

console.log(escola.substr(1))
console.log(escola.substr(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\S/g, 'f')) // ou o caractere para ser substituído

console.log('Ana, Maria, Pedro'.split(/,/)) // ou .split(",") para gerar um array a partir de uma String




