
function classificaAluno(notasAlunos){

    let notaCorrigida = arredondarNota(notasAlunos)
    if(notaCorrigida >= 40){
        console.log(`Aluno aprovado com nota: ${notaCorrigida}`)
    }else{
        console.log(`Aluno reprovado com nota: ${notaCorrigida}`)
    }
}

function arredondarNota(notasAlunos){

    if(notasAlunos % 5 > 2){
        return notasAlunos + (5 - (notasAlunos % 5))
    }else{
        return notasAlunos
    }


}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
