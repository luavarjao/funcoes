const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor){
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor
        });
        console.log(`Deposito de R$ ${valor/100} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor){
        if(valor > this.saldo){
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= valor;
            this.historicos.push({
                tipo: "Saque",
                valor
            });
            console.log(`Saque de R$ ${valor/100} realizado para o cliente: ${this.nome}`);
        };
    },
    extrato: function (){
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo/100}`);
        console.log(`Histórico:`);
        for(let i of this.historicos){
            console.log(`${i.tipo} de R$${i.valor/100}`);
        };
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();