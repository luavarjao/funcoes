const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva (prova) {
    let x = 0;
    for(let i of prova.questoes){
        if(i.resposta === i.correta){
            x++;
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${x} questões e obteve nota ${x*2}`)
}

corrigirProva(prova);