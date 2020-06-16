const nome = 'Edvania'
const peso = 55
const altura = 1.65
const sexo = 'Masculino'

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`${nome} você tá acima do peso`)
}else {
    console.log(`${nome} você não tá acima do peso`)
}

