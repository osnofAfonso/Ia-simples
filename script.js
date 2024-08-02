const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se encontra em uma situação dificil. O que significa crescer para você?",
        alternativas: [
            {
                texto: "Aprender com novas experiências e desafios",
                afirmacao: "Ao aprender com novas experiências e desafios é essencial para o crescimento pessoal. Ao se expor a novas situações e aprender com elas, você expande seus horizontes e desenvolve habilidades valiosas para o futuro."
            },
            {
                texto: "Manter as coisas como sempre foram, sem muitas mudanças.",
                afirmacao: "Você prefere manter as coisas como sempre foram pode significar resistência à mudança. Embora haja conforto na familiaridade, o crescimento muitas vezes requer enfrentar o desconhecido e se adaptar a novos cenários."
            }
        ]
    },
    {
        enunciado: "Como você lida com mudanças na sua vida?",
        alternativas: [
            {
                texto: "Encaro as mudanças como oportunidades de crescimento pessoal.",
                afirmacao: "Ao encarar as mudanças como oportunidades de crescimento pessoal indica uma mentalidade aberta e receptiva. Essa atitude pode abrir portas para novas experiências e realizações que não seriam possíveis sem a disposição para se adaptar."
            },
            {
                texto: "Prefiro evitar mudanças para manter a estabilidade.",
                afirmacao: " Você sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Qual a importância de sair da zona de conforto para você?",
        alternativas: [
            {
                texto: "É essencial para alcançar novos objetivos e expandir meus horizontes.",
                afirmacao: "Sair da zona de conforto é fundamental para explorar novos territórios e alcançar objetivos mais ambiciosos. Ao enfrentar desafios e superar limitações pessoais, você expande suas habilidades e fortalece sua capacidade de adaptação."
            },
            {
                texto: "Prefiro permanecer na zona de conforto para evitar desconfortos.",
                afirmacao: "Permanecer na zona de conforto pode proporcionar uma sensação de segurança, mas também pode limitar o crescimento pessoal. A resistência à mudança pode impedir novas oportunidades e experiências enriquecedoras."
            }
        ]
    },
    {
        enunciado: "Como você encara novos desafios?",
        alternativas: [
            {
                texto: "Como oportunidades para aprender e evoluir.",
                afirmacao: "Ao encarar novos desafios como oportunidades de aprendizado e crescimento pessoal é essencial para desenvolver habilidades e alcançar novos patamares. Cada desafio superado representa uma oportunidade de fortalecimento e evolução."
             },
            {
                texto: "Como obstáculos que devem ser evitados ou minimizados.",
                afirmacao: "Quando ver novos desafios como obstáculos pode limitar o crescimento pessoal. Embora possa ser tentador evitar dificuldades, enfrentar desafios pode proporcionar experiências valiosas e oportunidades de crescimento que não devem ser subestimadas."
            }
        ]
    },
    {
        enunciado: "O que você espera alcançar ao longo da sua jornada de crescimento pessoal?",
        alternativas: [
            {
                texto: "Desenvolver novas habilidades e alcançar metas desafiadoras.                ",
                afirmacao: "Ao longo da jornada de crescimento pessoal, desenvolver novas habilidades e alcançar metas desafiadoras são metas fundamentais. Cada conquista representa um passo em direção ao autoaperfeiçoamento e à realização de objetivos pessoais."
            },
            {
                texto: "Manter as coisas estáveis e confortáveis, sem grandes mudanças.",
                afirmacao: "Ao Manter as coisas estáveis e confortáveis pode trazer uma sensação de segurança, mas pode limitar o potencial de crescimento pessoal a longo prazo. Explorar novas oportunidades e desafios pode abrir novos horizontes e proporcionar uma maior realização pessoal"
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
