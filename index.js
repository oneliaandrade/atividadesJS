class Banco{
    constructor (conta, saldo, tipo, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tpo = tipo;
        this.agencia = agencia;
    }

  //Métodos

    mostrarSaldo(){
        console.log(`Seu saldo é ${this.saldo}`);
    }
    deposito(valor){
        this.saldo += valor
        console.log(`Depósito realizado com sucesso. Seu saldo atual é de ${this.saldo}`)
    }
    numConta(){
        console.log(this.conta);
    }
    saque(valor){
        if (this.saldo >= valor) {
        this.saldo -= valor
        console.log(`Saque realizado com sucesso. Seu saldo atual é de ${this.saldo}`)
        }else {
            console.error(`Erro: Saldo insuficiente ${valor}  é maior do que o saldo ${this.saldo}.`);
        }
    }
}
//Criar conta

var conta = new Banco("51024", 2.500, "conta-salário", "2548-7");

//Mostrar Saldo
conta.mostrarSaldo();

//depositar
conta.deposito(5.000);

//Número da conta
conta.numConta();

//Sacar
conta.saque(1500);

