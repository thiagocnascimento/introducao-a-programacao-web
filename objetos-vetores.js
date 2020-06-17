/* 
const alunos = [
    {
        nome: "Vania",
        nota: 8.2
    },

    {
        nome: "Carla",
        nota: 9.3
    },

    {
        nome: "Eduardo",
        nota: 7.9
    }
]


const media = (alunos[0].nota + alunos[1].nota + alunos[2]) / 3

 
console.log(alunos)
 */

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programaçao",
    endereco: {
        Rua: "Rua Guilherme Ganbala",
        Numero: 260
    }
};

//console.log(`O nome da empresa eh: ${empresa.nome} e está localizada na ${empresa.endereco.Rua} numero ${empresa.endereco.Numero}`)


const dadosProgramador = {
    nome: "Thiago", 
    idade: 20, 
    tecnologias: [
        { nome:"C++", especialidades:"Desktop"},
        { nome:"Pyton", especialidades:"Data Science"},
        { nome:"JavaScript", especialidades:"Web/Mobile"}
    ]
}



console.log(`O usuário ${dadosProgramador.nome} tem ${dadosProgramador.idade} e usa a tecnologia`, dadosProgramador.tecnologias[0])