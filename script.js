const questions = [
    {
        question: "Quin pais te mes poblacio?",
        respostaCorrecta: "La Xina",
        respostaIncorrecta: "L'India",
    },
    {
        question: "El primer astronauta a trepitjar la Lluna va ser?",
        respostaCorrecta: "Neil Armstrong",
        respostaIncorrecta: "Louis Armstrong",
    }
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.style.display = "none";

function barrejaRespostes(correcta,falso){
    const respostes = [correcta,falso];
    respostes.sort(() => Math.random() - 0.5);
    return respostes;
}

function mostraQuestio() {

    if(indexQuestioActual < questions.length){

        const questioActual = questions[indexQuestioActual];
        questioProposada.textContent = questioActual.question;

        const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(questioActual.respostaCorrecta,questioActual.respostaIncorrecta);

        btnEsquerre.textContent = barrejatCorrecte;
        btnDret.textContent = barrejatIncorrecte;
    }else{
        //Juego terminado.
        if(respostesCorrectes === questions.length){
            questioProposada.textContent = "";
            missatge.textContent = "Has guanyat! Has respost totes les questions correctament!";
        }else{
            questioProposada.textContent = "";
            missatge.textContent = `Joc acabat. Respostes correctes: ${respostesCorrectes}, Respostes incorrectes: ${respostesIncorrectes}`;
        }
        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "block";
    }

    
}
function comprovaResposta(respostaSeleccionada){

    const questioActual = questions[indexQuestioActual];
    if(respostaSeleccionada == questioActual.respostaCorrecta){
        respostesCorrectes++;
    }else{
        respostesIncorrectes++; 
    }

    indexQuestioActual++;

    mostraQuestio();
}

btnEsquerre.addEventListener("click",() => comprovaResposta(btnEsquerre.textContent));
btnDret.addEventListener("click",() => comprovaResposta(btnDret.textContent));
btnReiniciar.addEventListener("click", () =>{
    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
})

// Començar joc amb mostraQuestio;
mostraQuestio();