const nome = 'Pedro'
const idade = 95
const tempoContribuicao = 20
const sexo = 'F'

const calculoContribuicao = idade + tempoContribuicao

console.log(' A regra pra vc poder se aposentar eh:\n para homem calculoContibuiçao tem q ser maior igual 95 anos e tempo de contribuiçao >= 35 \n ')

console.log(' Mulheres.. calculoContibuiçao tem q ser maior igual 85 anos e tempo de contribuiçao >= 30')



if(sexo == 'F' && calculoContribuicao >= 85 && tempoContribuicao >= 30 || sexo == 'M' && calculoContribuicao >= 95 && tempoContribuicao >= 35){
    console.log(` ${nome} Parabéns, vc pode se aposentar`) 
}else{
    console.log(` ${nome} Infelizmente, vc nao tem tempo pra se aposentar`)
}

   