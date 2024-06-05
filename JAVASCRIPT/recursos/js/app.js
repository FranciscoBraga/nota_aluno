const  cabecalho = document.getElementById("cabecalho")

console.log(cabecalho.value)

function pegarDadosDoAluno(){
let soma = 0
let media = 0
const nome =  document.getElementById("nome").value
let nota1 =   document.getElementById("nota1").value
let nota2 =   document.getElementById("nota2").value
let nota3 =   document.getElementById("nota3").value
let nota4 =   document.getElementById("nota4").value

 nota1 = parseFloat(nota1)
 nota2 = parseFloat(nota2)
 nota3 = parseFloat(nota3)
 nota4 = parseFloat(nota4)
 
 somaNotas(nota1,nota2,nota3,nota4)

}


function somaNotas(primeiraNota, segundaNota,terceiraNota,quartaNota){
    let nota = 3
    let nota1 = primeiraNota
    let nota2 = segundaNota
    let nota3 = terceiraNota
    let nota4 = quartaNota
    if(nota == 4){
        soma = nota1 + nota2+ nota3 + nota4
        console.log(soma)
        media = soma/4
    }
    if(nota == 3){
            soma = nota1 + nota2+ nota3 
            console.log("soma",soma)
            media = soma/3
    }
    if(nota == 2){
            soma = nota1 + nota2
            media = soma/2
     }
}




