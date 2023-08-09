const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    addProduto: function (produto){
        let x = 0;
        for(let i of this.produtos){
            if(i.id === produto.id){
                i.qtd += produto.qtd;
                x++;
            }
        }
        if (x === 0){
            this.produtos.push(produto);
        }
    },
    imprimirResumo: function (){
        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(``);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)}`)
    },
    imprimirDetalhes: function (){
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(``);
        for(let a of this.produtos){
            console.log(`Item ${a.id} - ${a.nome} - ${a.qtd} und - R$ ${((a.qtd*a.precoUnit)/100).toFixed(2)}`)
        }
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)}`);
    },
    calcularTotalDeItens: function (){
            let totalItens = 0;
        for (let i of this.produtos){
            totalItens += i.qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: function () {
        let soma = 0;
        for (let i of this.produtos){
            soma += (i.precoUnit/100) * i.qtd;
        }
        return soma;
    },
    calcularDesconto: function (desconto){
        let desconto1 = 100000;
        let desconto2 = 100000;
        if(this.calcularTotalDeItens() > 3){
            for(let a of this.produtos){
                if((a.precoUnit/100) < desconto1){
                    desconto1 = a.precoUnit/100;
                }
            }
        }
        if (this.calcularTotalAPagar() > 100){
            desconto2 = this.calcularTotalAPagar()/10;
        }
        if (desconto1 > desconto2){
            desconto = desconto1;
        } else {
            desconto = desconto2;
        }
        let valorFinal = this.calcularTotalAPagar() - desconto;
        console.log(`Com desconto de R$ ${desconto.toFixed(2)}, valor total será de ${valorFinal.toFixed(2)}`)
    }
    }


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
//carrinho.imprimirResumo();
//carrinho.imprimirDetalhes(carrinho);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);

carrinho.imprimirResumo();
console.log(``)
carrinho.imprimirDetalhes();
console.log(``)
carrinho.calcularDesconto();
