function buscar() {
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

if(!campoPesquisa) {
    section.innerHTML = "<p>Nenhum modelo foi encontrado. Digite o nome de um modelo de contravaixo!</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let nome = "";
let descricao = "";


for (let dado of dados){

    nome = dado.Nome.toLocaleLowerCase()
    descricao = dado.Descrição.toLocaleLowerCase()

    if(nome.includes(campoPesquisa)||descricao.includes(campoPesquisa)||dado.BaixistasFamosos.includes(campoPesquisa)||dado.AlbunsFamosos.includes(campoPesquisa)) {

        resultados +=`
        <div class="item-resultado">
                 <h2>
                     <a href="#" target="_blank">${dado.Nome}</a> 
                 </h2>
                <p class="descricao-meta">${dado.Descrição}.</p>
                <p class="descrição-meta">QTD Cordas=  ${dado.Cordas}.</p>
                <p class="descrição-meta">Principais Baixistas= ${dado.BaixistasFamosos}.</p>
                <p class="descrição-meta">Albúm Famosos= ${dado.AlbunsFamosos}.</p>
                <a href=${dado.link} target="_blank">wiki desse baixo</a>
        </div>
        `

    }


}

if(!resultados) {
    resultados = "Nenhum modelo foi encontrado"
}

section.innerHTML = resultados
}








