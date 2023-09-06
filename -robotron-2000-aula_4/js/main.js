const controle = document.querySelector("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}
var livros = [

    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco: 31.92},

    {titulo: "Introdução e boas práticas em UX Design",  
    autor: "Fabricio Teixeira", 
    genero: "UX & UI", 
    editora: "Casa do código", 
    preco: 31.92},

    {titulo: "Scrum",  
    autor: "Rafael Sabbagh", 
    genero: "Métodos Ágeis", 
    editora: "Casa do código", 
    preco: 31.92},
]

console.log(livros[0]["autor"])
console.log(livros[0].autor)    
function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }