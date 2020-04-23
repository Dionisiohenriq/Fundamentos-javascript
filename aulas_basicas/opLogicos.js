/* 
v e v - v
v e f - f
f e ? - f

v ou ? - v
f ou v - v
f ou f - v

v xor v - f
v xor f - v
f xor v - v
f xor f - f

!v -> f
!f - v
*/


function Compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} 
    // Javascript cria um objeto com chave-valor, automaticamente


}

console.log(Compras(true, true))
console.log(Compras(true, false))
console.log(Compras(false, true))
console.log(Compras(false, false))

