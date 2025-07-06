const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que área está suas maiores habilidades?",
        alternativas: [
            {
                texto: "humanas",
                afirmacao: "Gosta das ciências que envolvem sociedade, cultura, história."
            },
            {
                texto: "exatas",
                afirmacao: "Gosta das ciências de lógica, matemática, fórmulas."
            }
        ]
    },
    {
        enunciado: "Você prefere trabalhar:",
        alternativas: [{
                texto: "Com pessoas, ajudando, ensinando ou orientando.",
                afirmacao: "Tem mais habilidades sociais e de comunicação."
            },
            {
                texto: "Com coisas, dados ou sistemas, resolvendo problemas técnicos.",
                afirmacao: "Tem mais habilidades lógicas, de experimentos e matemática."
            }
            
            
        ]
    },
    {
        enunciado: "Em um dia ideal de trabalho, você gostaria mais de:",
        alternativas: [{
                texto: "Ter variedade, contato humano e dinamicidade",
                afirmacao: "Há maior aptidão para disciplinas como geografia, filosofia, história, psicologia, etc."
            },
            {
                texto: " Focar em tarefas objetivas, com rotina e concentração",
                afirmacao: "Há maior aptidão para disciplinas como química, física, computação, estatística."
            }
            
            
        ]
    },
    {
        enunciado: "Você se sente mais satisfeito quando:",
        alternativas: [{
                texto:  "Vê o impacto direto do seu trabalho na vida de alguém",
                afirmacao: "Se importa com questões sociais, políticas e éticas."
            },
            {
                texto: "Consegue solucionar algo complexo ou construir algo eficiente",
                afirmacao: "Quer estudar fenômenos por meio de números e cálculos."
            }
            
           
            
        ]
    },
    {
        enunciado: "O que mais te atrai em uma profissão:",
        alternativas: [{
                texto:   "Sentir propósito e conexão com os outros",
                afirmacao: "Quer entender melhor a si mesmo e aos outros."
            },
            {
                texto:  "Desafios intelectuais e reconhecimento técnico",
                afirmacao: "Quer analisar problemas, seguir etapas lógicas e trabalhar com conceitos."
            }
           ] 
           
           
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}
function mostraResultado() {
  caixaPerguntas.textContent = "Sobre a sua profissão...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

mostraPergunta();