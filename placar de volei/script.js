//Pega o que o usuario digitou e guarda nas variaveis
const nomeTimeA = prompt("Digite o nome do time A: ");
const nomeTimeB = prompt("Digite o nome do time B: ");

let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;

//variaveis com elementos html
const nomeTimeA_html = document.getElementById("nomeTimeA");
const nomeTimeB_html = document.getElementById("nomeTimeB");
const pontuacaoA_html = document.getElementById("pontuacaoA");
const pontuacaoB_html = document.getElementById("pontuacaoB");
const setA_html = document.getElementById("setA");
const setB_html = document.getElementById("setB");
//atribui o que foi digitado pelo usuario e mostra na tela
nomeTimeA_html.innerText = nomeTimeA;
nomeTimeB_html.innerText = nomeTimeB;

function zerarSet(){
    setA = 0;
    setB = 0;
    setA_html.innerText = setA;
    setB_html.innerText = setB;

}
function zerarPlacar(){
    pontoA = 0;
    pontoB = 0;
    pontuacaoA_html.innerText = pontoA;
    pontuacaoB_html.innerText = pontoB;
}

function pontoProA(){
    pontoA++;
    pontuacaoA_html.innerText = pontoA;

    if(pontoA >= 25 && pontoA - pontoB >= 2){
        setA++;
        setA_html.innerText = setA;
        alert("time "+nomeTimeA+" venceu o set!");
        zerarPlacar();
        if(setA >= 3){
            alert("Fim de jogo! o time "+nomeTimeA+" foi o vencedor!");
            zerarPlacar();
            zerarSet();
        }
    }
}

function pontoProB(){
    pontoB++;
    pontuacaoB_html.innerText = pontoB;

    if(pontoB >= 25 && pontoB - pontoA >= 2){
        setB++;
        setB_html.innerText = setB;
        alert("Time "+nomeTimeB+" venceu o set!");
        zerarPlacar();
        if(setB >= 3){
            alert("Fim de jogo! o time "+nomeTimeB+" foi o vencedor!");
            zerarPlacar();
            zerarSet();
        }
    }
}


pontuacaoA_html.addEventListener("click", pontoProA );
pontuacaoB_html.addEventListener("click", pontoProB );