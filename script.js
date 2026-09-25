/* =====================================================
   DADOS DO QUESTIONÁRIO
===================================================== */

const perguntas = [
    {
        pergunta: "Qual atividade você mais gostaria de realizar?",
        opcoes: [
            {
                texto: "Criar aplicativos, jogos ou soluções tecnológicas",
                perfil: "tecnologia"
            },
            {
                texto: "Ajudar pessoas a resolver problemas",
                perfil: "humanas"
            },
            {
                texto: "Criar desenhos, vídeos, músicas ou outros conteúdos",
                perfil: "criatividade"
            },
            {
                texto: "Investigar fenômenos e descobrir como as coisas funcionam",
                perfil: "ciencias"
            }
        ]
    },

    {
        pergunta: "Qual matéria escolar costuma despertar mais seu interesse?",
        opcoes: [
            {
                texto: "Matemática ou Física",
                perfil: "tecnologia"
            },
            {
                texto: "História, Geografia ou Filosofia",
                perfil: "humanas"
            },
            {
                texto: "Artes, Literatura ou atividades criativas",
                perfil: "criatividade"
            },
            {
                texto: "Biologia ou Química",
                perfil: "ciencias"
            }
        ]
    },

    {
        pergunta: "Como você prefere resolver um problema?",
        opcoes: [
            {
                texto: "Usando lógica e analisando dados",
                perfil: "tecnologia"
            },
            {
                texto: "Conversando com as pessoas envolvidas",
                perfil: "humanas"
            },
            {
                texto: "Pensando em soluções diferentes e inovadoras",
                perfil: "criatividade"
            },
            {
                texto: "Fazendo pesquisas e experimentos",
                perfil: "ciencias"
            }
        ]
    },

    {
        pergunta: "Qual ambiente de trabalho parece mais interessante para você?",
        opcoes: [
            {
                texto: "Computadores, tecnologia e ambientes digitais",
                perfil: "tecnologia"
            },
            {
                texto: "Escolas, empresas, comunidades ou instituições",
                perfil: "humanas"
            },
            {
                texto: "Estúdios, agências ou ambientes de criação",
                perfil: "criatividade"
            },
            {
                texto: "Laboratórios, hospitais ou centros de pesquisa",
                perfil: "ciencias"
            }
        ]
    },

    {
        pergunta: "Qual destas características mais combina com você?",
        opcoes: [
            {
                texto: "Gosto de analisar e encontrar padrões",
                perfil: "tecnologia"
            },
            {
                texto: "Gosto de ouvir e compreender as pessoas",
                perfil: "humanas"
            },
            {
                texto: "Tenho muitas ideias e gosto de criar",
                perfil: "criatividade"
            },
            {
                texto: "Sou curioso e gosto de descobrir como as coisas funcionam",
                perfil: "ciencias"
            }
        ]
    },

    {
        pergunta: "Que tipo de projeto você gostaria de desenvolver?",
        opcoes: [
            {
                texto: "Um aplicativo ou uma ferramenta digital",
                perfil: "tecnologia"
            },
            {
                texto: "Um projeto social ou educacional",
                perfil: "humanas"
            },
            {
                texto: "Um filme, campanha ou projeto artístico",
                perfil: "criatividade"
            },
            {
                texto: "Uma pesquisa ou experimento científico",
                perfil: "ciencias"
            }
        ]
    },

    {
        pergunta: "Qual atividade você escolheria para aprender no seu tempo livre?",
        opcoes: [
            {
                texto: "Programação ou robótica",
                perfil: "tecnologia"
            },
            {
                texto: "Debates, leitura ou atividades sociais",
                perfil: "humanas"
            },
            {
                texto: "Fotografia, edição, desenho ou música",
                perfil: "criatividade"
            },
            {
                texto: "Experimentos ou documentários científicos",
                perfil: "ciencias"
            }
        ]
    },

    {
        pergunta: "Qual impacto você gostaria que seu trabalho tivesse?",
        opcoes: [
            {
                texto: "Criar novas tecnologias e facilitar tarefas",
                perfil: "tecnologia"
            },
            {
                texto: "Contribuir para a vida das pessoas e da sociedade",
                perfil: "humanas"
            },
            {
                texto: "Inspirar, comunicar ideias ou produzir experiências",
                perfil: "criatividade"
            },
            {
                texto: "Produzir conhecimento e ajudar a solucionar problemas científicos",
                perfil: "ciencias"
            }
        ]
    }
];


/* =====================================================
   PERFIS PROFISSIONAIS
===================================================== */

const perfis = {

    tecnologia: {
        nome: "Tecnologia e Computação",
        emoji: "💻",
        descricao:
            "Suas respostas indicam interesse por lógica, tecnologia, resolução de problemas e ferramentas digitais.",
        carreiras: [
            "Desenvolvimento de software",
            "Ciência de dados",
            "Engenharia de software",
            "Cibersegurança",
            "Inteligência artificial",
            "Análise de sistemas"
        ]
    },

    humanas: {
        nome: "Humanidades e Sociedade",
        emoji: "🌎",
        descricao:
            "Suas respostas indicam interesse por pessoas, sociedade, comunicação, educação e compreensão das relações humanas.",
        carreiras: [
            "Psicologia",
            "Direito",
            "Pedagogia",
            "Jornalismo",
            "Administração",
            "Serviço social"
        ]
    },

    criatividade: {
        nome: "Criatividade e Comunicação",
        emoji: "🎨",
        descricao:
            "Suas respostas indicam interesse por criação, comunicação, expressão artística e desenvolvimento de ideias.",
        carreiras: [
            "Design",
            "Publicidade e propaganda",
            "Arquitetura",
            "Produção audiovisual",
            "Marketing",
            "Design de experiência (UX)"
        ]
    },

    ciencias: {
        nome: "Ciências e Pesquisa",
        emoji: "🔬",
        descricao:
            "Suas respostas indicam curiosidade científica, interesse por investigação, experimentação e compreensão dos fenômenos.",
        carreiras: [
            "Biomedicina",
            "Química",
            "Biologia",
            "Engenharias",
            "Farmácia",
            "Pesquisa científica"
        ]
    }
};


/* =====================================================
   VARIÁVEIS DO SISTEMA
===================================================== */

let perguntaAtual = 0;

let respostas = [];

let perfilSelecionado = null;


/* =====================================================
   ELEMENTOS HTML
===================================================== */

const inicio = document.getElementById("inicio");
const questionario = document.getElementById("questionario");
const resultado = document.getElementById("resultado");

const btnIniciar = document.getElementById("btnIniciar");
const btnVoltar = document.getElementById("btnVoltar");
const btnProxima = document.getElementById("btnProxima");
const btnReiniciar = document.getElementById("btnReiniciar");

const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");

const numeroPergunta = document.getElementById("numeroPergunta");
const contador = document.getElementById("contador");
const barraProgresso = document.getElementById("barraProgresso");

const descricaoPerfil = document.getElementById("descricaoPerfil");
const resultadosElemento = document.getElementById("resultados");


/* =====================================================
   INICIAR QUESTIONÁRIO
===================================================== */

btnIniciar.addEventListener("click", () => {

    inicio.classList.add("hidden");

    questionario.classList.remove("hidden");

    perguntaAtual = 0;

    respostas = [];

    mostrarPergunta();
});


/* =====================================================
   MOSTRAR PERGUNTA
===================================================== */

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1}`;

    contador.textContent =
        `${perguntaAtual + 1} / ${perguntas.length}`;

    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    barraProgresso.style.width = `${progresso}%`;

    opcoesElemento.innerHTML = "";

    btnProxima.disabled = true;

    pergunta.opcoes.forEach((opcao, index) => {

        const botao = document.createElement("button");

        botao.classList.add("opcao");

        botao.textContent = opcao.texto;

        botao.addEventListener("click", () => {

            selecionarOpcao(botao, opcao.perfil);

        });

        opcoesElemento.appendChild(botao);

    });


    // Se já existe uma resposta para esta pergunta,
    // marcar novamente a opção escolhida.

    if (respostas[perguntaAtual]) {

        const botoes =
            document.querySelectorAll(".opcao");

        botoes.forEach(botao => {

            const texto =
                botao.textContent;

            const opcaoEncontrada =
                pergunta.opcoes.find(
                    opcao => opcao.texto === texto
                );

            if (
                opcaoEncontrada &&
                opcaoEncontrada.perfil === respostas[perguntaAtual]
            ) {

                botao.classList.add("selecionada");

                btnProxima.disabled = false;

            }

        });

    }

    atualizarBotaoVoltar();
}


/* =====================================================
   SELECIONAR OPÇÃO
===================================================== */

function selecionarOpcao(botao, perfil) {

    const botoes =
        document.querySelectorAll(".opcao");

    botoes.forEach(item => {
        item.classList.remove("selecionada");
    });

    botao.classList.add("selecionada");

    respostas[perguntaAtual] = perfil;

    btnProxima.disabled = false;
}


/* =====================================================
   BOTÃO PRÓXIMA
===================================================== */

btnProxima.addEventListener("click", () => {

    if (!respostas[perguntaAtual]) {
        return;
    }

    if (perguntaAtual < perguntas.length - 1) {

        perguntaAtual++;

        mostrarPergunta();

    } else {

        calcularResultado();

    }

});


/* =====================================================
   BOTÃO VOLTAR
===================================================== */

btnVoltar.addEventListener("click", () => {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        mostrarPergunta();

    } else {

        questionario.classList.add("hidden");

        inicio.classList.remove("hidden");

    }

});


/* =====================================================
   ATUALIZAR BOTÃO VOLTAR
===================================================== */

function atualizarBotaoVoltar() {

    if (perguntaAtual === 0) {

        btnVoltar.textContent = "Início";

    } else {

        btnVoltar.textContent = "Voltar";

    }

}


/* =====================================================
   CALCULAR RESULTADO
===================================================== */

function calcularResultado() {

    const pontuacao = {

        tecnologia: 0,
        humanas: 0,
        criatividade: 0,
        ciencias: 0

    };


    // Conta quantas respostas cada perfil recebeu.

    respostas.forEach(perfil => {

        if (pontuacao[perfil] !== undefined) {

            pontuacao[perfil]++;

        }

    });


    // Organiza os perfis pela quantidade de pontos.

    const ranking =
        Object.entries(pontuacao)
            .sort((a, b) => b[1] - a[1]);


    // Primeiro perfil é o predominante.

    perfilSelecionado = ranking[0][0];


    mostrarResultado(ranking);

}


/* =====================================================
   MOSTRAR RESULTADO
===================================================== */

function mostrarResultado(ranking) {

    questionario.classList.add("hidden");

    resultado.classList.remove("hidden");

    const perfilPrincipal =
        perfis[perfilSelecionado];


    descricaoPerfil.textContent =
        perfilPrincipal.descricao;


    resultadosElemento.innerHTML = "";


    /*
       Mostra os quatro perfis ordenados pela
       quantidade de respostas.

       Isso evita apresentar apenas uma profissão
       como se fosse uma decisão definitiva.
    */

    ranking.forEach(([nomePerfil, pontos]) => {

        const perfil =
            perfis[nomePerfil];

        const card =
            document.createElement("div");

        card.classList.add("resultado-card");

        const percentual =
            Math.round(
                (pontos / perguntas.length) * 100
            );


        card.innerHTML = `

            <div class="emoji">
                ${perfil.emoji}
            </div>

            <h4>
                ${perfil.nome}
            </h4>

            <p>
                ${perfil.descricao}
            </p>

            <div class="tags">

                ${perfil.carreiras
                    .map(carreira =>
                        `<span class="tag">${carreira}</span>`
                    )
                    .join("")
                }

            </div>

            <p style="margin-top: 15px; font-size: 13px;">
                Afinidade no questionário: ${percentual}%
            </p>

        `;

        resultadosElemento.appendChild(card);

    });

}


/* =====================================================
   REINICIAR
===================================================== */

btnReiniciar.addEventListener("click", () => {

    perguntaAtual = 0;

    respostas = [];

    perfilSelecionado = null;

    resultado.classList.add("hidden");

    inicio.classList.remove("hidden");

});