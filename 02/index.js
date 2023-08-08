var carro = {
    ligado: false,
    velocidade: 0
}

function ligar (carro) {
    if (carro.ligado){
        return console.log("Este carro já esta ligado");
    } else {
        carro.ligado = true;
        console.log(`Carro [ligado]. Velocidade: ${carro.velocidade}`)
    }
} 

function desligar (carro) {
    if (!carro.ligado){
        return console.log("Este carro já esta desligado");
    } else if(carro.velocidade === 0){
        carro.ligado = false;
        console.log(`Carro [desligado]. Velocidade: ${carro.velocidade}`)
    } else {
        console.log(`Velocidade ${carro.velocidade}, necessário diminuir velocidade para desligar`)
    }
} 

function acelerar (carro) {
    if (!carro.ligado){
        ligar(carro);
    } else {
        carro.velocidade += 10;
        console.log(`Carro [ligado]. Velocidade: ${carro.velocidade}`);
    }
} 

function desacelerar (carro) {
    if (!carro.ligado){
        return console.log("Não é possível desacelerar um carro desligado");
    } else if(carro.velocidade === 10){
        desligar(carro);
    }else {
        carro.velocidade -= 10;
        console.log(`Carro [ligado]. Velocidade: ${carro.velocidade}`);
    }
    }

desligar(carro);
//console.log(carro);
ligar(carro);
//console.log(carro);
ligar(carro);
//console.log(carro);
acelerar(carro);
//console.log(carro);
acelerar(carro);
//console.log(carro);
desacelerar(carro);
//console.log(carro);
desligar(carro);
//console.log(carro);
acelerar(carro);
//console.log(carro);
desacelerar(carro);
//console.log(carro);

